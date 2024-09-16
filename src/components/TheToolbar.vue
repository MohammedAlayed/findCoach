<template>
  <v-container >
    <v-toolbar class="bgSec" app flat>
      <!-- <v-toolbar-side-icon @click="$emit('click')"></v-toolbar-side-icon> -->
      <v-toolbar-title>
        <span class="primary--text">Mohammed</span>
        <span class="font-weight-light secondary--text">Alayed</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-flex xs3 class="d-flex  align-center mt-1 ">
        <v-text-field
            solo
            label="search..."
            append-icon="search"
         
          ></v-text-field>
        
      </v-flex>
      <v-spacer></v-spacer>
      <!-- <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn flat dark class="grey--text" v-on="on">
          <v-icon left> expand_more </v-icon>
          <span class="caption">Menu</span>
        </v-btn>
      </template>
      <v-list>
        <v-list-tile v-for="link in links" :key="link.text" :to="link.route">
          <v-list-tile-title>{{ link.text }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu> -->

      <!-- <v-btn flat color="grey">
      <span>Sign out</span>
      <v-icon right>exit_to_app</v-icon>
    </v-btn> -->
      <v-toolbar-items class="d-flex align-center">
        <v-btn flat>Home</v-btn>
        <v-btn flat>About</v-btn>
        <v-avatar size="36px">
          <img
            src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
            alt="Avatar"
          />
          <v-icon></v-icon>
        </v-avatar>
      </v-toolbar-items>
    </v-toolbar>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      links: [{ icon: "dashboard", text: "Dashboard", route: "/" }],
    };
  },
};
</script>

<style lang="scss" scoped>
.custom-bg input {
  background-color: #f0f0f0; /* Change this to your desired background color */
  border-radius: 4px; /* Optional: to make it more styled */
}
</style>
