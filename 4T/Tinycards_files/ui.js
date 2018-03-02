import { fromJS } from 'immutable';
import { goBack, push, replace } from 'react-router-redux';

import { locationSelector, modalSelector } from 'selectors';

/**
 * Close the currently open modal by popping off the history stack.
 *
 * @param {string} modal The modal to close. If no modal is provided, it will
 * close whatever modal is currently open.
 */
export const closeModal = modal => (dispatch, getState) => {
  if (!modal || (modal && modalSelector(getState()) === modal)) {
    dispatch(goBack());
  }
};

/**
 * Push a modal onto the top of the browser history stack so that the back
 * button will close the modal. If a modal is already present, it will replace
 * the top of the browser history instead so that navigating back does not
 * time-travel through modals.
 *
 * @param {string} modal The name of the modal to open
 */
export const showModal = modal => (dispatch, getState) => {
  const current = locationSelector(getState());
  const next = current.merge(fromJS({ state: { modal } }));
  if (modalSelector(getState())) {
    dispatch(replace(next.toJS()));
  } else {
    dispatch(push(next.toJS()));
  }
};



// WEBPACK FOOTER //
// ./src/actions/ui.js