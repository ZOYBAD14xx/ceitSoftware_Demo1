<template>
  <v-app dark>
    <center>
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <h3>{{back}}</h3>
    <NuxtLink to="/">
      ໜ້າຫຼັກ
    </NuxtLink>
    </center>
  </v-app>

</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'ບໍ່ພົບໜ້າທີ່ທ່ານຕ້ອງການ ອາດມີການປ່ຽນແປງໃນຂ້າງໜ້າ',
      back:'ກະລຸນາກັບໄປໜ້າຫຼັກ'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
