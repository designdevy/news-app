<template>
  <v-navigation-drawer v-model="isDrawerOpen" absolute temporary right :width="400">
    <v-list nav dense flat>
      <v-list-item><v-subheader class="text-h5 pa-0 black--text">History</v-subheader></v-list-item>
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
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: mapGetters(['isDrawerOpen', 'getHistory']),
};
</script>
