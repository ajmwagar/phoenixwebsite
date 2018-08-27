import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import App from "./App.vue";

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

require("./assets/css/skeleton.css");
require("./assets/css/normalize.css");
require("./assets/css/main.css");

new Vue({
  render: h => h(App)
}).$mount("#app");