<template>
  <v-col>
    <center>
      <v-card shaped class="mx-auto" max-width="344">
        <v-img :src="image" height="300px"></v-img>
        <h2 style="color:#64B5F6" class="pt-5" :fullname="fullname" :nickname="nickname">
          {{ fullname }} ({{ nickname }})
        </h2>
        <p class="mt-4" :position="position"><i> {{ position }}</i></p>
        <v-card-actions>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
              <h4 :fb="fb">Facebook: {{ fb }}</h4>
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </center>
  </v-col>
</template>

<script>
export default {
    props: {
    image: {
      type: String,
      required: true,
    },
    fullname: {
      type: String,
      required: true,
    },
    nickname: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    fb: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      show: false,
    };
  },

};
</script>

<style></style>
