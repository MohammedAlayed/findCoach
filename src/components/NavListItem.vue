<template>
  <v-list>
    <v-list-tile router :to="route">
      <v-list-tile-action>
        <v-icon class="white--text">{{ icon }}</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title class="white--text">
          {{ text }}
        </v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    route: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
