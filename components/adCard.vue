<template>
  <v-row class="my-5">
    <ProfileAdCard
      v-for="item in posts"
      :key="item.id"
      :fullname="item.fname"
      :position="item.position"
      :image="item.image"
    />
  </v-row>
</template>

<script>
export default {
  components: {},
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style></style>
