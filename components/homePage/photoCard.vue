<template>
  <v-col cols="12" md="3">
    <a :href="image"><v-img
      :src="image"
    ></v-img></a>
  </v-col>
</template>

<script>
export default {
  props:{
    image:{
      type:String,
      required: true
    }
  }
};
</script>

<style></style>
