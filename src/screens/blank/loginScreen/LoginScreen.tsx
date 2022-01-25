// import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { useForm, Controller } from 'react-hook-form';

// import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../../redux/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

// import { Card } from 'primereact/card';
// import { Button } from 'primereact/button';
// import { Divider } from 'primereact/divider';
// import { InputText } from 'primereact/inputtext';
import { RootState } from '../../../redux/store';



const LoginScreen = () => {

   // The `state` arg is correctly typed as `RootState` already
   const count = useAppSelector((state) => state.auth.value)
   const dispatch = useAppDispatch()
  // const count = useSelector((state: RootState) => state.auth.value);
  // const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
