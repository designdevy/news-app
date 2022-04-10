<template>
  <v-container class="pa-5" fluid>
    <h1 class="text-h4 mb-4">Headlines</h1>
    <news-content :articles="articles" />
  </v-container>
</template>

<script>
import NewsContent from '../components/NewsContent.vue';
import data from '../assets/data.json';

export default {
  name: 'NewsHeadlines',
  data() {
    return {
      articles: [],
    };
  },
  components: {
    NewsContent,
  },
  created() {
    this.articles = data.articles;
  },
};
</script>

<style scoped>
.app-container {
  padding: 20px;
}
</style>
