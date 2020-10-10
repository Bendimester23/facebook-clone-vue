<template>
  <div class="home">
    <Feed/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Feed from '@/components/Feed.vue'

export default Vue.extend({
  name: 'Home',
  components: {
    Feed
  }
})
</script>

<style>
  .home {
    display: flex;
  }
</style>
