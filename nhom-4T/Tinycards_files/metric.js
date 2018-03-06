import { track } from 'util/tracking';

/**
 * Dispatched to track events on Excess. This action is asynchronous and will
 * dispatch a 'TRACK_EVENT' action when it is done.
 *
 * TODO: migrate tracking code completely to redux.
 *
 * @param {string} event The event name to track.
 * @param {object} properties (optional) The event properties to track.
 */
export const trackEvent = (event, properties) => dispatch =>
  new Promise(resolve =>
    track(event, properties, () => {
      dispatch({
        type: 'TRACK_EVENT',
        event,
        properties,
      });
      resolve();
    })
  );



// WEBPACK FOOTER //
// ./src/actions/metric.js