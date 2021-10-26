<template>
  <photoShow :posts="getdata" />
</template>

<script>
import photoShow from "../homePage/photoShow"
export default {
  components:{
    photoShow
  },
  data() {
    return {
      getdata: [],
    };
  },
  async fetch() {
      this.getdata = await fetch(
        'https://raw.githubusercontent.com/ZOYBAD14xx/CeitSoftWareWeb/main/photoApi.json'
      ).then(res => res.json())
    }
}
</script>

<style>

</style>
