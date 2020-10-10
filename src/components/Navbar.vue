<template>
  <v-app-bar
      app
      color="primary"
      dark
    >
    <router-link to="/">
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <p class="brand-name">Vuetify</p>
      </div>
    </router-link>

      <v-spacer></v-spacer>
      <router-link to="/auth/login">
      <v-btn
        text
      >
        <span class="mr-2">Bejelentkezés</span>
        <v-icon>fas fa-sign-in-alt</v-icon>
      </v-btn>
    </router-link>
    </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Navbar',
  data: () => {
    return (
      {
        asd: 'sad'
      }
    )
  }
})
</script>

<style>
  .brand-name {
    z-index: 999;
    color: #f5f6fa;
    padding-top: 15px;
    font-size: 35px;
  }
</style>
