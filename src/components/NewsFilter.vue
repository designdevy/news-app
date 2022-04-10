<template>
  <v-dialog v-model="isFilterOpen" scrollable max-width="300px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="secondary" dark v-on="on" v-bind="attrs" class="mx-1">Filter</v-btn>
      <v-btn color="error" dark class="mx-1" @click="sendWrongRequest">API Call Error</v-btn>
    </template>
    <v-card>
      <v-card-title>Select News Source</v-card-title>
      <v-divider></v-divider>
      <v-card-text style="height: 300px">
        <v-radio-group column v-model="source">
          <v-radio
            v-for="source in getSources"
            :key="source.id"
            :label="source.name"
            :value="source.name"
          ></v-radio>
        </v-radio-group>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="resetFilter"> Reset </v-btn>
        <v-btn color="blue darken-1" text @click="applyFilter(source)"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      source: '',
      isFilterOpen: false,
    };
  },
  methods: {
    resetFilter() {
      this.source = '';
      this.$store.commit('RESET_FILTER');
      this.isFilterOpen = false;
    },
    applyFilter(source) {
      this.$store.commit('APPLY_FILTER', source);
      this.isFilterOpen = false;
    },
    sendWrongRequest() {
      this.$store.dispatch('fetchWithError');
    },
  },
  computed: mapGetters(['getSources']),
};
</script>
