<template>
  <v-footer padless>
    <v-card shaped flat class="blue lighten-2 white--text text-center flex">
      <v-card-text style="color: white" class="pt-4">
        <v-contrainer>
          <v-row no-gutters>
            <v-col cols="12" sm="6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3795.8571908717245!2d102.62403141488426!3d17.938813587750428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3124661f2396b3eb%3A0xac4103eafc2de5cc!2z4Lqe4Lqy4LqB4Lqn4Lq04LqK4Lqy4Lqn4Lq04Lqq4Lqw4Lqn4Lqw4LqB4Lqz4LqE4Lqt4Lqh4Lqe4Lq04Lqn4LuA4LqV4Lq1IOC7geC6peC6sCDgu4DgupXgurHguoHgu4Lgupngu4LguqXguorgurXguoLgu43gu4nguqHgurngupnguoLgu4jgurLguqfguqrgurLgupksIOC6p-C6veC6h-C6iOC6seC6mQ!5e0!3m2!1slo!2sla!4v1634304184080!5m2!1slo!2sla"
                width="100%"
                height="100%"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </v-col>

            <v-col md="6" class="mt-5">
              <p>
                <b>ສະຖານທີ່:</b> <br />ພາກວິຊາວິສະວະກຳຄອມພິວເຕີ ແລະ
                ເຕັກໂນໂລຊີຂໍ້ມູນຂ່າວສານ, <br />ຄະນະວິສະວະກຳສາດ
              </p>
              <p><b>ເບີໂທຕິດຕໍ່:</b> <br />021 312 198</p>
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
            </v-col>
          </v-row>
        </v-contrainer>
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
