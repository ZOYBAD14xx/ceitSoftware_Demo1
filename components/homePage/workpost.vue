<template>
  <v-col class="md-3">
    <nuxt-link style="text-decoration: none; color: inherit;" :to="`/event/${id}`">
    <v-card
    shaped
    class="mx-auto"
    max-width="350px"
  >
    <v-img
      class="white--text align-end"
      height="250px"
      :src="image"
    >
    </v-img>
      <v-card-title :title = "title">{{title}}</v-card-title>
    <v-card-text class="text--primary">
      <div :time="time">{{time}}</div>
    </v-card-text>

  </v-card>
  </nuxt-link>

  </v-col>
</template>

<script>
export default {
  props: {
      id:{
      type:Number,
      required:true
    },
    title: {
      type:String,
      required: true,
    },
    time: {
      type:String,
      required: true,
    },
    image: {
      type:String,
      required: true,
    },
  },
}
</script>

<style>

</style>
