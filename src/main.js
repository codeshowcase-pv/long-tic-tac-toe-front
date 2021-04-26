// ----- Библиотеки
import Buefy from 'buefy';
import Vue   from 'vue';

// ----- JS и Vue файлы
import App    from './App.vue';
import router from './router';
import store  from './store';

// ----- CSS файлы
import 'buefy/dist/buefy.css';
import './styles/application.css';

// ----- Подключение библиотек
Vue.use(Buefy);

// ----- Доп конфигурации
Vue.config.productionTip = false;

// ----- Создание приложения
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
