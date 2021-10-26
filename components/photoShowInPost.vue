<template>
  <v-row class="my-5">
    <photoCard v-for="item in posts" :key="item.id" :image="item.src" />
  </v-row>
</template>

<script>
import photoCard from '../components/homePage/photoCard';
export default {
  components: {
    photoCard,
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
