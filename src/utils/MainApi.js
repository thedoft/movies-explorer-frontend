import fetchApi from './fetchApi';

export const BASE_URL = 'https://api.thedoft.movies-explorer.students.nomoredomains.rocks';

export const register = ({ name, email, password }) => fetchApi({
  url: BASE_URL, path: 'signup', method: 'POST', body: { name, email, password },
});

export const login = ({ email, password }) => fetchApi({
  url: BASE_URL, path: 'signin', method: 'POST', body: { email, password },
});

export const logout = () => fetchApi({
  url: BASE_URL, path: 'signout',
});
