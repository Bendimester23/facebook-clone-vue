<template>
  <v-container style="max-width: 400px !important;">
      <v-layout align-center/>
      <h1 class="login-text">Bejelentkezés</h1>
      <v-form class="input_f_login" v-model="valid" ref="form">
        <v-text-field
              ref="usernameFL"
              label="Teljes Név"
              v-model="name"
              :rules="nameRules"
              :counter="50"
              required
            ></v-text-field>
        <v-text-field
            ref="passwordFL"
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="rules"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Jelszó"
            hint="Legalább 8 karakter"
            counter
            required
            @click:append="show1 = !show1"
          ></v-text-field>
        <v-btn
            color="success"
            class="mr-4"
            @click="validate"
            >
          Bejelentkezés
          </v-btn>

          <v-btn
      color="warning"
      @click="register"
    >
      Regisztráció
    </v-btn>
      </v-form>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { login } from '@/api/auth'
import router from '@/router/index'

export default Vue.extend({
  name: 'Login',
  data: () => ({
    show1: false,
    show2: true,
    rules: [
      (v: string) => v.length > 0 || 'Kötelező.',
      (v: string) => v.length >= 8 || 'Legalább 8 karakter.'
    ],
    valid: true,
    name: '',
    password: '',
    nameRules: [
      (v: string) => !!v || 'Kötelező.',
      (v: string) => (v && v.length >= 8) || 'Legalább 8 karakter.'
    ]
  }),
  computed: {
    form (): Vue & { validate: () => boolean } & { reset: () => void } & { resetValidation: () => void } {
      return this.$refs.form as Vue & { validate: () => boolean } & { reset: () => void } & { resetValidation: () => void }
    },
    usernameFL (): Vue & { value: string } {
      return this.$refs.usernameFL as Vue & { value: string }
    },
    passwordFL (): Vue & { value: string } {
      return this.$refs.passwordFL as Vue & { value: string }
    }
  },
  methods: {
    validate () {
      this.form.validate()
      login(this.usernameFL.value, this.passwordFL.value)
    },
    resetValidation () {
      this.form.resetValidation()
      this.form.reset()
    },
    register () {
      window.location.assign(router.resolve({ path: '/auth/register' }).href)
    },
    click () {
      console.log('click')
    }
  }
})
</script>

<style>
  .login-text {
    text-align: center;
  }

  .input-f-login {
    padding-top: 10px;
    max-width: 300px !important;
  }
</style>
