<template>
  <v-container class="py-10">
    <v-row class="d-flex flex-column">
      <v-col class="d-flex justify-center">
        <v-img max-width="1000px" :src="newsImage"></v-img>
      </v-col>
      <v-col class="mx-auto mt-10 text-center" sm="6">
        {{ newsContent }}
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
export default {
  name: 'NewsArticle',
  props: {
    articleId: null,
  },
  computed: {
    getArticles() {
      return this.$store.getters.getArticles;
    },
    description() {
      return this.getArticles[this.articleId - 1].description;
    },
    newsTitle() {
      return this.getArticles[this.articleId - 1].title.substr(
        0,
        this.getArticles[this.articleId - 1].title.indexOf('-') - 1,
      );
    },
    newsContent() {
      return this.description.length > 0 ? this.description : this.newsTitle;
    },
    newsImage() {
      return this.getArticles[this.articleId - 1].urlToImage;
    },
  },
};
</script>

<style></style>
