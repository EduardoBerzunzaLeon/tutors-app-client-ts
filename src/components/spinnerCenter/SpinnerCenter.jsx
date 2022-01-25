import { ProgressSpinner } from 'primereact/progressspinner';

import './spinnerCenter.scss';

export const SpinnerCenter = ({ message }) => {
  return (
    <div className="p-d-flex p-jc-center p-ai-center d-height-100">
      <div className="d-fluid">
        <h5>{message}</h5>
        <ProgressSpinner className="p-d-block p-mx-auto" />
      </div>
    </div>
  );
};
