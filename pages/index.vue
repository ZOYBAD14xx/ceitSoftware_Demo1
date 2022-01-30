<template>
  <v-contrainer>
    <slidePic />
    <mainPoint />
    <center>
      <h1 id="highlight">ວຽກງານຕ່າງໆ</h1>
    </center>
    <showWorkHome />
    <div class="text-center my-5">
      <nuxt-link to="/working">
        <v-btn width="250px" rounded color="primary" dark> ເພີ່ມເຕີມ </v-btn>
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
#app{
  font-family: "BoonHome";
}
</style>
