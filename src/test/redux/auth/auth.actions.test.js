import {
  emailSignInStart,
  signInFailure,
} from '../../../redux/auth/auth.actions';
import authActionTypes from '../../../redux/auth/auth.types';

describe('AuthActions Tests', () => {
  test('All actions should be work', () => {
    const credentials = {
      email: 'eduardoberzunzal@gmail.com',
      password: '1234567',
    };

    const emailSignInStartAction = emailSignInStart(credentials);
    const signInFailureAction = signInFailure('testError');

    expect(emailSignInStartAction).toEqual({
      type: authActionTypes.EMAIL_SIGN_IN_START,
      payload: credentials,
    });

    expect(signInFailureAction).toEqual({
      type: authActionTypes.SIGN_IN_FAILURE,
      payload: 'testError',
    });
  });
});
