import authActionTypes from '../../../redux/auth/auth.types';

describe('Tests in auth types', () => {
  test('The types should be the same', () => {
    expect(authActionTypes).toEqual({
      EMAIL_SIGN_IN_START: '[AUTH] EMAIL_SIGN_IN_START',
      GOOGLE_SIGN_IN_START: '[AUTH] GOOGLE_SIGN_IN_START',
      FACEBOOK_SIGN_IN_START: '[AUTH] FACEBOOK_SIGN_IN_START',

      SIGN_IN_SUCCESS: '[AUTH] SIGN_IN_SUCCESS',
      SIGN_IN_FAILURE: '[AUTH] SIGN_IN_FAILURE',

      RENEW_TOKEN_START: '[AUTH] RENEW_TOKEN_START',

      SIGN_OUT_START: '[AUTH] SIGN_OUT_START',
      SIGN_OUT_SUCCESS: '[AUTH] SIGN_OUT_SUCCESS',
      SIGN_OUT_FAILURE: '[AUTH] SIGN_OUT_FAILURE',

      SIGN_UP_START: '[AUTH] SIGN_UP_START',
      SIGN_UP_SUCCESS: '[AUTH] SIGN_UP_SUCCESS',
      SIGN_UP_FAILURE: '[AUTH] SIGN_UP_FAILURE',

      ACTIVATE_ACCOUNT_START: '[AUTH] ACTIVATE_ACCOUNT_START',
      ACTIVATE_ACCOUNT_SUCCESS: '[AUTH] ACTIVATE_ACCOUNT_SUCCESS',
      ACTIVATE_ACCOUNT_FAILURE: '[AUTH] ACTIVATE_ACCOUNT_FAILURE',

      FORGOT_PASSWORD_START: '[AUTH] FORGOT_PASSWORD_START',
      FORGOT_PASSWORD_SUCCESS: '[AUTH] FORGOT_PASSWORD_SUCCESS',
      FORGOT_PASSWORD_FAILURE: '[AUTH] FORGOT_PASSWORD_FAILURE',

      RESET_PASSWORD_START: '[AUTH] RESET_PASSWORD_START',
      RESET_PASSWORD_SUCCESS: '[AUTH] RESET_PASSWORD_SUCCESS',
      RESET_PASSWORD_FAILURE: '[AUTH] RESET_PASSWORD_FAILURE',
    });
  });
});
