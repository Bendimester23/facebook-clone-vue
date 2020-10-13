<template>
  <v-container style="max-width: 400px !important;">
      <v-layout align-center/>
      <h1 class="login-text">Regisztráció</h1>
      <v-form class="input_f_login" v-model="valid" ref="form" :v-if="showForm">
        <v-text-field
              ref="usernameFR"
              label="Teljes Név"
              v-model="name"
              :rules="nameRules"
              :counter="50"
              required
            ></v-text-field>
        <v-text-field
            ref="emailFR"
            v-model="email"
            :rules="emailRules"
            label="E-mail cím"
            required
          ></v-text-field>
        <v-text-field
            ref="passwordFR"
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
            @click="click"
            >
          Regisztráció
          </v-btn>

          <v-btn
      color="warning"
      @click="login"
    >
      Bejelentkezés
    </v-btn>
      </v-form>
      <v-alert
        ref="sAl"
        border="left"
        color="green"
        dismissible
        elevation="8"
        outlined
        text
        :value=false
        transition="v-slide-x-transition"
        type="success"
      ></v-alert>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import router from '@/router'
import { register } from '@/api/auth'

export default Vue.extend({
  name: 'SignIn',
  data: () => ({
    show1: false,
    password: '',
    rules: {
      required: (v: string) => !!v || 'Szükséges.',
      min: (v: string) => v.length >= 8 || 'Legalább 8 karakter'
    },
    valid: true,
    name: '',
    nameRules: [
      (v: string) => !!v || 'Name is required',
      (v: string) => v.length >= 8 || 'Legalább 8 karakter'
    ],
    email: '',
    emailRules: [
      (v: string) => !!v || 'E-mail is required',
      (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],
    showAlert: false,
    showForm: true
  }),
  computed: {
    form (): Vue & { validate: () => boolean } & { reset: () => void } & { resetValidation: () => void } {
      return this.$refs.form as Vue & { validate: () => boolean } & { reset: () => void } & { resetValidation: () => void }
    },
    usernameFR (): Vue & { value: string } {
      return this.$refs.usernameFR as Vue & { value: string }
    },
    passwordFR (): Vue & { value: string } {
      return this.$refs.passwordFR as Vue & { value: string }
    },
    emailFR (): Vue & { value: string } {
      return this.$refs.emailFR as Vue & { value: string }
    },
    sAl (): Vue & { value: boolean } {
      return this.$refs.aAl as Vue & { value: boolean }
    }
  },
  methods: {
    resetValidation () {
      this.form.resetValidation()
    },
    login () {
      window.location.assign(router.resolve({ path: '/auth/login' }).href)
    },
    click () {
      this.form.validate()
      register(this.usernameFR.value, this.emailFR.value, this.passwordFR.value)
        .then((res) => {
          if (res === 'Error') {
            console.log('error')
          } else {
            this.showForm = false
            setTimeout(() => {
              window.location.assign(router.resolve({ path: '/auth/login' }).href)
            }, 2000)
          }
        })
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
