import axios from 'axios';

axios.defaults.xsrfCookieName  = 'CSRF-TOKEN';
axios.defaults.xsrfHeaderName  = 'X-CSRF-Token';
axios.defaults.withCredentials = true;

const BASE_URL = 'http://localhost:3000';

export const login = (login, password) =>
  axios.post(`${ BASE_URL }/login`, {
    login:    login,
    password: password,
  });

export const logout = () =>
  axios.delete(`${ BASE_URL }/logout`);
