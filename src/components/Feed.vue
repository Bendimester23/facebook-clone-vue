<template>
    <v-main class="feed-container"  v-bind:class="{dark: isDark}">
        <v-card v-for="post in posts" v-bind:key="post._id" max-width=600 v-on:click="clck(post._id)" class="post" :dark="isDark">
            <h1>{{post.title}}</h1>
            <p>{{post.text}}</p>
        </v-card>
    </v-main>
</template>

<script lang="ts">
import router from '@/router'
import Vue from 'vue'
import { fetchPosts } from '@/api/feed'
import store from '@/store'
export default Vue.extend({
  name: 'Feed',
  data: () => {
    return (
      {
        posts: [
        ]
      }
    )
  },
  methods: {
    clck: function (id: string) {
      window.location.href = router.resolve('/post/' + id).href
    },
    load () {
      fetchPosts()
        .then((res) => {
          this.posts = res
        })
    }
  },
  computed: {
    isDark: () => store.state.dark
  },
  mounted () {
    this.load()
  }
})
</script>

<style>
  .post {
    left: 50%;
    transform: translate(-50%,5px);
  }

  .bg-dark {
    background-color: #1E1E1E;
  }
</style>
