<template>
  <v-app>
    <v-app-bar app color="deep-purple accent-4" dark>
      <!-- Add News App Title -->
      <router-link class="text-decoration-none white--text" to="/">ThisWeekNews!</router-link>
      <v-spacer />
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary right>
      <v-list nav dense flat>
        <v-subheader class="text-h5 pa-0 black--text">History</v-subheader>
        <v-divider class="my-2"></v-divider>
        <v-list-item-group>
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <transition name="animation" mode="out-in">
        <router-view />
      </transition>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    drawer: false,
  }),
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}
.animation-enter,
.animation-leave-to {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}

.animation-enter-active,
.animation-leave-active {
  transition: all 0.3s ease;
}
</style>
