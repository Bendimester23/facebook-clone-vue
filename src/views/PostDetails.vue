<template>
<v-main>
  <div class="post-view">
      {{this.$route.params.id}}
  </div>
</v-main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Home',
  components: {
  }
})
</script>

<style>
  .post-view {
    display: flex;
  }
</style>
