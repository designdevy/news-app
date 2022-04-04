<template>
  <v-row class="text-center">
    <v-card class="news-card" elevation="2"> Test Card </v-card>
  </v-row>
</template>

<script>
export default {
  name: 'NewsContent',

  data: () => ({
    test: 'test',
  }),
};
</script>

<style scoped>
.news-card {
  width: 200px;
  height: 200px;
}
</style>
