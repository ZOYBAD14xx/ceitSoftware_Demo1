<template>
  <v-app light>
    <v-navigation-drawer v-model="drawer" :clipped="clipped" fixed app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="toggleDrawer()" />
      <nuxt-link to="/">
        <img src="@/assets/image/logo.png" height="30vw" />
      </nuxt-link>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
        <foot class="mt-7" />
      </v-container>
    </v-main>
    <v-btn
      v-show="fab"
      v-scroll="onScroll"
      fab
      dark
      fixed
      bottom
      right
      color="primary"
      @click="toTop"
    >
      <v-icon> mdi-arrow-up-bold</v-icon>
    </v-btn>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      fab: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-view-list',
          title: 'Workings',
          to: '/working',
        },
        {
          icon: 'mdi-folder',
          title: 'Members',
          to: '/about',
        },
        {
          icon: ' mdi-clipboard-account',
          title: 'Contact Us',
          to: '/contact',
        },
      ],
      title: 'CEIT Software',
    };
  },
  computed: {
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(newVal) {
        this.$store.commit('set_drawer', newVal);
      },
    },
    clipped: {
      get() {
        return this.$store.state.clipped;
      },
    },
  },
  methods: {
    toggleDrawer() {
      this.$store.commit('set_drawer', !this.$store.state.drawer);
    },
    onScroll(e) {
      if (typeof window === 'undefined') return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
};
</script>
