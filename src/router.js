import Vue       from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  // -----
  { name: 'root', path: '/', component: () => import('@/components/home') },
  // -----
  { name: 'registration', path: '/registration', component: () => import('@/components/registration') },
  { name: 'login', path: '/login', component: () => import('@/components/login') },
  // -----
  { name: 'my_profile', path: '/profile', component: () => import('@/components/current_user/profile') },
  // -----
  { name: 'chat', path: '/chat', component: () => import('@/components/chat') },
  // -----
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
