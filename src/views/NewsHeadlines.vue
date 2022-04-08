<template>
  <div>
    <v-container class="pa-5" fluid>
      <h1 class="text-h4 mb-4">Headlines</h1>
      <news-content :articles="articles" />
    </v-container>
  </div>
</template>

<script>
// import axios from 'axios';
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
    //   axios
    //     .get(
    //       'https://newsapi.org/v2/top-headlines?country=us&apiKey=841d612e1f4c415780982ddf90eecdfc',
    //     )
    //     .then((respponse) => {
    //       console.log(respponse.data.articles);
    //       this.articles = respponse.data.articles;
    //     })
    //     .catch((error) => {
    //       console.log('Error: ', error);
    //     });

    this.articles = data.articles;
  },
};
</script>

<style scoped>
.app-container {
  padding: 20px;
}
</style>
