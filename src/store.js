import Vue                   from 'vue';
import Vuex                  from 'vuex';
import LocalStorageProcessor from '@/services/local_storage_processor';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // Как только юзер открывает сайт, устанавливаем, залогинен ли он
    // Этот флаг должен быть всегда актуален
    loggedIn: !!LocalStorageProcessor.getAccessToken(),
    userName: localStorage.user_name,
  },

  mutations: {
    signUserIn(state, data) {
      state.loggedIn = true;
      state.userName = data.user.name;
      LocalStorageProcessor.saveData(data);
    },

    signUserOut(state) {
      state.loggedIn = false;
      state.userName = null;
      LocalStorageProcessor.clear();
    },
  },
});

export default store;
