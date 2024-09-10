<template>
  <div>
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn flat v-on="on">
          <v-icon small left color="green darken-4">folder</v-icon>
          <span class="caption">Add a project</span>
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="subheading green darken-6" primary-title>
          Add a new project
        </v-card-title>

        <v-card-text>
          <v-form v-model="isValid">
            <v-flex>
              <v-text-field
                v-model="data.Title"
                :rules="rulesTitle"
                label="Title"
                required
                clearable
                prepend-icon="folder"
              ></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                v-model="data.person"
                :rules="rulesPerson"
                label="Person"
                required
                clearable
                prepend-icon="person"
              ></v-text-field>
              <v-flex>
                <v-select
                  prepend-icon="settings"
                  v-model="data.status"
                  :items="['complete', 'ongoing', 'overdue']"
                  :rules="rulesStatus"
                  label="status"
                  required
                ></v-select>
              </v-flex>
            </v-flex>
          </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn :disabled="!isValid" color="primary" flat @click="submit">
            Add
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      isValid: false,
      data: {},

      rulesTitle: [(val) => (val || "").length > 0 || "This field is required"],
      rulesPerson: [
        (val) => (val || "").length > 0 || "This field is required",
      ],
      rulesStatus: [
        (val) => (val || "").length > 0 || "This field is required",
      ],
    };
  },
  methods: {
    submit() {
      console.log(this.$refs.form);
    },
  },
};
</script>
