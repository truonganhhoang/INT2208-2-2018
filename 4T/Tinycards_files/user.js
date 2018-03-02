import * as _ from 'lodash';
import api from 'util/api';
import Rollbar from 'util/rollbar';
import { getNewPreferenceState } from 'util/userPreferences';

/**
 * Dispatched when the user store needs to be set. It fetches a user's
 * preferences, configures rollbar, and dispatches a 'SET_USER' action
 * when it's done. This is asynchronous, so make sure any event tracking
 * that depends on the user state being set happens after the promise resolves!
 *
 * @param {object} user The user model to set (usually returned from the API)
 * @returns {Promise} Resolves if getting user preferences was successful.
 */
export const setUser = user => dispatch => {
  if (user) {
    // Configure rollbar. TODO: can this live in the state?
    Rollbar.configure({
      payload: {
        user: {
          id: user.id,
          username: user.username,
        },
      },
    });
    // Get user preferences
    return api.get(`users/${user.id}/preferences`).then(result => {
      dispatch({
        type: 'SET_USER',
        preferences: result.data,
        user,
      });
    });
  }
  return Promise.resolve();
};

/**
 * Dispatched when the current user model needs to be updated.
 *
 * @param {Object} data The data to set on the user model
 * @returns {Promise} Resolves if the user update succeeded.
 */
export const updateUser = data => (dispatch, getState) =>
  api.patch(`users/${getState().user.get('id')}`, data).then(result => {
    dispatch({
      type: 'UPDATE_USER',
      user: result.data,
    });
  });

/**
 * Dispatched in order to unset the user from the state.
 */
export const deleteUser = () => ({ type: 'DELETE_USER' });

/**
 * Dispatched to update the current user's profile picture.
 *
 * @param {File} imageFile The image file to upload
 * @returns {Promise} Resolves if the user update succeeded.
 */
export const updateUserPicture = imageFile => (dispatch, getState) => {
  const user = getState().user;
  const formData = new FormData();
  formData.append('imageFile', imageFile);
  return api.post(`users/${user.get('id')}/pictures`, formData).then(result =>
    dispatch({
      type: 'UPDATE_USER',
      user: result.data,
    })
  );
};

/**
 * Dispatched to update user preferences. Values are passed as boolean
 * true/false and then mapped to the correct API parameter based on
 * the current state.
 *
 * @param {Object} preferences Preference toggles to set
 * @returns {Promise} Resolves if the user update succeeded.
 */
export const updateUserPreferences = preferences => (dispatch, getState) => {
  const current = getState().preferences;
  const update = {};
  _.forEach(preferences, (value, key) => {
    update[key] = getNewPreferenceState(key, current.get(key), value);
  });
  return api
    .patch(`users/${getState().user.get('id')}/preferences`, {
      preferences: JSON.stringify(update),
    })
    .then(result => {
      dispatch({
        type: 'UPDATE_PREFERENCES',
        preferences: result.data,
      });
    });
};



// WEBPACK FOOTER //
// ./src/actions/user.js