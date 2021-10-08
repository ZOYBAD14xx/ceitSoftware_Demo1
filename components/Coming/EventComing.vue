<template>
  <v-row class="my-5">
      <eventCard
        v-for="item in posts"
        :key="item.id"
        :title="item.title"
        :image="item.img"
        :time="item.Date"
      />
    </v-row>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style>

</style>
