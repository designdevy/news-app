<template>
  <v-container fluid class="pa-0">
    <v-card elevation="2" class="rounded-lg fill-height">
      <div class="d-flex flex-column justify-space-between fill-height">
        <div>
          <v-card-title class="text-subtitle-1 normal">
            {{ this.article.title }}
          </v-card-title>
        </div>
        <v-card-subtitle class="d-flex justify-space-between align-center">
          <v-chip>
            {{ this.article.source.name }}
          </v-chip>
          <div>
            <v-dialog v-model="dialog" width="500">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="red lighten-1" dark outlined v-bind="attrs" v-on="on"> Edit </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5">Edit Headline</span>
                </v-card-title>
                <v-card-text>
                  <small>*The Headline should be less than 255 Characters</small>
                  <v-container>
                    <v-row>
                      <v-col cols="12" class="pa-0">
                        <v-text-field
                          v-model="title"
                          :counter="max"
                          :rules="rules"
                          label="Title"
                          :maxlength="max + 1"
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                  <div class="d-flex flex-column">
                    <v-btn color="blue darken-1" text @click.prevent="updateTitle"> Save </v-btn>
                  </div>
                </v-card-text>
              </v-card>
            </v-dialog>
            <v-btn class="ms-2" color="orange lighten-2" outlined @click.prevent="addToHistory">
              Read
            </v-btn>
          </div>
        </v-card-subtitle>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import router from '../router/index';

export default {
  data() {
    return {
      dialog: false,
      articleId: this.id,
      title: '',
      max: 255,
    };
  },
  props: ['id', 'article'],
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
    addToHistory() {
      this.$store.commit('ADD_TO_HISTORY', {
        id: this.id,
        title: this.article.title,
      });
      router.push({ name: 'article', params: { articleId: this.articleId } });
    },
    updateTitle() {
      this.$store.commit('UPDATE_TITLE', {
        id: this.articleId,
        title: this.title,
      });
      this.title = '';
      this.dialog = false;
    },
  },
};
</script>
