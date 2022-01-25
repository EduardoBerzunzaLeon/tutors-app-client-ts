import React from 'react';

export const LabelErrorInput = ({ id, message }) => {
  return (
    <small id={`${id}_error`} className="p-error p-d-block">
      {message}
    </small>
  );
};
