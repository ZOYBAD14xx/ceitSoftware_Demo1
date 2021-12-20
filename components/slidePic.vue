<template>
    <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
  >
   <v-row justify="space-around">
      <v-icon @click="model--">
        mdi-minus
      </v-icon>
      <v-icon @click="model++">
        mdi-plus
      </v-icon>
    </v-row>

    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      max-height="100vw"
    ></v-carousel-item>
  </v-carousel>

</template>

<script>
  export default {
    data () {
      return {
        items:[
          {src:'https://raw.githubusercontent.com/ZOYBAD14xx/CeitSoftWareWeb/main/image/Cover-1.jpg'},
          {src:'https://raw.githubusercontent.com/ZOYBAD14xx/CeitSoftWareWeb/main/image/Cover-2.jpg'},
          {src:'https://raw.githubusercontent.com/ZOYBAD14xx/CeitSoftWareWeb/main/image/Cover-3.jpg'},
          {src:'https://raw.githubusercontent.com/ZOYBAD14xx/CeitSoftWareWeb/main/image/Cover-4.jpg'},
          ],
        model: 0,
      }
    },
  }
</script>

<style>

</style>
