// ----- Импорт и использование библиотеки
import Vue       from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// ----- Файлы компонентов
import Home         from 'components/home';
import Login        from 'components/login';
import Profile      from 'components/current/profile';
import Registration from 'components/registration';

// ----- Описание роутов
const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/profile', component: Profile },
  { path: '/registration', component: Registration },
];

// ----- Создание роутов
const router = new VueRouter({
  routes,
  mode: 'history',
});

// ----- /барабанная дробь/ Экспорт роутов!
export default router;
