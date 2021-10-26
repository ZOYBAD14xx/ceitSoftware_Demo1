<template>
  <v-contrainer>
    <slidePic />
    <mainPoint />
    <center>
      <h1 id="highlight">Workings</h1>
    </center>
    <showWorkHome />
    <div class="text-center my-5">
      <nuxt-link to="/working">
        <v-btn width="250px" rounded color="primary" dark> More </v-btn>
      </nuxt-link>
    </div>
  </v-contrainer>
</template>

<script>
import mainPoint from '../components/homePage/mainPoint';
export default {
  components: {
    mainPoint,
  },
  data(){
    return{
    }
  },

};
</script>

<style>
#highlight{
  background-color:#64b5f6;
  color:#fff
}
</style>
