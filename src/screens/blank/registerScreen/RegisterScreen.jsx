import React, { useEffect, useRef } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

import { useForm, Controller } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';
import { RadioButton } from 'primereact/radiobutton';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import { InputPassword } from '../../../components/inputPassword/InputPassword';
import { signUpStart } from '../../../redux/auth/auth.actions';
import { selectError } from '../../../redux/auth/auth.selectors';
import {
  createErrorsArray,
  getFormErrorMessage,
} from '../../../utils/forms/handlerFormErrors';

import {
  registerScreenDefaultValues as defaultValues,
  registerScreenErrors,
} from '../../../utils/forms/authFormsData';

export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  const {
    control,
    setError,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({ defaultValues });

  useEffect(() => {
    createErrorsArray(error, registerScreenErrors, setError);
  }, [error, setError]);

  const password = useRef();
  password.current = watch('password', defaultValues.confirmPassword);

  const onSubmit = (dataSubmit) => {
    const { first, last, ...dataWithoutName } = dataSubmit;
    const sendData = {
      name: {
        first,
        last,
      },
      url: process.env.REACT_APP_ACTIVE_URL,
      ...dataWithoutName,
    };
    dispatch(signUpStart(sendData));
  };

  return (
    <Card
      title="Crear cuenta"
      className="p-shadow-5"
      style={{ width: '35rem' }}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
        <div className="p-formgrid p-grid">
          <div className="p-field p-col-12">
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
          <div className="p-field p-col-12 p-sm-6">
            <label htmlFor="user">Nombre(s)</label>
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-user"></i>
              </span>
              <Controller
                name="first"
                control={control}
                rules={{
                  required: 'Nombre es obligatorio.',
                  pattern: {
                    value: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
                    message: 'Nombre inválido. P. ej. Eduardo Jesús',
                  },
                }}
                render={({ field, fieldState }) => (
                  <InputText
                    id={field.name}
                    {...field}
                    className={classNames({
                      'p-invalid': fieldState.invalid,
                    })}
                  />
                )}
              />
            </div>
            {getFormErrorMessage('first', errors)}
          </div>
          <div className="p-field p-col-12 p-sm-6">
            <label htmlFor="user">Apellido(s)</label>
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-user-edit"></i>
              </span>
              <Controller
                name="last"
                control={control}
                rules={{
                  required: 'Apellido es obligatorio.',
                  pattern: {
                    value: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
                    message: 'Nombre inválido. P. ej. Berzunza León',
                  },
                }}
                render={({ field, fieldState }) => (
                  <InputText
                    id={field.name}
                    {...field}
                    className={classNames({ 'p-invalid': fieldState.invalid })}
                  />
                )}
              />
            </div>
            {getFormErrorMessage('last', errors)}
          </div>
          <div className="p-field p-col-12 p-sm-6">
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
          <div className="p-field p-col-12 p-sm-6">
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
                    value === password.current ||
                    'Las contraseñas no coinciden',
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
          <div className="p-field ">
            <div className="p-d-flex">
              <label htmlFor="gender">Género</label>
            </div>
            <div className="p-d-inline-flex p-mt-2">
              <div className="p-formgroup-inline">
                <Controller
                  name="gender"
                  control={control}
                  rules={{ required: 'Password is required.' }}
                  render={({ field }) => (
                    <>
                      <div className="p-field-checkbox">
                        <RadioButton
                          inputId="gender1"
                          value="F"
                          checked={field.value === 'M'}
                          {...field}
                        />
                        <label htmlFor="gender1">Masculino</label>
                      </div>
                      <div className="p-field-checkbox">
                        <RadioButton
                          inputId="gender2"
                          value="M"
                          checked={field.value === 'F'}
                          {...field}
                        />
                        <label htmlFor="gender2">Femenino</label>
                      </div>
                      {getFormErrorMessage('gender', errors)}
                    </>
                  )}
                />
              </div>
            </div>
          </div>
          <Button label="Registrar me" />
        </div>
      </form>
      <div className="p-d-flex p-jc-end">
        <Link to="/login" style={{ textDecoration: 'none' }}>
          Ya tengo una cuenta
        </Link>
      </div>
    </Card>
  );
};
