<template>
  <v-col cols="12" md="3">
    <a @click="overlay = !overlay"><v-img :src="image"></v-img></a>
    <a @click="overlay = false">
      <v-overlay class="center-screen" :opacity="opacity" :value="overlay">
        <img :src="image" alt="" height="600" />
      </v-overlay>
    </a>
  </v-col>
</template>

<script>
export default {
   props: {
    image: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      opacity: 0.8,
      overlay: false,
    };
  },

};
</script>

<style scoped>
.center-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
}
</style>
