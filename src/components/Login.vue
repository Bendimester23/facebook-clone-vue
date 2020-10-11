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
      @click="resetValidation"
    >
      Mégsem
    </v-btn>
      </v-form>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { login } from '@/api/auth'

export default Vue.extend({
  name: 'Login',
  data: () => ({
    show1: false,
    show2: true,
    rules: [
      v => v.length > 0 || 'Kötelező.',
      v => v.length >= 8 || 'Legalább 8 karakter.'
    ],
    valid: true,
    name: '',
    password: '',
    nameRules: [
      v => !!v || 'Kötelező.',
      v => (v && v.length >= 8) || 'Legalább 8 karakter.'
    ]
  }),
  methods: {
    validate () {
      this.$refs.form.validate()
      login(this.$refs.usernameFL.value, this.$refs.passwordFL.value)
    },
    resetValidation () {
      this.$refs.form.resetValidation()
      this.$refs.form.reset()
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
