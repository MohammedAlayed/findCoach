import Vuex from "vuex";
import Vue from "vue";
import projectModules from "./projectStore/index.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
     projectModules,
  },
});
export default store;
