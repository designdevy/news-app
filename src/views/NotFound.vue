<template>
  <v-container class="py-10 text-center fill-height">
    <v-row class="d-flex flex-column justify-center">
      <v-col class="mx-auto text-h1 sm-4">
        {{ message }}
      </v-col>
      <v-col class="mx-auto mt-10">
        <router-link class="text-decoration-none" :to="{ name: 'home' }"
          >Back to Headlines</router-link
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'NotFound',
  data() {
    return {
      message: '404',
    };
  },
};
</script>
