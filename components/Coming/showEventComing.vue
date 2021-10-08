<template>
  <EventComing :posts="getdata" />
</template>

<script>
import axios from 'axios';
import EventComing from '../Coming/EventComing.vue';
export default {
  components: {
    EventComing,
  },
  data() {
    return {
      getdata: [],
    };
  },
  async created() {
    try {
      const res = await axios.get(
        'https://raw.githubusercontent.com/ZOYBAD14xx/CeitSoftWareWeb/main/EventComingAPI.json'
      );
      this.getdata = res.data;
    } catch (e) {}
  },
};
</script>

<style></style>
