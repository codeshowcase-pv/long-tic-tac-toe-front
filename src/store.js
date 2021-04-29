// ----- Импорт и использование библиотеки
import Vue  from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// ----- Создание стора
const store = new Vuex.Store({
  state: {
    loggedIn: localStorage.loggedIn === 'true',
    userName: localStorage.name,
  },

  mutations: {
    fillLocalStorage(state, data) {
      console.log(data);
      state.loggedIn        = true;
      localStorage.loggedIn = true;
      state.userName        = data.name;
      localStorage.userName = data.name;
    },

    clearLocalStorage(state) {
      state.loggedIn        = false;
      localStorage.loggedIn = false;
      state.userName        = null;
      localStorage.userName = null;
    },
  },
});

// ----- /барабанная дробь/ Экспорт стора!
export default store;
