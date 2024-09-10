<template>
  <v-toolbar app flat>
    <v-toolbar-side-icon @click="$emit('click')"></v-toolbar-side-icon>
    <v-toolbar-title>
      <span class="grey--text">Mohammed</span>
      <span class="font-weight-light">Alayed</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>

    <v-menu offset-y>
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
    </v-menu>

    <v-btn flat color="grey">
      <span>Sign out</span>
      <v-icon right>exit_to_app</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { icon: "dashboard", text: "Dashboard", route: "/" },
        { icon: "folder", text: "My Project", route: "/project" },
        { icon: "person", text: "Teams", route: "/teams" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
