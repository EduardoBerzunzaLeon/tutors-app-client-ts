import React, { forwardRef } from 'react';

import { Password } from 'primereact/password';
import { Divider } from 'primereact/divider';

export const InputPassword = forwardRef((props, ref) => {
  const footer = (
    <React.Fragment>
      <Divider />
      <p className="p-mt-2">Sugerencias</p>
      <ul className="p-pl-2 p-ml-2 p-mt-0" style={{ lineHeight: '1.5' }}>
        <li>Al menos una minúscula</li>
        <li>Al menos una mayúscula</li>
        <li>Al menos un númerico</li>
        <li>Mínimo 8 caracteres</li>
      </ul>
    </React.Fragment>
  );
  return (
    <Password
      ref={ref}
      toggleMask
      placeholder="******"
      keyfilter={/[^\s]/}
      footer={footer}
      promptLabel="Ingresa una contraseña"
      weakLabel="Débil"
      mediumLabel="Moderada"
      strongLabel="Difícil"
      {...props}
    />
  );
});
