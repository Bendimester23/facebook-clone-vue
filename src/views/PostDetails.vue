<template>
<v-main>
  <div class="post-view">
    <v-container>
    <h1>{{title}}</h1>
    <h2>{{text}}</h2>
    </v-container>
  </div>
</v-main>
</template>

<script lang="ts">
import Vue from 'vue'
import { getPost, PostData } from '@/api/feed'
import router from '@/router'

export default Vue.extend({
  name: 'Home',
  components: {
  },
  data: () => ({
    title: '',
    text: ''
  }),
  mounted () {
    this.fetchh()
  },
  methods: {
    fetchh () {
      getPost(router.currentRoute.params.id)
        .then((res: PostData) => {
          console.log(res)
          this.title = res.title
          this.text = res.content
        })
    }
  }
})
</script>

<style>
  .post-view {
    display: flex;
  }
</style>
