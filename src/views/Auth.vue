<template>
  <div class="auth">
      <Login v-if="isLogin()"/>
      <SignIn v-if="!isLogin()"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Login from '@/components/Login.vue'
import SignIn from '@/components/SignIn.vue'

export default Vue.extend({
  name: 'Auth',
  components: {
    Login,
    SignIn
  },
  methods: {
    isLogin () {
      console.log(this.$route.params.type === 'login')
      return this.$route.params.type === 'login'
    }
  }
})
</script>

<style>
  .auth {
    display: flex;
  }
</style>
