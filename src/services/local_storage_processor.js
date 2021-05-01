// Сервис для работы с локальным хранилищем
export default class LocalStorageProcessor {
  static saveAccessToken  = token => localStorage.setItem('access_token', token);
  static saveRefreshToken = token => localStorage.setItem('refresh_token', token);
  static getAccessToken   = () => localStorage.getItem('access_token');
  static getRefreshToken  = () => localStorage.getItem('refresh_token');
  static clear            = () => localStorage.clear();
  static saveData         = data => {
    this.saveAccessToken(data.access);
    this.saveRefreshToken(data.refresh);
    localStorage.user_name = data.user.name;
  };
}
