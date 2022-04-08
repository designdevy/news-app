<template>
  <v-container class="py-10">
    <v-row class="d-flex flex-column">
      <v-col class="d-flex justify-center">
        <v-img max-width="1000px" :src="this.articles[articleId - 1].urlToImage"></v-img>
      </v-col>
      <v-col class="mx-auto mt-10 text-center" sm="6">
        {{ this.articles[articleId - 1].description }}
      </v-col>
      <v-col class="mt-10 d-flex justify-center">
        <router-link class="text-decoration-none" :to="{ name: 'home' }"
          >Back to Headlines</router-link
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import data from '../assets/data.json';

export default {
  name: 'NewsArticle',
  props: {
    articleId: null,
  },
  data() {
    return {
      articles: data.articles,
    };
  },
};
</script>

<style></style>
