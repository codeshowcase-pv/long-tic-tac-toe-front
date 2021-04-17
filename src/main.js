import Vue from 'vue'
import App from './App.vue'
import Buefy from "buefy"
import 'buefy/dist/buefy.css'

import router from "../router"
import axios from "axios";

Vue.use(Buefy);

Vue.config.productionTip = false

axios.defaults.xsrfCookieName = "CSRF-TOKEN";
axios.defaults.xsrfHeaderName = "X-CSRF-Token";
axios.defaults.withCredentials = true;

axios.get("http://5a6297658517.ngrok.io/login?login=pavel&password=pavel")
    .then(() => {
        
    });
// axios.delete("http://5a6297658517.ngrok.io/logout");

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
