<template>
  <v-container>
      <v-layout align-center/>
      <h1 class="login-text">Bejelentkezés</h1>
      <v-btn v-on:click=toLight>Light</v-btn>
      <v-btn v-on:click=toDark>Dark</v-btn>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import store from '@/store/index'

export default Vue.extend({
  name: 'Login',
  methods: {
    toLight () {
      store.commit('setTheme', false)
    },
    toDark () {
      store.commit('setTheme', true)
    }
  }
})
</script>

<style>
  .login-text {
    text-align: center;
  }
</style>
