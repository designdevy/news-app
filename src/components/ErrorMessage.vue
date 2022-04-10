<template>
  <v-alert
    v-model="getErrorExists"
    type="error"
    transition="slide-x-reverse-transition"
    border="left"
    @click="removeErrors"
    :style="{ cursor: 'pointer' }"
    class="ma-4"
    dense
  >
    {{ this.errorMessage }}
  </v-alert>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    errorMessage() {
      const message = this.$store.getters.getErrorMessage;
      return message != null && message;
    },
    ...mapGetters(['getErrorExists']),
  },
  methods: {
    removeErrors() {
      this.$store.dispatch('removeErrors');
    },
  },
};
</script>
