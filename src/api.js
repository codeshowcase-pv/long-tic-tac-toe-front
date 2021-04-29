import axios from 'axios';
import store from '@/store';

const api = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(function (config) {
  if (store.state.loggedIn) config.headers['Authorization'] = `Bearer ${ localStorage.accessToken }`;
  return config;
});

export const login = (login, password) => {
  return api.post(`/login`, {
    login:    login,
    password: password,
  });
};

export const logout = () =>
  api.delete(`/logout`);

// TODO: удалить после тестирования
export const profile = () =>
  api.get(`/current/user`);
