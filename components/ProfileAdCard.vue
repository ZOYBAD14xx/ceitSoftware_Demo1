<template>
  <v-col>
    <center>
      <v-card class="mx-auto" max-width="344">
        <v-img :src="image" height="300px"></v-img>
        <h2 class="pt-5" :fullname="fullname">
          {{ fullname }}
        </h2>
        <p class="my-5" :position="position"> <b>{{ position }}</b> </p>
        <br>
      </v-card>
    </center>
  </v-col>
</template>

<script>
export default {
    props: {
    image: {
      type: String,
      required: true,
    },
    fullname: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
    };
  },

};
</script>

<style></style>
