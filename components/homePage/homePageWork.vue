<template>
  <v-row class="my-5">
    <workpost
      v-for="item in posts"
      :id="item.id"
      :key="item.id"
      :title="item.title"
      :image="item.img"
      :time="item.Date"
    />
  </v-row>
</template>

<script>
import workpost from '../homePage/workpost';
export default {
  components: {
    workpost,
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
