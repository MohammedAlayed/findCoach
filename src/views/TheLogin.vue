<template>
  <v-form>
    <v-container>
      <v-layout align-center justify-center column fill-height>
        <v-card flat width="488">
          <v-flex xs12 class="text-center">
            <h1 class="mb-4">Sign in</h1>
          </v-flex>

          <v-flex xs12>
            <v-text-field label="Email" single-line outline></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field label="Password" single-line outline></v-text-field>
          </v-flex>
          <v-flex>
            <v-btn block class="primary pa-4 raound-2">Sign in</v-btn>
          </v-flex>
          <v-flex>
            <v-btn block class="error pa-4">Connect with Google</v-btn>
          </v-flex>
        </v-card>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.text-center {
  display: flex;
  justify-content: center;
}
.raound-2 {
}
</style>
