import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Dashboard from './views/Dashboard.vue'
import VueAxios from 'vue-axios'
import axios from 'axios';
import VueSocketio from 'vue-socket.io';

Vue.use(VueAxios, axios)
Vue.use(Router)
Vue.use(VueSocketio, 'https://dta.dekutree.org:443', {
  secure: true
});


export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    }
  ]
})