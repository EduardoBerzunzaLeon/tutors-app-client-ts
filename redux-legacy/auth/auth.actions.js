import authActionTypes from './auth.types';

export const emailSignInStart = (emailAndPassword) => ({
  type: authActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const googleSignInStart = (tokenId) => ({
  type: authActionTypes.GOOGLE_SIGN_IN_START,
  payload: tokenId,
});

export const facebookSignInStart = (tokenId) => ({
  type: authActionTypes.FACEBOOK_SIGN_IN_START,
  payload: tokenId,
});

export const renewTokenStart = () => ({
  type: authActionTypes.RENEW_TOKEN_START,
});

export const signInSuccess = (user) => ({
  type: authActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: authActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const signOutStart = () => ({
  type: authActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: authActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: authActionTypes.SIGN_OUT_FAILURE,
  payload: error,
});

export const signUpStart = (newUser) => ({
  type: authActionTypes.SIGN_UP_START,
  payload: newUser,
});

export const signUpSuccess = () => ({
  type: authActionTypes.SIGN_UP_SUCCESS,
});

export const signUpFailure = (error) => ({
  type: authActionTypes.SIGN_UP_FAILURE,
  payload: error,
});

export const activateAccountStart = (id) => ({
  type: authActionTypes.ACTIVATE_ACCOUNT_START,
  payload: id,
});

export const activateAccountSuccess = () => ({
  type: authActionTypes.ACTIVATE_ACCOUNT_SUCCESS,
});

export const activateAccountFailure = (error) => ({
  type: authActionTypes.ACTIVATE_ACCOUNT_FAILURE,
  payload: error,
});

export const forgotPasswordStart = (user) => ({
  type: authActionTypes.FORGOT_PASSWORD_START,
  payload: user,
});

export const forgotPasswordSuccess = () => ({
  type: authActionTypes.FORGOT_PASSWORD_SUCCESS,
});

export const forgotPasswordFailure = (error) => ({
  type: authActionTypes.FORGOT_PASSWORD_FAILURE,
  payload: error,
});

export const resetPasswordStart = (newPassword) => ({
  type: authActionTypes.RESET_PASSWORD_START,
  payload: newPassword,
});

export const resetPasswordFailure = (error) => ({
  type: authActionTypes.RESET_PASSWORD_FAILURE,
  payload: error,
});
