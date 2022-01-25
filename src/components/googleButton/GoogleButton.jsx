import React from 'react';
import GoogleLogin from 'react-google-login';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { googleSignInStart } from '../../redux/auth/auth.actions';
import { SlipButton } from '../slipButton/SlipButton';

export const GoogleButton = () => {
  const dispatch = useDispatch();

  const responseGoogle = (response) => {
    if (response.tokenId) {
      dispatch(googleSignInStart(response.tokenId));
    } else {
      Swal.fire(
        'Error',
        'Ocurrio un error con Google, favor de verificar la conexión a internet o el correo ingresado.',
        'error'
      );
    }
  };

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_CLIENT_ID_GOOGLE}
      render={(renderProps) => (
        <SlipButton
          color="purple"
          icon="google"
          label="Google"
          onClick={renderProps.onClick}
        />
      )}
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  );
};
