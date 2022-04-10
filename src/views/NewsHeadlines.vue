<template>
  <v-container class="pa-5" fluid>
    <h1 class="text-h4 mb-4">Headlines</h1>
    <skeleton-loader v-if="getLoadingStatus" />
    <news-content v-else :articles="getArticles" />
  </v-container>
</template>

<script>
import NewsContent from '../components/NewsContent.vue';
import SkeletonLoader from '../components/SkeletonLoader.vue';

export default {
  name: 'NewsHeadlines',
  components: {
    NewsContent,
    SkeletonLoader,
  },
  computed: {
    getArticles() {
      return this.$store.getters.getArticles;
    },
    getLoadingStatus() {
      return this.$store.getters.getLoadingStatus;
    },
  },
};
</script>

<style scoped>
.app-container {
  padding: 20px;
}
</style>
