// ----- Импорт и использование библиотеки
import Vue       from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// ----- Файлы компонентов
import Home           from './components/home';
import Login          from './components/login';
import CurrentProfile from './components/current/profile';

// ----- Описание роутов
const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/current', component: CurrentProfile },
];

// ----- Создание роутов
const router = new VueRouter({
  routes,
  mode: 'history',
});

// ----- /барабанная дробь/ Экспорт роутов!
export default router;
