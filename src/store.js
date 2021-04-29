import Vue  from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    loggedIn: !!localStorage.accessToken,
    userName: localStorage.userName,
  },

  mutations: {
    fillLocalStorage(state, data) {
      state.loggedIn            = true;
      localStorage.accessToken  = data.access;
      localStorage.refreshToken = data.refresh;

      state.userName        = data.user.name;
      localStorage.userName = data.user.name;
    },

    clearLocalStorage(state) {
      state.loggedIn = false;
      localStorage.clear();
    },
  },
});

export default store;
