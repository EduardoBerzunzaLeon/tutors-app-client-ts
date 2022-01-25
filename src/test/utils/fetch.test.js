import { fetchWithoutToken, fetchWithToken } from '../../utils/fetch';

describe('Tests in the helper fetch', () => {
  let token = '';

  test('fetchWithoutToken should be works', async () => {
    const resp = await fetchWithoutToken(
      'users/login',
      { email: 'eduardoberzunzal@gmail.com', password: '12345678' },
      'POST'
    );

    expect(resp instanceof Response).toBe(true);

    const body = await resp.json();
    expect(body.status).toBe('success');

    token = body.token;
  });

  test('fetchWithToken should be return a token error', async () => {
    let errorResp = '';
    try {
      const resp = await fetchWithToken('users/me/password', 'POST', {});
      await resp.json();
    } catch (error) {
      errorResp = error.message;
    }

    expect(errorResp).toBe('No se encontró el token');
  });

  test('fetchWithToken should be pass the token and return a server error', async () => {
    localStorage.setItem('token', token);
    const resp = await fetchWithToken('users/me/password', 'POST', {});
    const body = await resp.json();
    expect(body.error.message).toBe('Illegal arguments: undefined, string');
  });
});
