import React, { useEffect } from 'react';

import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { useDispatch, useSelector } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import classNames from 'classnames';

import { selectError } from '../../../redux/auth/auth.selectors';

import {
  forgotPasswordScreenDefaultValues as defaultValues,
  forgotPasswordScreenErrors,
} from '../../../utils/forms/authFormsData';

import {
  createErrorsArray,
  getFormErrorMessage,
} from '../../../utils/forms/handlerFormErrors';

import { forgotPasswordStart } from '../../../redux/auth/auth.actions';

export const ForgotPasswordScren = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  const {
    control,
    setError,
    formState: { errors },
    handleSubmit,
  } = useForm({ defaultValues });

  useEffect(() => {
    createErrorsArray(error, forgotPasswordScreenErrors, setError);
  }, [error, setError]);

  const onSubmit = ({ email }) => {
    const sendData = {
      email,
      url: process.env.REACT_APP_RESET_PASSWORD_URL,
    };
    dispatch(forgotPasswordStart(sendData));
  };

  return (
    <Card
      title="Restablece tu contraseña"
      className="p-shadow-5"
      style={{ width: '28rem' }}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="p-fluid ">
        <div className="p-field">
          <label htmlFor="user">Correo</label>
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-envelope"></i>
            </span>
            <Controller
              name="email"
              control={control}
              rules={{
                required: 'Correo es obligatorio.',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message:
                    'Correo Electrónico inválido. P. ej. ejemplo@email.com',
                },
              }}
              render={({ field, fieldState }) => (
                <InputText
                  id={field.name}
                  {...field}
                  autoFocus
                  className={classNames({ 'p-invalid': fieldState.invalid })}
                />
              )}
            />
          </div>
          {getFormErrorMessage('email', errors)}
        </div>
        <Button label="Enviar correo de cambio de contraseña" />
      </form>
    </Card>
  );
};
