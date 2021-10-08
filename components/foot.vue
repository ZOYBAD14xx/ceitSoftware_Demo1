<template>
  <v-footer padless>
    <v-card flat tile class="blue lighten-2 white--text text-center">
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon.icon"
          class="mx-4 white--text"
          icon
        >
          <a style="color: white; text-decoration: none" :href="icon.url">
            <v-icon size="24px">
              {{ icon.icon }}
            </v-icon>
          </a>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        ນອກຈາກກຸ່ມຂອງພວກເຮົາຍັງໄດ້ພັດທະນາຜະລິດຕະພັນທາງດ້ານຊັອບແວຕ່າງໆຂຶ້ນມານຳໃຊ້ໃຫ້ເກີດປະໂຫຍດບໍ່ວ່າຈະເປັນ
        : Web site , Application , ລະບົບຕ່າງໆພາຍໃນພາກວິຊາ ແລະ
        ໃນກຸ່ມຂອງພວກເຮົາຍັງມີສະມາຊິກທີ່ມີຄວາມສາມາດໃນດ້ານຂອງ Cyber Security
        ອີກດ້ວຍ.ພວກເຮົາຍັງຜັກດັນໃຫ້ສະມາຊິກມີຄວາມກ້າໃນການເຂົ້າສູ່ເວທີການແຂ່ງຂັນຕ່າງໆເພື່ອຫາປະສົບການ
        ແລະ ພັດທະນະຂີດຄວາມສາມາດຂອງຕົນເອງຂື້ນໄປເລື່ອຍໆ.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        &copy; {{ new Date().getFullYear() }} —
        <strong>CEIT Software</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        { icon: 'mdi-facebook', url: 'https://www.facebook.com/ceitsoftware' },
        {
          icon: 'mdi-facebook-messenger',
          url: 'https://www.messenger.com/t/305969180028901',
        },
      ],
    };
  },
};
</script>

<style></style>
