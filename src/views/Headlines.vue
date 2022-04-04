<template>
  <div>
    <v-container class="app-container" fluid>
      <v-row class="content-title">
        <h1>Headlines</h1>
      </v-row>
      <news-content />
    </v-container>
  </div>
</template>

<script>
import axios from 'axios';
import NewsContent from '../components/NewsContent.vue';

export default {
  name: 'HomeView',

  components: {
    NewsContent,
  },

  created() {
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=841d612e1f4c415780982ddf90eecdfc',
      )
      .then((respponse) => {
        console.log(respponse.data);
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
  },
};
</script>

<style scoped>
.app-container {
  padding: 30px;
}
.content-title {
  font: 32px;
  margin-bottom: 20px;
}
</style>
