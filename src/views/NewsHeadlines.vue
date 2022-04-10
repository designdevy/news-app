<template>
  <v-container class="pa-5" fluid>
    <v-row class="align-center" no-gutters style="height: 50px">
      <h1 class="text-h4">Headlines</h1>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="query"
        single-line
        hide-details
        dense
        solo
        label="Search"
        prepend-inner-icon="mdi-magnify"
        class="pa-0 ma-0"
      ></v-text-field>
      <v-spacer></v-spacer>
      <news-filter />
    </v-row>
    <skeleton-loader v-if="getLoadingStatus" />
    <news-content v-else :articles="getArticles" />
  </v-container>
</template>

<script>
import debounce from 'lodash/debounce';
import { mapGetters } from 'vuex';
import NewsContent from '../components/NewsContent.vue';
import SkeletonLoader from '../components/SkeletonLoader.vue';
import NewsFilter from '../components/NewsFilter.vue';

export default {
  data() {
    return {
      query: '',
    };
  },
  watch: {
    query() {
      this.debouncedGetResults();
    },
  },
  created() {
    this.debouncedGetResults = debounce(this.getResults, 500);
  },
  methods: {
    getResults() {
      this.$store.dispatch('fetchSearchResults', this.query);
    },
  },
  name: 'NewsHeadlines',
  components: {
    NewsContent,
    SkeletonLoader,
    NewsFilter,
  },
  computed: mapGetters(['getArticles', 'getLoadingStatus']),
};
</script>

<style scoped>
.app-container {
  padding: 20px;
}
</style>
