<template>
  <v-contrainer>
    <v-tabs v-model="tab" fixed-tabs background-color="blue lighten-2" dark>
      <v-tab href="#title"> {{ fetch.title }} </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item :key="1" value="title">
        <v-card class="my-5" flat>
          <center><photoShowInPost :posts="fetch.gal" /></center>
          <advisor />
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-contrainer>
</template>

<script>
import photoShowInPost from '../../components/photoShowInPost';
export default {
  components: {
    photoShowInPost,
  },
  data() {
    return {
      tab:'',
      id: this.$route.params.id,
      getdata: [],
      fetch: [],
    };
  },
  async fetch() {
    this.getdata = await fetch(
      'https://raw.githubusercontent.com/ZOYBAD14xx/CeitSoftWareWeb/main/WorkPastApi.json'
    ).then((res) => res.json());
    this.fetch = this.getdata[this.id - 1];
  },
};
</script>

<style></style>
