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
import NewsContent from '../components/NewsContent.vue';

export default {
  name: 'HomeView',

  components: {
    NewsContent,
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
