import React, { useEffect, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

import { useHistory, useParams } from 'react-router';
import { Controller, useForm } from 'react-hook-form';
import classNames from 'classnames';
import Swal from 'sweetalert2';

import { InputPassword } from '../../../components/inputPassword/InputPassword';
import {
  createErrorsArray,
  getFormErrorMessage,
} from '../../../utils/forms/handlerFormErrors';
import {
  resetPasswordScreenDefaultValues as defaultValues,
  resetPasswordScreenErrors,
} from '../../../utils/forms/authFormsData';
import { selectError } from '../../../redux/auth/auth.selectors';
import { resetPasswordStart } from '../../../redux/auth/auth.actions';

export const ResetPasswordScreen = () => {
  const { token } = useParams();

  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const history = useHistory();

  const {
    control,
    setError,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({ defaultValues });

  useEffect(() => {
    createErrorsArray(error, resetPasswordScreenErrors, setError);
  }, [error, setError]);

  useEffect(() => {
    if (error !== 'No se encontró el token' && error !== null) {
      Swal.fire('Error', error, 'error').then(() => {
        history.push('/login');
      });
    }
  }, [error, history]);

  const password = useRef();
  password.current = watch('password', defaultValues.confirmPassword);

  const onSubmit = (dataSubmit) => {
    const sendData = { ...dataSubmit, token };
    dispatch(resetPasswordStart(sendData));
  };

  return (
    <Card
      title="Cambia tu contraseña"
      className="p-shadow-5"
      style={{ width: '28rem' }}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="p-fluid ">
        <div className="p-field ">
          <div className="p-d-flex">
            <label htmlFor="password">Contraseña</label>
          </div>
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-shield"></i>
            </span>
            <Controller
              name="password"
              control={control}
              rules={{ required: 'Contraseña es requerida.' }}
              render={({ field, fieldState }) => (
                <InputPassword
                  id={field.name}
                  feedback={true}
                  {...field}
                  className={classNames({ 'p-invalid': fieldState.invalid })}
                />
              )}
            />
          </div>
          {getFormErrorMessage('password', errors)}
        </div>
        <div className="p-field ">
          <div className="p-d-flex">
            <label htmlFor="confirmPassword">Confirmar contraseña</label>
          </div>
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-lock"></i>
            </span>
            <Controller
              name="confirmPassword"
              control={control}
              rules={{
                required: 'Confirmar contraseña es obligatoria.',
                validate: (value) =>
                  value === password.current || 'Las contraseñas no coinciden',
              }}
              render={({ field, fieldState }) => (
                <InputPassword
                  id={field.name}
                  feedback={false}
                  {...field}
                  className={classNames({ 'p-invalid': fieldState.invalid })}
                />
              )}
            />
          </div>
          {getFormErrorMessage('confirmPassword', errors)}
        </div>
        <Button label="Restablecer contraseña" />
      </form>
    </Card>
  );
};
