<template>
  <div id="app">
   
    <v-app id="referanceForTeleport">
      <TheNavbar/>
      <v-content class="mx-4">
        <router-view></router-view>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import TheNavbar from './layout/TheNavbar'
export default {
  
  name: 'App',
  components: {
    TheNavbar
  }
}
</script>

<style >
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}


</style>
