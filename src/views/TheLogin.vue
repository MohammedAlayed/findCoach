<template>
  <v-layout row fill-height class="page">
    <!-- Left Column: Form and Text -->
    <v-flex lg6 class="d-flex align-center justify-center">
      <v-card flat class="form-card">
        <v-card-title class="form-title">Sign Up to InsideBox</v-card-title>
        <v-form>
          <v-text-field label="E-mail" prepend-icon="email" required />
          <v-text-field
            label="Password"
            prepend-icon="visibility"
            :append-icon="showPassword ? 'visibility' : 'visibility-off'"
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
            required
          />
          <v-btn color="black white--text" class="mt-4" block
            >Sign Up</v-btn
          >
        </v-form>
      </v-card>
    </v-flex>

    <!-- Right Column: Image -->
    <v-flex xs6 hidden-xs-only>
      <img :src="grilPhoto" class="full-height-image" alt="Sign-up Visual" />
    </v-flex>
  </v-layout>
</template>

<script>
import girl from "@/assets/pexels-photo-17975077.webp";
export default {
  data() {
    return {
      grilPhoto: girl,
    };
  },
};
</script>

<style lang="scss" scoped>
.page {
  height: 100vh; /* Full screen height */
}

.text-content {
  padding: 0 20px;
}

.title {
  font-size: 32px;
  font-weight: bold;
}

.description {
  font-size: 18px;
  color: #606060;
}

.full-height-image {
  height: 100%; /* Full height of the container */
  width: 100%; /* Full width of the container */
  object-fit: cover; /* Cover the container without distortion */
}

.form-card {
  max-width: 400px;
  width: 100%;
  padding: 20px;
}
.form-title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}
</style>
