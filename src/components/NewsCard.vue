<template>
  <v-container fluid class="pa-0">
    <v-card elevation="2" class="rounded-lg fill-height">
      <div class="d-flex flex-column justify-space-between fill-height">
        <div>
          <slot name="title"></slot>
        </div>
        <v-card-subtitle class="d-flex justify-space-between align-center">
          <slot name="sub-title"></slot>
          <div>
            <v-dialog v-model="dialog" width="500">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="red lighten-1" dark outlined v-bind="attrs" v-on="on"> Edit </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5">Edit</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" class="pa-0">
                        <v-text-field
                          v-model="title"
                          :counter="max"
                          :rules="rules"
                          label="Headline*"
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                  <small>*The Headline should be less than 255 Characters</small>
                </v-card-text>
              </v-card>
            </v-dialog>
            <v-btn
              class="ms-2"
              color="orange lighten-2"
              outlined
              :to="{ name: 'article', params: { articleId: id } }"
            >
              Read
            </v-btn>
          </div>
        </v-card-subtitle>
      </div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      title: null,
      max: 255,
    };
  },
  props: ['id'],
  computed: {
    rules() {
      const rules = [];
      if (this.max) {
        const rule = (v) =>
          // eslint-disable-next-line implicit-arrow-linebreak
          (v || '').length <= this.max || `A maximum of ${this.max} characters is allowed`;
        rules.push(rule);
      }
      return rules;
    },
  },
  watch: {
    max: 'validateField',
    model: 'validateField',
  },
  methods: {
    validateField() {
      this.$refs.form.validate();
    },
  },
};
</script>
