import axios from 'axios';
import store from '@/store';

const api = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

function nonLogoutRequest(config) { return config.url !== '/logout'; }

api.interceptors.request.use(
  function (config) {
    if (store.state.loggedIn) config.headers['Authorization'] = `Bearer ${ localStorage.accessToken }`;
    return config;
  },
  null,
  { runWhen: nonLogoutRequest },
);

function requestWithRefreshToken(config) { return config.url === '/logout' || config.url === '/refresh'; }

api.interceptors.request.use(
  function (config) {
    if (store.state.loggedIn) config.headers['X-Refresh-Token'] = localStorage.refreshToken;
    return config;
  },
  null,
  { runWhen: requestWithRefreshToken },
);

api.interceptors.response.use(
  null,
  function (error) {
    const originalRequest = error.config;
    if (error.response.data.code === 'access_token_expired') {
      return axios.request({
        method:  'post',
        url:     `${ process.env.VUE_APP_API_BASE_URL }/refresh`,
        headers: { 'X-Refresh-Token': localStorage.refreshToken },
      }).then(({ data }) => {
        localStorage.setItem('accessToken', data.access);
        originalRequest.headers['Authorization'] = `Bearer ${ localStorage.accessToken }`;
        return axios(originalRequest);
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

// TODO: удалить после тестирования
export const profile = () =>
  api.get(`/current/user`);
