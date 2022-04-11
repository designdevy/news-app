<template>
  <v-app>
    <v-app-bar app color="deep-purple accent-4" dark>
      <router-link class="text-decoration-none white--text" to="/">ThisWeekNews!</router-link>
      <v-spacer />
      <v-app-bar-nav-icon @click="drawer = true" class="mx-1"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary right :width="400">
      <v-list nav dense flat>
        <v-list-item
          ><v-subheader class="text-h5 pa-0 black--text">History</v-subheader></v-list-item
        >
        <v-divider class="my-2"></v-divider>
        <v-list-item-group>
          <v-list-item-content v-for="item in getHistory" :key="item.id">
            <v-list-item>
              {{ item.title }}
            </v-list-item>
          </v-list-item-content>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <error-message />
      <transition name="animation" mode="out-in">
        <router-view />
      </transition>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import ErrorMessage from './components/ErrorMessage.vue';

export default {
  name: 'App',
  components: {
    ErrorMessage,
  },
  data() {
    return {
      drawer: false,
    };
  },
  computed: mapGetters(['getHistory']),
  created() {
    this.$store.dispatch('fetchHeadlinesFromApi');
    this.$store.dispatch('fetchSourcesFromApi');
  },
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
