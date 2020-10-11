<template>
  <v-container style="max-width: 400px !important;">
      <v-layout align-center/>
      <h1 class="login-text">Regisztráció</h1>
      <v-form class="input_f_login" v-model="valid" ref="form">
        <v-text-field
              label="Teljes Név"
              v-model="name"
              :rules="nameRules"
              :counter="50"
              required
            ></v-text-field>
        <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail cím"
            required
          ></v-text-field>
        <v-text-field
            ref="pass1"
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min, rules.match]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Jelszó"
            hint="Legalább 8 karakter"
            counter
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

export default Vue.extend({
  name: 'SignIn',
  data: () => ({
    show1: false,
    show2: true,
    rules: {
      required: value => !!value || 'Szükséges.',
      min: v => v.length >= 8 || 'Legalább 8 karakter'
    },
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length >= 8) || 'Legalább 8 karakter'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4'
    ],
    checkbox: false
  }),
  methods: {
    validate () {
      this.$refs.form.validate()
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
