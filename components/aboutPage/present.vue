<template>
  <div>
      <memberCard :posts="fetchData"/>
  </div>
</template>
<script>
export default {
   data() {
    return {
      getdata: [],
      fetchData:[]
    };
  },
  async fetch() {
      this.getdata = await fetch(
        'https://raw.githubusercontent.com/ZOYBAD14xx/CeitSoftWareWeb/main/allMember.json'
      ).then(res => res.json())
      this.fetchData = this.getdata[0].present;
    }
};
</script>

<style></style>
