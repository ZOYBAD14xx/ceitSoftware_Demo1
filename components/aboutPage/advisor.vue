<template>
  <div>
      <adCard :posts="getdata"/>
  </div>
</template>
<script>
// import axios from 'axios'
export default {
   data() {
    return {
      getdata: [],
    };
  },
  async fetch() {
      this.getdata = await fetch(
       'https://raw.githubusercontent.com/ZOYBAD14xx/CeitSoftWareWeb/main/advisorApi.json'
      ).then(res => res.json())
    }
};
</script>

<style></style>
