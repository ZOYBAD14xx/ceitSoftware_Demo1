<template>
  <v-contrainer>
    <v-tabs v-model="tab" fixed-tabs background-color="blue lighten-2" dark>
      <v-tab class="text-tab" href="#ad"> ອາຈານທີ່ປຶກສາ - ຜູ້ຮ່ວມກໍ່ຕັ້ງ </v-tab>
      <v-tab class="text-tab" href="#all"> ສະມາຊິກທັງໝົດ </v-tab>
      <v-tab class="text-tab" href="#al"> ສະມາຊິກເກົ່າ </v-tab>
      <v-tab class="text-tab" href="#his"> ປະຫວັດຄວາມເປັນມາ </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item :key="1" value="ad">
        <v-card class="my-5" flat>
          <center><h1 class="toptext">ອາຈານທີ່ປຶກສາ</h1></center>
          <advisor />
          <center><h1 class="toptext">ຜູ້ຮ່ວມກໍ່ຕັ້ງ</h1></center>
          <cofound />
        </v-card>
      </v-tab-item>

      <v-tab-item :key="2" value="all">
        <v-card class="my-5" flat>
          <center><h1 class="toptext">ລຸ້ນທີ່ 2</h1></center>
          <present />
          <center><h1 class="toptext">ລຸ້ນທີ່ 3</h1></center>
          <newMem />
          <center><h1 class="toptext">ລຸ້ນທີ່ 4</h1></center>
          <newMem4 />
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
            <p class="text">
              📌ກຸ່ມ CEIT Software ແມ່ນກຸ່ມແນວໃດ? ຄຳຖາມທີ່ຫຼາຍຄົນສົງໄສເມື່ອເຂົ້າມາເພສຂອງພວກເຮົາ ແລະ ມື້ນີ້ເຮົາຈະມານຳສະເໜີກ່ຽວກັບກຸ່ມຂອງພວກເຮົາໃຫ້ທຸກຄົນໄດ້ຟັງນຳກັນ. <br><br>
📍CEIT Software ແມ່ນໜື່ງໃນກຸ່ມກິດຈະກຳຂອງພາກວິຊາວິສະວະກຳຄອມພິວເຕີ ແລະ ເຕັກໂນໂລຊີຂໍ້ມູນຂ່າວສານ ເປັນບ່ອນທີ່ເຕົ້າໂຮມຜູ້ທີ່ມີຄວາມສົນໃຈໃນສາຍງານດ້ານການຜະລິດ ແລະ ພັດທະນາລະບົບຊັອບແວ ເຊິ່ງກຸ່ມຂອງພວກເຮົາເປັນກຸ່ມທີ່ແບ່ງປັນຄວາມຮູ້, ແນະນໍາແນວທາງໃຫ້ຜູ້ທີ່ມີຄວາມສົນໃຈທາງດ້ານການພັດທະນາຊັອບແວໃຫ້ມີຄວາມເຂົ້າໃຈທາງດ້ານຊັອບແວຫຼາຍຂື້ນ ແລະ ນຳເອົາໄປພັດທະນາໃນຕໍ່ໜ້າໄດ້.
<br><br>ຈຸດປະສົງ ແລະ ເປົ້າໝາຍຂອງກຸ່ມພວກເຮົາແມ່ນ: <br><br>
- ພັດທະນາ , ປັບປຸງ , ອັບເດດເວັບໄຊ ແລະ ລະບົບຂອງພາກວິຊາ.<br>
- ເຜີຍແຜ່ຄວາມຮູ້ທາງດ້ານການພັດທະນາທັງໃນດ້ານ Hard skill & Soft skill.<br>
- ວິໄຈ ແລະ ພັດທະນາຜະລິດຕະພັນທາງດ້ານຊອບແວຂຶ້ນມານຳໃຊ້.<br>
- ຝຶກອົບຮົມໃຫ້ຄວາມຮູ້ສະມາຊິກພາຍໃນກຸ່ມ ແລະນັກສຶກສາພາຍໃນພາກວິຊາ.<br><br>
ນອກຈາກກຸ່ມຂອງພວກເຮົາຍັງໄດ້ພັດທະນາຜະລິດຕະພັນທາງດ້ານຊັອບແວຕ່າງໆຂຶ້ນມານຳໃຊ້ໃຫ້ເກີດປະໂຫຍດບໍ່ວ່າຈະເປັນ : Web site , Application , ລະບົບຕ່າງໆພາຍໃນພາກວິຊາ ແລະ ໃນກຸ່ມຂອງພວກເຮົາຍັງມີສະມາຊິກທີ່ມີຄວາມສາມາດໃນດ້ານຂອງ Cyber Security ອີກດ້ວຍ.
ພວກເຮົາຍັງຜັກດັນໃຫ້ສະມາຊິກມີຄວາມກ້າໃນການເຂົ້າສູ່ເວທີການແຂ່ງຂັນຕ່າງໆເພື່ອຫາປະສົບການ ແລະ ພັດທະນະຂີດຄວາມສາມາດຂອງຕົນເອງຂື້ນໄປເລື່ອຍໆ.<br><br>
👉🏻ແລ້ວ...ໃຜແນ່ທີີ່ເຂົ້າມາສຶກສາແລກປ່ຽນກັບກຸ່ມພວກເຮົາໄດ້?<br><br>
ນັກສຶກສາທຸກຄົນໃນພາກວິຊາ CEIT ທີ່ສົນໃຈທາງດ້ານການພັດທະນາຊັອບແວສາມາດເຂົ້າປຶກສາ ແລະ ມາແລກປ່ຽນແນວຄິດກັບພວກເຮົາໄດ້.<br> ນອກນີ້ ຖ້າຫາກທ່ານໃດມີຄວາມສົນໃຈກໍ່ສາມາດ Inbox ເຂົ້າ Page ຂອງພວກເຮົາເພື່ອມາແລກປ່ຽນຄວາມຮູ້ນຳກັນໄດ້ເດີ🥳
            </p>
          </div>
          <center>
            <h2 id="highlight">ເງື່ອນໄຂການສະໝັກເປັນສະມາຊິກ</h2>
          </center>
          <ul class="text">
            <li>1./ ເປັນນັກສຶກສາປີໜຶ່ງ ຫຼື ປີສອງ (ພາກປົກກະຕິ) ຂອງ ພາກວິຊາວິສະວະກຳຄອມພິວເຕີ ແລະ ເຕັກໂນໂລຊີ ຂໍ້ມູນຂ່າວສານ.</li>
            <li>2./ ມີຄວາມສົນໃຈໃນເລື່ອງຂອງຊອບແວ.</li>
            <li>3./ ເປັັນຄົນທີ່ມັກຮຽນຮູ້, ມີຄວາມຮັບຜິດຊອບ ແລະ ພ້ອມທີ່ຈະຮຽນຮູ້ໄປກັບພວກເຮົາ.</li>
            <li>4./ ເປັນຄົນທີ່ພ້ອມຈະແບ່ງປັນຄວາມຮູ້ຂອງຕົນເອງກັບຜູ້ອື່ນໄດ້.</li>
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
import newMem4 from '../components/aboutPage/newMem4';
import cofound from '../components/aboutPage/cofound';
export default {
  components: {
    newMem,
    present,
    oldMem,
    advisor,
    newMem4,
    cofound
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
li{
  list-style: none;
}
.text-tab{
  font-size: 18px;
  color: #e9e9e9;
}
.text{
  font-size: 20px;
}
</style>
