<template>
  <v-row class="pa-0">
    <v-col
      xl="3"
      lg="4"
      md="6"
      sm="12"
      xs="12"
      v-for="(article, index) in articles"
      :key="index + 1"
      class="d-flex align-stretch"
      cols="12"
    >
      <news-card :article="article" :id="index + 1"></news-card>
    </v-col>
  </v-row>
</template>

<script>
import NewsCard from './NewsCard.vue';

export default {
  name: 'NewsContent',
  props: ['articles'],
  components: {
    NewsCard,
  },
};
</script>

<style>
.normal {
  word-break: normal;
}
</style>
