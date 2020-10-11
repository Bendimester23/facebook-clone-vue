<template>
  <v-app>
    <Navbar/>
    <router-view class="mainn">
    </router-view>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '@/components/Navbar.vue'

export default Vue.extend({
  name: 'App',
  components: {
    Navbar
  },

  data: () => ({
    //
  })
})
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap');

  * {
    font-family: 'Raleway', sans-serif;
  }
</style>
