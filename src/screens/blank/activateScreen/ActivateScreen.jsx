import React from 'react';

import { useHistory, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

import { activateAccountStart } from '../../../redux/auth/auth.actions';
import {
  selectActivate,
  selectError,
} from '../../../redux/auth/auth.selectors';
import { SpinnerCenter } from '../../../components/spinnerCenter/SpinnerCenter';

export const ActivateScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const activate = useSelector(selectActivate);
  const history = useHistory();

  activate ?? dispatch(activateAccountStart(id));

  if (error !== null && activate === true) {
    Swal.fire(
      'Éxito',
      'Cuenta activada, favor de iniciar sesión',
      'success'
    ).then(() => {
      history.push('/login');
    });
  }

  if (activate === false) {
    Swal.fire(
      'Error',
      'No se pudo activar su cuenta, favor de intentarlo más tarde',
      'error'
    ).then(() => {
      history.push('/login');
    });
  }

  return (
    <SpinnerCenter message="Estamos verificando su cuenta, Por favor espere." />
  );
};
