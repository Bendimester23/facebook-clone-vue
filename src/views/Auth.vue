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
import store from '@/store'
import router from '@/router'
import { signOut } from '@/api/auth'

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
  },
  mounted: () => {
    if (store.state.isLoggedIn) {
      if (router.currentRoute.params.type === 'signOut') {
        signOut()
          .then((res) => {
            console.log(res)
          })
      } else {
        window.location.assign(router.resolve({ path: '/home' }).href)
      }
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
