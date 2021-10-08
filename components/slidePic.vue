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
          {src:'https://scontent.fvte4-1.fna.fbcdn.net/v/t1.6435-9/49533109_305971220028697_1418159189951250432_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeG-AIwSoaXCxgAu3nK0jymCiabkVc2-UF6JpuRVzb5QXo57hg8OmpcJG_fW4p2e-9MDTKVCan64ynhXtUPsPvF8&_nc_ohc=cJoxgDKp1x0AX8Y4Sro&tn=BqLYBhWQTaJ0E7J3&_nc_ht=scontent.fvte4-1.fna&oh=c54a7f230f8d7170265d81e70c884876&oe=61815BDA'},
          {src:'https://scontent.fvte4-1.fna.fbcdn.net/v/t1.6435-9/107892460_616539275638555_8011694085922353692_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=cdbe9c&_nc_eui2=AeFO6AFr88o9qFC5Jq0bBwQnPPvNeXOe3z08-815c57fPSAycO6YPIDz7To_lUtvex3K4_1YYFir2QUndzEYyXWq&_nc_ohc=fqA4PnrWZKYAX83SIs7&tn=BqLYBhWQTaJ0E7J3&_nc_ht=scontent.fvte4-1.fna&oh=03ade56ccd160119995595ac226ad90a&oe=61844BB2'},
          {src:'https://scontent.fvte4-1.fna.fbcdn.net/v/t1.6435-9/115626173_620330318592784_8040482358229848459_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=cdbe9c&_nc_eui2=AeGuQa3VP5G9QJOYClf8O1SeKV4IhK0KYIQpXgiErQpghJCbGAT-u8bILinqu1SmJ9sP18Lrub9sEh1Wg2sXRGPG&_nc_ohc=82IzmTjFwUoAX-4RWxh&_nc_ht=scontent.fvte4-1.fna&oh=50cb45dc80e611a72b2f29eeca2bebf1&oe=61819F1C'},
          {src:'https://scontent.fvte4-1.fna.fbcdn.net/v/t1.6435-9/115752336_620331805259302_1991633758920612112_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=cdbe9c&_nc_eui2=AeGQnxxZIfAYjf4si9US6jt_7w_yq0M3t3DvD_KrQze3cG9dV7xuzR2DhrAbEdbjo-cdbcnX5mU37PpquIXR1YqZ&_nc_ohc=-WWnQV7YkvsAX_3UWdj&_nc_ht=scontent.fvte4-1.fna&oh=ac0b8d119383b09941466deb4d93ca8e&oe=618371C7'},
          {src:'https://scontent.fvte4-1.fna.fbcdn.net/v/t1.6435-9/108008538_620330905259392_5190445835054433520_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=cdbe9c&_nc_eui2=AeGtbUaJVdTFhaWPBQVmNFl18Xb_zSOTpFDxdv_NI5OkUPtJ4wD688v47hvwGn8B0rnvXnLk0R01fWyX8EqE_FYi&_nc_ohc=MDzlBFqvBB8AX_gB9gK&tn=BqLYBhWQTaJ0E7J3&_nc_ht=scontent.fvte4-1.fna&oh=2162712ba177210f2b1840a65f522ba8&oe=61812632'},
        ],
        model: 0,
      }
    },
  }
</script>

<style>

</style>
