<template>
  <div id="app">
    <v-app id="referenceForTeleport">
      <TheNavbar />
      
      
      <v-content >
        <router-view></router-view>
        <TheFooter v-if="isLoggedIn" />
      </v-content>
    </v-app>
  </div>
</template>

<script>
import TheNavbar from "./layout/TheNavbar";
import TheFooter from "./layout/TheFooter.vue";

export default {
  name: "App",
  components: {
    TheNavbar,
    TheFooter,
  },
  data() {
    return {
      isLoggedIn: false,
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
