// import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { useForm, Controller } from 'react-hook-form';

// import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from '../../../redux/auth/authSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { useGetPokemonByNameQuery } from '../../../redux/services/pokemon';

// import { Card } from 'primereact/card';
// import { Button } from 'primereact/button';
// import { Divider } from 'primereact/divider';
// import { InputText } from 'primereact/inputtext';

const LoginScreen = () => {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.auth.value);
  const dispatch = useAppDispatch();

  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur');
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')

  return (
    <div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}
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
