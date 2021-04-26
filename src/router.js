import Vue       from 'vue'
import VueRouter from "vue-router"

import Home           from './components/home'
import Login          from './components/login'
import CurrentProfile from './components/current/profile'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/current', component: CurrentProfile }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.use(VueRouter);

export default router;
