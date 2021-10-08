<template>
  <v-row class="my-5">
    <photoPreview v-for="item in posts" :key="item" :image="item.img" />
  </v-row>
</template>

<script>
import photoPreview from '../homePage/photoCard';
export default {
  components: {
    photoPreview,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style></style>
