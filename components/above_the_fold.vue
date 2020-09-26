<template>
  <div class="border-b-4 border-blue-800">
    <h2 class="uppercase text-center py-6 font-semibold text-gray-600 text-sm tracking-tighter">Ioan Biticu
      presents a brand new zoom training for you</h2>

    <h1 class="capitalize text-center mx-4 text-3xl font-semibold tracking-tighter">How hundreds of people around
      the world <span class="md:inline-block lg:block text-3xl">are making serious money out of coding websites remotely
        <span class="inline-block text-3xl">🌍🤘</span></span>
      </h1>
<!--, while enjoying exotic experiences from all
      around the world-->
    <div class="video-slot p-2 pt-6">
      <div class="border-blue-800 border-2">
        <div class="border-black border-4">
          <img src="http://i3.ytimg.com/vi/FOGoUpB15TA/maxresdefault.jpg"/>
        </div>
      </div>
    </div>
    <h2 class="uppercase text-center pb-6 font-semibold text-gray-800 text-sm tracking-tighter">Are you ready to create fast and intuitive websites users enjoy ?</h2>

    <what-you-learn/>

  <!--
    Founded in 2020, Next View has developed a certain algorithm which you can follow in creating websites that sell. I'm
    here to share this with you.

    Start Your Journey And Apply Now
    Discover What It's All About And How You Can Make It A Reality.
    -->
    <div class="p-4">
      <cta-a />
    </div>
  </div>
</template>

<script>
  import ctaA from './cta-a'
  import whatYouLearn from './what-you-learn'
export default {
  components: {
    ctaA,
    whatYouLearn
  }
}
</script>

<style>

</style>
