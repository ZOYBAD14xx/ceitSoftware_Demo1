<template>
  <div>
      <memberCard :posts="getdata"/>
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
        'https://raw.githubusercontent.com/ZOYBAD14xx/CeitSoftWareWeb/main/memberAPI.json'
      ).then(res => res.json())
    }
};
</script>

<style></style>
