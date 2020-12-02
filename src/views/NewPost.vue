<template>
  <v-container class="newPMain">
      <h1>Poszt létrehozása:</h1>
      <v-form v-model="valid">
        <v-text-field
          label="Cím"
          v-model="title"
          :rules="titleRules"
          hide-details="auto"
        ></v-text-field>
        <v-textarea
          name="body"
          v-model="body"
          label="Poszt szövege"
          :rules="bodyRules"
          hint="Titok"
          class="postBodyNew"
        ></v-textarea>
        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4 marg"
          @click="submit"
        >Poszt mentése</v-btn>
      </v-form>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import store from '@/store'
import router from '@/router'
import { doPost } from '@/api/feed'
export default Vue.extend({
  name: 'NewPost',
  methods: {
    checkAuth () {
      if (!store.state.isLoggedIn) {
        window.location.assign(router.resolve({ path: '/auth/login' }).href)
      }
    },
    submit () {
      if (!store.state.isLoggedIn) {
        window.location.assign(router.resolve({ path: '/auth/login' }).href)
        return
      }
      doPost({
        id: '',
        title: this.title,
        content: this.body,
        postedAt: new Date(Date.now())
      })
      window.location.assign(router.resolve({ path: '/home' }).href)
    }
  },
  data: () => {
    return (
      {
        titleRules: [
          v => !!v || 'A cím szükséges!',
          v => v.length >= 2 || 'Legalább 2 karaktert adj meg!',
          v => v.length <= 50 || 'Maximum 50 karaktert adhatsz meg!'
        ],
        bodyRules: [
          v => !!v || 'A tartalom szükséges!',
          v => v.length >= 2 || 'Legalább 2 karaktert adj meg!',
          v => v.length <= 2000 || 'Maximum 2000 karaktert adhatsz meg!'
        ],
        title: '',
        body: '',
        valid: false
      }
    )
  },
  mounted () {
    this.checkAuth()
  }
})
</script>

<style>
  .newPMain {
    margin-top: 64px;
  }
  .marg {
    margin-top: 20px;
  }
</style>
