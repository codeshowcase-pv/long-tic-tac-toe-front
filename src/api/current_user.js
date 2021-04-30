import api from '@/api/api';

export const profile = () =>
  api.get(`/current/user`);
