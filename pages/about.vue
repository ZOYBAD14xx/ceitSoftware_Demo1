<template>
  <v-contrainer>
    <v-tabs v-model="tab" fixed-tabs background-color="blue lighten-2" dark>
      <v-tab href="#ad"> ອາຈານທີ່ປຶກສາ </v-tab>
      <v-tab href="#all"> ສະມາຊິກທັງໝົດ </v-tab>
      <v-tab href="#al"> ສະມາຊິກເກົ່າ </v-tab>
      <v-tab href="#his"> ປະຫວັດຄວາມເປັນມາ </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item :key="1" value="ad">
        <v-card class="my-5" flat>
          <center><h1 class="toptext">ອາຈານທີ່ປຶກສາ</h1></center>
          <advisor />
        </v-card>
      </v-tab-item>
      <v-tab-item :key="2" value="all">
        <v-card class="my-5" flat>
          <center><h1 class="toptext">ລຸ້ນທີ່ 2</h1></center>
          <present />
          <center><h1 class="toptext">ລຸ້ນທີ່ 3</h1></center>
          <newMem />
        </v-card>
      </v-tab-item>
      <v-tab-item :key="3" value="al">
        <v-card class="my-5" flat>
          <center><h1 class="toptext">ລຸ້ນທີ່ 1</h1></center>
          <oldMem />
        </v-card>
      </v-tab-item>
      <v-tab-item :key="4" value="his">
        <v-card class="my-5" flat>
          <center>
            <img
              src="https://scontent.fvte2-1.fna.fbcdn.net/v/t1.6435-9/89964469_545224986103318_4097848638078713856_n.png?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeE4-XHqlQnwkNQhw9cQym3NhldoLV0EO7iGV2gtXQQ7uL-L9py_qJF3NRvaUjml1_MXtpKvDzyfCv2r4BQROkn-&_nc_ohc=LKIw5ycMJTsAX993mmn&tn=BqLYBhWQTaJ0E7J3&_nc_ht=scontent.fvte2-1.fna&oh=7acb41d96ff1100659c8d8e3b6fd4cef&oe=618CE5D0"
              alt=""
              height="300px"
            />
          </center>
          <div class="my-4">
            <center>
              <h2 id="highlight" class="my-5">ຄວາມເປັນມາຂອງກຸ່ມ</h2>
            </center>
            <p>
              ກຸ່ມ CEIT Software ເກີດຂື້ນມາຈາກທາງອາຈານໃນພາກວິຊາວິສະວະກຳຄອມພິວເຕີ
              ແລະ ເຕັກໂນໂລຊີຂໍ້ມູນຂ່າວສານ
              ໄດ້ເຫັນເຖິງຄວາມສຳຄັນຂອງການເຝິກທັກສະໃນການ Coding
              ໃຫ້ນັກສຶກສາພາຍໃນພາກວິຊາ
              ຈຶ່ງຕັ້ງກຸ່ມນີ້ຂື້ນເພື່ອເປັນບ່ອນເຝິກທັກສະທາງດ້ານການ Coding
              ໃຫ້ເກັ່ງຂື້ນ ແລະ ເປັນບ່ອນແລກປ່ຽນຄວາມຮູ້ເຊິ່ງກັນ ແລະ ກັນ
            </p>
          </div>
          <center>
            <h2 id="highlight">ເງື່ອນໄຂການສະໝັກເປັນສະມາຊິກ</h2>
          </center>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-contrainer>
</template>
<script>
import newMem from '../components/aboutPage/newMem';
import oldMem from '../components/aboutPage/oldMem';
import advisor from '../components/aboutPage/advisor';
import present from '../components/aboutPage/present';
export default {
  components: {
    newMem,
    present,
    oldMem,
    advisor,
  },
  data() {
    return {
      tab: 'ad',
    };
  },
};
</script>
<style scoped>
.toptext {
  color: #64b5f6;
}
</style>
