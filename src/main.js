import Vue from "vue";
import VueRouter from "vue-router";
import BootstrapVue from "bootstrap-vue";
import App from "./App.vue";
import Dashboard from "./Dashboard.vue";

Vue.use(BootstrapVue);
Vue.use(VueRouter);

require("./assets/css/skeleton.css");
require("./assets/css/normalize.css");
require("./assets/css/main.css");

const routes = [
  { path: "/home", component: App },
  { path: "/", component: App },
  { path: "/dashboard", component: Dashboard }
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
