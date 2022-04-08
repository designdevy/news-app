<template>
  <v-row class="pa-0">
    <v-col cols="3" v-for="(article, index) in articles" :key="index" class="d-flex align-stretch">
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
