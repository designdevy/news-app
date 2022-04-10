<template>
  <v-row class="pa-0">
    <v-col xl="3" lg="4" md="6" sm="12" xs="12" v-for="index in 12" :key="index" cols="12">
      <v-skeleton-loader v-bind="attrs" type="article, actions"></v-skeleton-loader>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style>
</style>
