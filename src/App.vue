<template>
  <v-app>
    <Navbar/>
    <router-view class="mainn"></router-view>
    <v-footer
      v-bind="localAttrs"
      :padless="true"
    >
      <v-card
        flat
        tile
        width="100%"
        color="#192a56"
        class="lighten-1 text-center"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            v-on:click="fClck(icon)"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          ©{{ new Date().getFullYear() }} — <strong>Bendi</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '@/components/Navbar.vue'
import store from './store'
import router from './router'

export default Vue.extend({
  name: 'App',
  components: {
    Navbar
  },

  data: () => ({
    icons: [
      'mdi-home',
      'mdi-email',
      'mdi-help'
    ]
  }),
  computed: {
    localAttrs () {
      const attrs: any = {}

      attrs.absolute = false
      attrs.fixed = true
      return attrs
    }
  },
  methods: {
    fClck (ic: string) {
      switch (ic) {
        case 'mdi-email':
          window.location.assign('mailto:bendimester23@gmail.com')
          break
        case 'mdi-home':
          window.location.assign(router.resolve({ path: '/' }).href)
          break
        case 'mdi-help':
          window.location.assign(router.resolve({ path: '/about' }).href)
          break
      }
    }
  },
  created () {
    this.$vuetify.theme.dark = (this.$cookies.get('theme') === 'dark')
    store.commit('setTheme', this.$cookies.get('theme') === 'dark')
  }
})
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap');

  * {
    font-family: 'Raleway', sans-serif;
  }

  .footer-fbc {
    position: absolute;
    bottom: 0px;
    transform: translate(0%,-100%);
  }
</style>
