<template>
  <v-container fluid class="pa-0">
    <v-card elevation="2" class="rounded-lg fill-height">
      <div class="d-flex flex-column justify-space-between fill-height">
        <div>
          <slot name="title"></slot>
        </div>
        <v-card-subtitle class="d-flex justify-space-between align-center">
          <slot name="sub-title"></slot>
          <div>
            <v-btn color="pink lighten-2" outlined> Edit </v-btn>
            <v-btn class="ms-2" color="orange lighten-2" outlined> Read </v-btn>
          </div>
        </v-card-subtitle>
      </div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
};
</script>
