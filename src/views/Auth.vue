<template>
  <div class="auth">
      <Login v-if="isLogin()"/>
      <SignIn v-if="isRegister()"/>
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
      return this.$route.params.type === 'login'
    },
    isRegister () {
      return this.$route.params.type === 'register'
    }
  }
})
</script>

<style>
  .auth {
    display: flex;
    padding-top: 64px;
  }
</style>
