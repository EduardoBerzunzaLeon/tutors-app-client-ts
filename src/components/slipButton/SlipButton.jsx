import React from 'react';
import { Button } from 'primereact/button';
import classNames from 'classnames';

import './slipButton.scss';

export const SlipButton = ({ color, icon, label, ...props }) => {
  const buttonClass = classNames('button-slip', color, 'p-p-0', 'p-mt-1');
  const iconClass = classNames('pi', `pi-${icon}`, 'p-px-2');

  return (
    <div className="container-slip p-d-inline">
      <Button className={buttonClass} {...props}>
        <i className={iconClass}></i>
        <span className="p-px-3">{label}</span>
      </Button>
    </div>
  );
};
