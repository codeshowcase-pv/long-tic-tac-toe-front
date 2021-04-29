import axios from 'axios';
import store from '@/store';

const api = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  function (config) {
    if (store.state.loggedIn) {
      if (['/logout', '/refresh'].includes(config.url)) {
        config.headers['X-Refresh-Token'] = localStorage.getItem('refreshToken');
      } else {
        config.headers['Authorization'] = `Bearer ${ localStorage.getItem('accessToken') }`;
      }
    }

    return config;
  },
);

api.interceptors.response.use(
  null,
  function (error) {
    if (error.response.data.code === 'access_token_expired') {
      return refresh().then(({ data }) => {
        localStorage.setItem('accessToken', data.access);
        return api(error.config);
      });
    }
  },
);

export const login = (login, password) => {
  return api.post(`/login`, {
    login:    login,
    password: password,
  });
};

export const logout = () =>
  api.delete(`/logout`);

export const refresh = () =>
  api.post('/refresh');

// TODO: удалить после тестирования
export const profile = () =>
  api.get(`/current/user`);
