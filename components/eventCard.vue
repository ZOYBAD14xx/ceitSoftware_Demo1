<template>
  <v-col>
      <v-card class="mx-auto" max-width="350">
      <v-img class="white--text align-end"  height="auto" :src="image">
      </v-img>
      <v-card-title :title="title">{{ title }}</v-card-title>
      <v-card-text class="text--primary">
        <p :time="time">Date: {{ time }}</p>
      </v-card-text>
    </v-card>

  </v-col>
</template>

<script>
export default {
  props: {
    id:{
      type:String,
      required:true
    },
    key:{
      type:String,
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
};
</script>

<style></style>
