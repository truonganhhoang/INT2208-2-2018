import { getEnvironmentalProperties } from 'util/tracking';

/**
 * Calls sendFeedback on a Tinydroid app. Should not be used without first
 * checking the Tinydroid version is greater than or equal to 9.
 */
export const submitAndroidFeedback = () => (dispatch, getState) => {
  const user = getState().user;
  // eslint-disable-next-line no-undef
  Android.sendFeedback(
    'mailto:tinycards-feedback@duolingo.com',
    JSON.stringify({
      experiments: user.get('experiments').toJS(),
      environment: getEnvironmentalProperties(user.toJS()),
    })
  );
};

/**
 * Changes the current Android environment. Requires an app restart to
 * take effect. CAUTION: only dispatch this if you know you are in a qa build
 * for Tinydroid.
 */
export const changeEnvironment = environment => () => {
  // eslint-disable-next-line no-undef
  Android.setEnvironment(environment);
};



// WEBPACK FOOTER //
// ./src/actions/android.js