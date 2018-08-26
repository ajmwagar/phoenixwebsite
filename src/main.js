import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

require("./assets/css/main.css");
require("./assets/css/skeleton.css");
require("./assets/css/normalize.css");

new Vue({
  render: h => h(App)
}).$mount("#app");