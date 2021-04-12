import VueRouter from "vue-router"
import Vue from 'vue'
import Main from './src/components/main/index'
import Login from './src/components/login/index'

const routes = [
    { path: '/', component: Main},
    { path: '/login', component: Login}
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

Vue.use(VueRouter);

export default router;