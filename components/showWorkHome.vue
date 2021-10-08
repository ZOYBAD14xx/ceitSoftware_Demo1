<template>
  <v-contrainer>
    <homePageWork :posts="getdata" />
  </v-contrainer>
</template>
<script>
import homePageWork from '../components/homePage/homePageWork';
export default {
  components: {
    homePageWork,
  },
  data() {
    return {
      getdata: [],
    };
  },
  async fetch() {
    this.getdata = await fetch(
      'https://raw.githubusercontent.com/ZOYBAD14xx/CeitSoftWareWeb/main/WorkShowHomeApi.json'
    ).then((res) => res.json());
  },
};
</script>

<style></style>
