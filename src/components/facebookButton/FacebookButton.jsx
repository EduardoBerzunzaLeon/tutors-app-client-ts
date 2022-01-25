import React from 'react';

import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { facebookSignInStart } from '../../redux/auth/auth.actions';
import { SlipButton } from '../slipButton/SlipButton';

export const FacebookButton = () => {
  const dispatch = useDispatch();

  const responseFacebook = (response) => {
    if (response.accessToken) {
      dispatch(facebookSignInStart(response.accessToken));
    } else {
      Swal.fire(
        'Error',
        'Ocurrio un error con Facebook, favor de verificar la conexión a internet o el correo ingresado.',
        'error'
      );
    }
  };

  return (
    <FacebookLogin
      appId={process.env.REACT_APP_CLIENT_ID_FACEBOOK}
      status={false}
      callback={responseFacebook}
      render={(renderProps) => (
        <SlipButton
          color="indigo"
          icon="facebook"
          label="Facebook"
          onClick={renderProps.onClick}
        />
      )}
    />
  );
};
