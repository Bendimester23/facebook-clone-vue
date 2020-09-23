<template>
    <v-main class="feed-container">
        <v-card v-for="post in posts" v-bind:key="post.id" max-width=600 v-on:click="clck(post.id)" class="post">
            <h1>{{post.title}}</h1>
            <p>{{post.content}}</p>
        </v-card>
    </v-main>
</template>

<script lang="ts">
import router from '@/router'
import Vue from 'vue'
export default Vue.extend({
  name: 'Feed',
  data: () => {
    return (
      {
        asd: 'sad',
        posts: [
          {
            id: 'hsiufuidsg',
            author: 'asd',
            title: 'Test',
            content: 'gfhugfhogfhghjgjhgij'
          },
          {
            id: 'hgjhg',
            author: 'asd2',
            title: 'Test 2',
            content: 'gfhugfhogfhghjgjhgij'
          },
          {
            id: 'ghjgpko',
            author: 'asd',
            title: 'Test 3',
            content: 'gfhugfhogfhghjgjhgij'
          },
          {
            id: 'iklélké',
            author: 'asd',
            title: 'Test 4',
            content: 'gfhugfhogfhghjgjhgij'
          },
          {
            id: 'iuouio',
            author: 'asd',
            title: 'Test 5',
            content: 'gfhugfhogfhghjgjhgij'
          },
          {
            id: '4656',
            author: 'asd',
            title: 'Test 6',
            content: 'gfhugfhogfhghjgjhgij'
          },
          {
            id: '68768',
            author: 'asd',
            title: 'Test 30',
            content: 'gfhugfhogfhghjgjhgij'
          },
          {
            id: '46547',
            author: 'asd',
            title: 'Test 40',
            content: 'gfhugfhogfhghjgjhgij'
          },
          {
            id: '36457',
            author: 'asd',
            title: 'Test 50',
            content: 'gfhugfhogfhghjgjhgij'
          },
          {
            id: '49876956',
            author: 'asd',
            title: 'Test 60',
            content: 'gfhugfhogfhghjgjhgij'
          },
          {
            id: '79789',
            author: 'asd',
            title: 'Test 60',
            content: 'gfhugfhogfhghjgjhgij'
          },
          {
            id: '769879',
            author: 'asd',
            title: 'Test 60',
            content: 'gfhugfhogfhghjgjhgij'
          }
        ]
      }
    )
  },
  methods: {
    clck: function (id: string) {
      window.location.href = router.resolve('/post/' + id).href
    }
  }
})
</script>

<style>
  .post {
    left: 50%;
    transform: translate(-50%,5px);
  }
</style>
