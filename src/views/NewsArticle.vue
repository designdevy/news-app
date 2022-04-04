<template>
  <div>
    {{ articleId }}
  </div>
</template>

<script>
export default {
  name: 'NewsArticle',
  props: {
    articleId: {
      type: Number,
    },
  },
};
</script>

<style></style>
