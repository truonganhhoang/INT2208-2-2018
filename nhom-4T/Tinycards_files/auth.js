import * as _ from 'lodash';
import jwtDecode from 'jwt-decode';
import { push } from 'react-router-redux';

import { setUser, deleteUser } from 'actions/user';
import { showModal } from 'actions/ui';
import { trackEvent } from 'actions/metric';

import api from 'util/api';
import { getCookie } from 'util/cookie';
import { getCurrentUiLanguage } from 'util/language';
import { getTimeZone } from 'util/time';
import { getUserSurveyStatus } from 'util/user';
import { JWT_COOKIE_NAME } from 'util/auth';

/**
 * Dispatched when the user should be logged out. It will dispatch a
 * 'DELETE_USER' action when it's done.
 *
 * @returns {Promise} Resolves when the logout is complete.
 */
export const logout = () => dispatch => {
  dispatch(trackEvent('logout')).then(() => {
    api.post('logout').then(() => {
      window.scrollTo(0, 0);
      dispatch(deleteUser());
      dispatch(push('/'));
    });
  });
};

/**
 * Show the survey modal to a user who has never seen it before. If a user
 * is not logged in, or has seen the survey, or is a trial user then this action
 * does nothing.
 *
 * @returns {Promise} Resolves when survey status is determined.
 */
export const showSurvey = () => (dispatch, getState) => {
  const user = getState().user;
  if (user.has('username')) {
    // TODO: survey status should live in the redux store
    return getUserSurveyStatus(user.get('id')).then(() => {
      dispatch(showModal('survey'));
    });
  }
  return Promise.resolve();
};

/**
 * Request a password recovery at the given email.
 *
 * @param {string} email The email to recover a password for.
 */
export const resetPassword = email => () => {
  api.post('reset-password', { email });
};

/**
 * Create a new account for a user. If credentials has a social media
 * access token, then the new account will be created using their social media
 * profile. If no credentials are provided, a trial account is created.
 * If a trial user is already logged in, their account will be patched
 * with the new credentials.
 *
 * @param {immutable.Map<string, string>} [credentials] Account credentials
 * @returns {Promise} Resolves when signup is complete
 */
export const signup = credentials => (dispatch, getState) => {
  const data = {
    fromLanguage: getCurrentUiLanguage(),
    timezone: getTimeZone(),
  };
  const trackingData = {};
  if (credentials && credentials.get('googleToken')) {
    trackingData.auth = 'google';
  } else if (credentials && credentials.get('facebookToken')) {
    trackingData.auth = 'facebook';
  }
  const createUser = () =>
    dispatch(trackEvent('login_old_id')).then(() =>
      api
        .post(
          'users',
          _.extend(data, credentials ? credentials.toObject() : {})
        )
        .then(result => dispatch(setUser(result.data)))
    );
  const convertTrial = user =>
    api
      .patch(`users/${user.get('id')}`, credentials)
      .then(result => dispatch(setUser(result.data)));

  const user = getState().user;
  if (!credentials) {
    // No credentials -- create a trial user
    return createUser()
      .then(() => dispatch(trackEvent('trial_start')))
      .then(() => dispatch(trackEvent('welcome')));
  }
  if (user && !user.get('username')) {
    // Trial user -- convert
    return convertTrial(user)
      .then(() => dispatch(trackEvent('register', trackingData)))
      .then(() => dispatch(showSurvey()));
  }
  // No user with credentials -- create
  return createUser()
    .then(() => dispatch(trackEvent('welcome')))
    .then(() => dispatch(trackEvent('register', trackingData)))
    .then(() => dispatch(showSurvey()));
};

/**
 * Login a user with the given credentials. When logging in a new user
 * with FB or Google, we will automatically create a new account for them
 * if necessary.
 *
 * @param {immutable.Map<string, string>} credentials Login credentials for FB,
 *        Google, or Duolingo.
 * @returns {Promise} Resolves when signup is complete
 */
export const login = credentials => dispatch => {
  if (credentials.get('googleToken')) {
    return api
      .post('login', credentials)
      .then(result =>
        dispatch(setUser(result.data)).then(() =>
          dispatch(trackEvent('login', { auth: 'google' }))
        )
      )
      .catch(() => dispatch(signup(credentials)));
  } else if (credentials.get('facebookToken')) {
    return api
      .post('login', credentials)
      .then(result =>
        dispatch(setUser(result.data)).then(() =>
          dispatch(trackEvent('login', { auth: 'facebook' }))
        )
      )
      .catch(() => dispatch(signup(credentials)));
  }
  return api
    .post('login', credentials)
    .then(result => dispatch(setUser(result.data)))
    .then(() => dispatch(trackEvent('login', { auth: 'identifier' })));
};

/**
 * Get the user from the browser cookie. This is asynchronous so make sure to
 * dispatch any tracking events that depend on the user state after the promise
 * is resolved.
 *
 * @returns {Promise} Resolves when the user is ready
 */
export const init = () => dispatch => {
  const jwt = getCookie(JWT_COOKIE_NAME);
  const userId = jwt ? jwtDecode(jwt).sub : null;
  if (!userId) {
    return Promise.resolve();
  }
  return api
    .get(`users/${userId}`)
    .then(result => dispatch(setUser(result.data)));
};



// WEBPACK FOOTER //
// ./src/actions/auth.js