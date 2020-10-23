<template>
  <v-container class="home">
    <Feed/>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import Feed from '@/components/Feed.vue'
import store from '@/store'
import router from '@/router'

export default Vue.extend({
  name: 'Home',
  components: {
    Feed
  },
  mounted: () => {
    if (!store.state.isLoggedIn) {
      window.location.assign(router.resolve({ path: '/auth/login' }).href)
    }
  }
})
</script>

<style>
  .home {
    display: flex;
    padding-top: 0.5rem;
  }
</style>
