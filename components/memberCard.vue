<template>
  <v-row class="my-5">
    <ProfileCard
      v-for="item in posts"
      :key="item.id"
      :fullname="item.fname"
      :nickname="item.nname"
      :mj="item.mj"
      :year="item.year"
      :position="item.position"
      :fb="item.fb"
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
