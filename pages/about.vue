<template>
  <v-contrainer>
    <v-tabs v-model="tab" fixed-tabs background-color="blue lighten-2" dark>
      <v-tab href="#ad"> ADVISORS </v-tab>
      <v-tab href="#all"> All Generation </v-tab>
      <v-tab href="#al"> ALUMNINE Generation </v-tab>
      <v-tab href="#pre"> PRESENT Generation </v-tab>
      <v-tab href="#new"> NEW Generation </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item :key="1" value="ad">
        <v-card class="my-5" flat> <advisor /> </v-card>
      </v-tab-item>
      <v-tab-item :key="2" value="all">
        <v-card class="my-5" flat>
          <allMem />
        </v-card>
      </v-tab-item>
      <v-tab-item :key="3" value="al">
        <v-card class="my-5" flat>
          <oldMem />
        </v-card>
      </v-tab-item>
      <v-tab-item :key="4" value="pre">
        <v-card class="my-5" flat>
          <present />
        </v-card>
      </v-tab-item>
      <v-tab-item :key="5" value="new">
        <v-card class="my-5" flat> <newMem /></v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-contrainer>
</template>
<script>
import allMem from '../components/aboutPage/allMem';
import oldMem from '../components/aboutPage/oldMem';
import newMem from '../components/aboutPage/newMem';
import present from '../components/aboutPage/present';
import advisor from '../components/aboutPage/advisor';
export default {
  components: {
    allMem,
    oldMem,
    newMem,
    present,
    advisor,
  },
  data() {
    return {
      tab: 'ad',
    };
  },
};
</script>
