import { expectSaga } from 'redux-saga-test-plan';
import Swal from 'sweetalert2';

import { signInWithEmail, signUp } from '../../../redux/auth/auth.sagas';
import authActionTypes from '../../../redux/auth/auth.types';
import * as fetchModule from '../../../utils/fetch';

jest.mock('sweetalert2', () => ({
  fire: jest.fn(),
}));

expectSaga.DEFAULT_TIMEOUT = 600;
Storage.prototype.setItem = jest.fn();

describe('Auth Sagas tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Login with password should fail with incorrect credentials', async () => {
    await expectSaga(signInWithEmail, {
      payload: { email: 'eduardoberzunzasl@gmail.com', password: '12345678' },
    })
      .put({
        type: authActionTypes.SIGN_IN_FAILURE,
        payload: 'Credenciales incorrectas',
      })
      .run();

    expect(Swal.fire).toHaveBeenCalledWith(
      'Error',
      'Credenciales incorrectas',
      'error'
    );
  });

  test('Login with password should work', async () => {
    await expectSaga(signInWithEmail, {
      payload: { email: 'eduardoberzunzal@gmail.com', password: '12345678' },
    })
      .put({
        type: authActionTypes.SIGN_IN_SUCCESS,
        payload: {
          id: '608064aa1d7963091081ab5d',
          name: { first: 'Eduardo Jesús', last: 'Berzunza León' },
          fullname: 'Eduardo Jesús Berzunza León',
          gender: 'M',
          email: 'eduardoberzunzal@gmail.com',
          active: true,
          role: 'admin',
        },
      })
      .run();

    expect(localStorage.setItem).toHaveBeenCalledWith(
      'token',
      expect.any(String)
    );

    expect(localStorage.setItem).toHaveBeenCalledWith(
      'token-init-date',
      expect.any(Number)
    );
  });

  test('signUp should work', async () => {
    fetchModule.fetchWithoutToken = jest.fn(() => ({
      json() {
        return {
          status: 'success',
          token: 'abasdjad123hadf',
          data: { uid: '123', name: 'carlos' },
        };
      },
    }));

    await expectSaga(signUp, {
      payload: {
        email: 'eduardoberzunzal@gmail.com',
        password: '12345678',
        confirmPassword: '12345678',
        gender: 'M',
        name: {
          first: 'Juanito',
          last: 'peranganito',
        },
        url: 'test/moreTesting',
      },
    })
      .put({
        type: authActionTypes.SIGN_UP_SUCCESS,
      })
      .run();

    expect(localStorage.setItem).toHaveBeenCalledWith(
      'token',
      'abasdjad123hadf'
    );

    expect(localStorage.setItem).toHaveBeenCalledWith(
      'token-init-date',
      expect.any(Number)
    );
  });
});
