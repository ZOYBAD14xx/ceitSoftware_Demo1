<template>
  <div>
    <center><h1 id="highlight">ກິດຈະກຳທີ່ຜ່ານມາ</h1></center>
    <v-row class="my-5">
      <eventCard
        v-for="item in posts"
        :id="item.id"
        :key="item.id"
        :title="item.title"
        :image="item.img"
        :time="item.Date"
      />
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style></style>
