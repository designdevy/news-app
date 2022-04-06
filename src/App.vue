<template>
  <v-app>
    <v-app-bar app color="deep-purple accent-4" dark dense>
      <!-- Add News App Title -->
      <router-link class="text-decoration-none white--text" to="/">ThisWeekNews!</router-link>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}
</style>
