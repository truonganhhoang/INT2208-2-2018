/**
 * Form actions that are usually connected to a redux-form. They will throw
 * submission errors on invalid input.
 */

import { Map } from 'immutable';
import { SubmissionError } from 'redux-form';

import { login, signup } from 'actions/auth';
import {
  updateUser,
  updateUserPicture,
  updateUserPreferences,
} from 'actions/user';

import api from 'util/api';
import { MAX_NAME_LENGTH } from 'util/user';
import { R } from 'data/strings';
import { _i } from 'util/i18n';

const MIN_PASSWORD_LENGTH = 6;

/**
 * Submit a login form
 *
 * @param {immutable.Map<string, string>} credentials Login credentials
 * @throws {redux-form.SubmissionError} Thrown if there is a submission error
 * @returns {Promise} Resolves when successful
 */
export const submitLogin = credentials => dispatch =>
  dispatch(login(credentials)).catch(error => {
    if (error && (error.status === 400 || error.status === 401)) {
      throw new SubmissionError({ _error: 'credentials' });
    } else {
      throw new SubmissionError({ _error: 'unknown' });
    }
  });

/**
 * Sign up a new user using an email, username, and password.
 *
 * @param {immutable.Map<string, string>} credentials Signup credentials.
 * @throws {redux-form.SubmissionError} Thrown if there is a submission error
 * @returns {Promise} Resolves when successful.
 */
export const submitSignup = credentials => dispatch => {
  const cleanedCredentials = new Map({
    email: credentials.get('email') ? credentials.get('email').trim() : '',
    name: credentials.get('name') ? credentials.get('name').trim() : '',
    password: credentials.get('password'),
  });
  return dispatch(signup(cleanedCredentials)).catch(error => {
    if (!error.data || !error.data.message || !error.data.message.details) {
      throw new SubmissionError({ _error: _i(R.UNKNOWN_ERROR) });
    }
    const errorEnum = error.data.message.details[0];
    switch (errorEnum) {
      case 'NAME_INVALID':
        if (cleanedCredentials.get('name').length > MAX_NAME_LENGTH) {
          throw new SubmissionError({ _error: _i(R.SHORTER_NAME) });
        } else {
          throw new SubmissionError({ _error: _i(R.INVALID_NAME) });
        }
      case 'EMAIL_INVALID':
        throw new SubmissionError({ _error: _i(R.INVALID_EMAIL) });
      case 'EMAIL_TAKEN':
        throw new SubmissionError({ _error: _i(R.EMAIL_TAKEN) });
      case 'PASSWORD_INVALID':
        throw new SubmissionError({
          _error: _i(R.PASSWORD_MIN_CHARACTERS, {
            password_min_characters: MIN_PASSWORD_LENGTH,
          }),
        });
      default:
        throw new SubmissionError({ _error: _i(R.UNKNOWN_ERROR) });
    }
  });
};

/**
 * Submit a user settings form to update user data, preferences, and picture.
 *
 * @param {Object} [user] User fields to change
 * @param {Object} [preferences] User preferences to change
 * @param {{url: string, file: File}} [picture] User picture to set
 * @throws {redux-form.SubmissionError} Thrown if there is a submission error
 * @returns {Promise} Resolves when successful
 */
export const submitUserSettings = (user, preferences, picture) => dispatch => {
  const promises = [];
  if (picture && picture.file) {
    promises.push(
      dispatch(updateUserPicture(picture.file)).catch(() => {
        throw new SubmissionError({ _error: _i(R.UNKNOWN_ERROR) });
      })
    );
  }
  if (user) {
    promises.push(
      dispatch(updateUser(user)).catch(error => {
        if (!error.data || !error.data.message || !error.data.message.details) {
          throw new SubmissionError({ _error: _i(R.UNKNOWN_ERROR) });
        }
        const errorEnum = error.data.message.details[0];
        switch (errorEnum) {
          case 'USERNAME_TAKEN':
            throw new SubmissionError({ username: _i(R.USERNAME_TAKEN) });
          case 'USERNAME_INVALID':
            throw new SubmissionError({ username: _i(R.USERNAME_INVALID) });
          case 'NAME_INVALID':
            if (name.length > MAX_NAME_LENGTH) {
              throw new SubmissionError({ name: _i(R.SHORTER_NAME) });
            } else {
              throw new SubmissionError({ name: _i(R.INVALID_NAME) });
            }
          case 'EMAIL_INVALID':
            throw new SubmissionError({ _error: _i(R.INVALID_EMAIL) });
          case 'EMAIL_TAKEN':
            throw new SubmissionError({ _error: _i(R.EMAIL_TAKEN) });
          default:
            throw new SubmissionError({ _error: _i(R.UNKNOWN_ERROR) });
        }
      })
    );
  }
  if (preferences) {
    promises.push(
      dispatch(updateUserPreferences(preferences)).catch(() => {
        throw new SubmissionError({ _error: _i(R.UNKNOWN_ERROR) });
      })
    );
  }
  return Promise.all(promises);
};

/**
 * Send feedback as the current user. This action is asynchronous.
 *
 * @param {string} feedback The feedback to send.
 * @throws {redux-form.SubmissionError} Thrown if there is a submission error
 * @returns {Promise} Resolves when successful
 */
export const submitFeedback = feedback => (dispatch, getState) => {
  const user = getState().user;
  if (feedback.trim().length === 0) {
    return Promise.resolve();
  }
  return api
    .post('feedback-emails', {
      content: feedback,
      email: user.get('email'),
      userAgent: navigator.userAgent,
    })
    .catch(() => {
      throw new SubmissionError({ error: _i(R.UNKNOWN_ERROR) });
    });
};

/**
 * Submit a change password form.
 *
 * @param {string} password
 * @param {string} currentPassword
 * @param {string} confirmPassword
 * @throws {redux-form.SubmissionError} Thrown if there is a submission error
 * @returns {Promise} Resolves when successful
 */
export const submitChangePassword = (
  password,
  currentPassword,
  confirmPassword
) => dispatch => {
  if (!currentPassword || !password || !confirmPassword) {
    throw new SubmissionError({ _error: _i(R.ALL_FIELDS_REQUIRED) });
  } else if (password !== confirmPassword) {
    throw new SubmissionError({ _error: _i(R.PASSWORDS_DONT_MATCH) });
  }
  return dispatch(updateUser({ currentPassword, password })).catch(error => {
    if (!error.data || !error.data.message || !error.data.message.details) {
      throw new SubmissionError({ _error: _i(R.UNKNOWN_ERROR) });
    }
    const errorEnum = error.data.message.details[0];
    switch (errorEnum) {
      case 'PASSWORD_INVALID':
        throw new SubmissionError({ _error: _i(R.PASSWORD_TOO_SHORT) });
      case 'PASSWORD_INCORRECT':
        throw new SubmissionError({ _error: _i(R.INCORRECT_PASSWORD) });
      default:
        throw new SubmissionError({ _error: _i(R.UNKNOWN_ERROR) });
    }
  });
};



// WEBPACK FOOTER //
// ./src/actions/form.js