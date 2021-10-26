<template>
  <v-contrainer>
    <commingEvent />
    <EventCard :posts="getdata" />
    <center>
      <h1 id="highlight">ຮູບພາບ</h1>
    </center>
    <showPhoto />
  </v-contrainer>
</template>

<script>
import axios from 'axios';
import showPhoto from '../components/homePage/showPhoto'
import EventCard from '../components/aboutPageWork/EventCard';
import commingEvent from '../components/aboutPageWork/commingEvent';
export default {
  components: {
    EventCard,
    commingEvent,
    showPhoto
  },
  data() {
    return {
      getdata: [],
    };
  },
  async created() {
    try {
      const res = await axios.get(
        'https://raw.githubusercontent.com/ZOYBAD14xx/CeitSoftWareWeb/main/WorkPastApi.json'
      );
      this.getdata = res.data;
    } catch (e) {}
  },
};
</script>

<style></style>
