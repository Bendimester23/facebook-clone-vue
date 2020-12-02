<template>
    <v-main class="feed-container"  v-bind:class="{dark: isDark}" ref="postc">
      <v-virtual-scroll
        :items="posts"
        :item-height="80"
        :height="calcH()"
      >
        <template v-slot:default="{ item }">
          <v-card max-width=600 v-on:click="clck(item._id)" class="post" :dark="isDark">
              <h1>{{item.title}}</h1>
              <p>{{item.text}}</p>
          </v-card>
        </template>
      </v-virtual-scroll>
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
        windowWidth: 0,
        windowHeight: 0,
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
    },
    calcH () {
      return this.windowHeight - 187
    },
    getWindowWidth (event) {
      this.windowWidth = document.documentElement.clientWidth
    },
    getWindowHeight (event) {
      this.windowHeight = document.documentElement.clientHeight
    }
  },
  computed: {
    isDark: () => store.state.dark
  },
  mounted () {
    this.$nextTick(function () {
      window.addEventListener('resize', this.getWindowWidth)
      window.addEventListener('resize', this.getWindowHeight)

      this.getWindowWidth()
      this.getWindowHeight()
    })
  },
  created () {
    this.load()
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.getWindowWidth)
    window.removeEventListener('resize', this.getWindowHeight)
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
