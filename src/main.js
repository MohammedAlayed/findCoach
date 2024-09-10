import Vue from "vue";
import App from "./App.vue";
import "vuetify/dist/vuetify.min.css"; // Ensure you are using css-loader
import router from "./router/index.js";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import subHeading from "@/components/subHeading.vue";
import TheContainer from "@/components/TheContainer.vue";
import Vuetify from "vuetify";
import store from './Store/store'
Vue.component("SubHeading", subHeading);
Vue.component("TheContainer", TheContainer);


Vue.use(Vuetify, {
  theme: {
    primary: "#3f51b5",
    secondary: "#b0bec5",
    accent: "#8c9eff",
    error: "#b71c1c",
  },
  rtl: false, //
});

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
