import api from '@/api/api';

export const login = (login, password) => {
  return api.post(`/login`, {
    login:    login,
    password: password,
  });
};

export const logout = () =>
  api.delete(`/logout`);
