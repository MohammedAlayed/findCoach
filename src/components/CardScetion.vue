<template>
  <v-container>
    <h2>{{ title }}</h2>
    <a class="blue--text">show more </a>
    <v-layout row class="wrap-on-sm-md d-flex justify-center">
      <v-flex
        v-for="offer in items"
        :key="offer.id"
        class="my-3 mr-2"
        xs12
        sm6
        md4
        lg3
      >
        <v-card>
          <v-img :src="offer.image" height="120px"></v-img>

          <v-card-title>
            <div>
              <h3 class="headline mb-0">{{ offer.title }}</h3>
              <p>{{ offer.description }}</p>
            </div>
            <h2 class="secondary--text">{{ offer.price }}</h2>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-actions>
            <v-chip class="primary white--text">{{ offer.baths }} Baths</v-chip>
            <v-chip class="primary white--text">{{ offer.beds }} Beds</v-chip>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
/* Custom class to handle wrapping behavior */
.wrap-on-sm-md {
  flex-wrap: wrap; /* Default wrap */
}

@media (min-width: 1280px) {
  /* Disable wrap for large screens */
  .wrap-on-sm-md {
    flex-wrap: nowrap !important;
  }
}
</style>
