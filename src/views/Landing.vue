<template>
<div class="landing">
    <section class="landing-main">
        <h1>This is [insert project name here]!</h1>
    </section>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Landing'
})
</script>

<style>
  .landing {
      padding-top: 64px;
      display: grid;
      grid-auto-rows: minmax(600px,600px);
  }

  .landing-main {
      position: relative;
      display: flex;
      align-content: center;
      background-color: #353b48;
      color: #f5f6fa;
  }

  h1 {
      width: 200px;
      align-self: center;
      flex-direction: column;
      margin-left: 50%;
      margin-right: 50%;
      flex-basis: 200px;
      min-width: 400px;
      transform: translate(-50%,0%);
  }
</style>
