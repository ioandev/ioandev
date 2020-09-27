<template>
  <div>
    <h2 class="text-4xl text-center font-bold tracking-tighter">Get access to my hidden blog posts…</h2>
    <p class="px-20">Following are some of the public posts on my blog, the private ones are written with this project in mind.</p>

    <div class="block w-full xl:hidden md:hidden">
      <div class="flex flex-col">
        <blog-article
          :title="post.title"
          :excerpt="post.excerpt"
          :tags="post.tags"
          :img="post.img"
          :img_alt="post.img_alt"
          :href="post.href"
          v-for="post in firstOnes(posts, 3)"
          :key="post.title"
          classes="mt-10 mx-auto"/>
      </div>
    </div>

    <div class="hidden xl:block md:hidden w-full">
      <div class="flex p-20 py-10" v-for="(postsGroup, i) in postsGroupedSMLG" :key="i">
        <blog-article
          :title="post.title"
          :excerpt="post.excerpt"
          :tags="post.tags"
          :img="post.img"
          :img_alt="post.img_alt"
          :href="post.href"
          v-for="post in postsGroup"
          :key="post.title"
          classes="w-1/3 mr-8"/>
      </div>
    </div>

    <div class="hidden xl:hidden md:block w-full py-10">
      <div class="flex p-10 py-3" v-for="(postsGroup, i) in postsGroupedMD" :key="i">
        <blog-article
          :title="post.title"
          :excerpt="post.excerpt"
          :tags="post.tags"
          :img="post.img"
          :img_alt="post.img_alt"
          :href="post.href"
          v-for="post in postsGroup"
          :key="post.title"
          classes="w-1/2 px-2"/>
      </div>
    </div>

    <div class="md:w-2/5 mx-auto mt-10">
      <cta-a/>
    </div>
  </div>
</template>

<script>
  import blogArticle from './blogArticle'
  import ctaA from './cta-a'
  import axios from 'axios'
  import _ from 'lodash'
  import {
    mapGetters,
    mapMutations
  } from 'vuex'
  export default {
    components: {
      blogArticle,
      ctaA
    },
    data () {
      return {
      }
    },
    computed: {
      ...mapGetters(['allPosts']),
      postsGroupedSMLG() {
        let pps = this.firstOnes(this.posts, 3)
        return _.chunk(pps, 3);
      },
      postsGroupedMD() {
        return _.chunk(this.posts, 2);
      },
      posts() {

        let posts = this.allPosts.filter(p => p.img != "")
        posts = posts.slice(0, 4)
        return posts
      }
    },
    methods: {
      firstOnes(array, n) {
        if (array === undefined) {
          return []
        }
        return array.slice(0, n)
      }
    }
  }

</script>

<style>

</style>
