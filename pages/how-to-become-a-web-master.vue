<template>
  <div style="min-height:3000px;"> <!-- debug -->
    <top-nav/>
    <above-the-fold/>
    <tech/>
    <who-is/>
    <steps/>
    <div class=" bg-gray-200">
      <div class="container mx-auto py-20 bg-gray-100 relative">
        <blog-bit/>
      </div>
    </div>
    <div class=" bg-gray-400">
      <div class="container mx-auto bg-white relative">
        <testimonials />
      </div>
    </div>
    <p>Get access to my private newsletter.</p>
  </div>
</template>

<script>
  import blogBit from '~/components/blog_bit'
  import whoIs from '~/components/who_is'
  import tech from '~/components/tech'
  import aboveTheFold from '~/components/above_the_fold'
  import topNav from '~/components/top_nav'
  import steps from '~/components/steps'
  import testimonials from '~/components/testimonials'
  import axios from 'axios'
  export default {
    components: {
      blogBit,
      whoIs,
      tech,
      aboveTheFold,
      topNav,
      steps,
      testimonials
    },
    head: {
      //.. TODO. description, og:img, etc.
    },
    methods: {

    },
    mounted() {

    }
  }
</script>
