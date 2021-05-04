import Vue       from 'vue';
import VueRouter from 'vue-router';
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  // -----
  { name: 'root', path: '/', component: () => import('@/components/home') },
  // -----
  { name: 'registration', path: '/registration', component: () => import('@/components/registration') },
  { name: 'login', path: '/login', component: () => import('@/components/login') },
  // -----
  { name: 'my_profile', path: '/profile', component: () => import('@/components/current_user/profile'),
    needsAuthorization: true },
  // -----
  { name: 'chat', path: '/chat', component: () => import('@/components/chat'),
    needsAuthorization: true },
  // -----
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

const routesNeedsAuthorization = () => {
  return routes.filter(route => route.needsAuthorization);
};

const loggedIn = () => {
  return store.state.loggedIn;
}

const isRouteNeedsAuthorization = (name) => {
  return routesNeedsAuthorization().find(route => route.name === name);
}

router.beforeEach((to,from,next) => {
  if (isRouteNeedsAuthorization(to['name']) && !loggedIn())
    next({name: 'login'});

  next();
});

export default router;
