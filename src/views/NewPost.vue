<template>
  <v-container>
      <h1>Poszt létrehozása:</h1>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import store from '@/store'
import router from '@/router'
export default Vue.extend({
  name: 'NewPost',
  methods: {
    checkAuth () {
      if (!store.state.isLoggedIn) {
        window.location.assign(router.resolve({ path: '/auth/login' }).href)
      }
    }
  },
  mounted () {
    this.checkAuth()
  }
})
</script>

<style>

</style>
