<template>
  <div id="app">
    <TheLogin v-if="!isLoggedIn" />
    <v-app v-if="isLoggedIn" id="referanceForTeleport">
      <TheNavbar />
      <v-content class="mx-4">
        <router-view></router-view>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import TheNavbar from "./layout/TheNavbar";
import TheLogin from "./views/TheLogin.vue";

export default {
  name: "App",
  components: {
    TheNavbar,
    TheLogin,
  },
  data() {
    return {
      isLoggedIn: true,
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
