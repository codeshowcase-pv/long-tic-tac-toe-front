import axios                 from 'axios';
import store                 from '@/store';
import LocalStorageProcessor from '@/services/local_storage_processor';

// Создаём инстанс аксиоса с парой дефолтных параметров
const api = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Перехватчик, который добавляет нужные хэдеры в зависимости от запроса
api.interceptors.request.use(
  function (config) {
    if (store.state.loggedIn) {
      if (config.url === '/refresh') {
        config.headers['X-Refresh-Token'] = LocalStorageProcessor.getRefreshToken();
      } else {
        config.headers['Authorization'] = `Bearer ${ LocalStorageProcessor.getAccessToken() }`;
      }
    }

    return config;
  },
);

// Эндпоинт для обновления истёкшего аксес токена
const refresh = () => api.post('/refresh');

// Перехватчик для обработки ответов сервера
api.interceptors.response.use(
  null,
  function (error) {
    // Если истёк access-токен, то происходит его обновление по refresh-токену
    if (error.response.data.code === 'access_token_expired') {
      return refresh().then(({ data }) => {
        LocalStorageProcessor.saveAccessToken(data.access);
        return api(error.config);
      });
    }
    // Если истёк refresh-токен, все данные пользователя сбрасываются
    // TODO: Пользователь должен полуить уведомление о том, что время сессии истекло
    //   и быть переправлен на страницу входа
    else if (error.response.data.code === 'refresh_token_expired') {
      store.commit('signUserOut');
    }

    return error;
  },
);

export default api;
