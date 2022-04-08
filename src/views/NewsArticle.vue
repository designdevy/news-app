<template>
  <v-container class="py-10">
    <v-row class="d-flex flex-column">
      <v-column class="mx-auto">
        <v-img max-width="1000px" :src="this.articles[articleId - 1].urlToImage"></v-img>
      </v-column>
      <v-column class="mx-auto mt-10">
        {{ this.articles[articleId - 1].description }}
      </v-column>
      <v-column class="mx-auto mt-10">
        <router-link class="text-decoration-none" to="/">Back to Headlines</router-link>
      </v-column>
    </v-row>
  </v-container>
</template>

<script>
import data from '../assets/data.json';

export default {
  name: 'NewsArticle',
  props: {
    articleId: {
      type: Number,
    },
  },
  data() {
    return {
      articles: data.articles,
    };
  },
  computed: {
    imageUrl() {
      return 'this.articles[1]';
    },
  },
};
</script>

<style></style>
