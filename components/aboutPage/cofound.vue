<template>
  <div>
      <adCard :posts="getdata"/>
  </div>
</template>
<script>
export default {
   data() {
    return {
      getdata: [],
    };
  },
  async fetch() {
      this.getdata = await fetch(
       'https://raw.githubusercontent.com/ZOYBAD14xx/CeitSoftWareWeb/main/co_founderAPI.json'
      ).then(res => res.json())
    }
};
</script>

<style></style>
