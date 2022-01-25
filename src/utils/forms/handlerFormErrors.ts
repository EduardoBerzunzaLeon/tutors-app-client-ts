// import { LabelErrorInput } from '../../components/labelErrorInput/LabelErrorInput';

// Change a specific error, work at with react-hook-form
export const createErrorsArray = (errors: String, errorsTranslate: {}, setError: Function) => {
  if (errors) {
    const errorsArray: string[] = errors.split('.');
    const keys: string[] = Object.keys(errorsTranslate);

    errorsArray.forEach((error) => {
      keys.forEach((key) => {
        if (error.includes('hi')) {
        //   if (error.includes(errorsTranslate[key])) {
          setError(key, { type: 'manual', message: error });
        }
      });
    });
  }
};

// export const getFormErrorMessage = (name, errors) => {
//   return (
//     errors[name] && <LabelErrorInput id={name} message={errors[name].message} />
//   );
// };

export default {
  createErrorsArray,
};
