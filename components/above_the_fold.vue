<template>
  <div class="border-b-4 border-blue-800">
    <h2 class="uppercase text-center py-6 font-semibold text-gray-600 text-sm tracking-tighter">Ioan Biticu
      presents a brand new zoom training for you</h2>
    <h1 class="capitalize text-center mx-4 text-3xl font-semibold tracking-tighter">How hundreds of people around
      the world <span class="md:inline-block xl:block text-3xl">are making serious money out of coding websites remotely
        <span class="inline-block text-3xl">🌍🤘</span></span>
        <!--, while enjoying exotic experiences from all
      around the world-->
    </h1>
    <div class="mx-auto w-full xl:py-8" style="max-width:1400px;">
      <div class="flex flex-col xl:flex-row">
        <div class="video-slot p-2 pt-6 xl:py-0 xl:px-2">
          <div class="border-blue-800 border-2 mx-auto" style="max-width:800px;">
            <div class="border-black border-4">
              <div v-if="!clicked_play" class="relative cursor-pointer">
                <img src="http://i3.ytimg.com/vi/a4-bt9HqonM/maxresdefault.jpg" class="w-full h-full object-none" style=""/>
                <div id="play" @click="clicked">&nbsp;</div>
              </div>

              <div v-if="clicked_play" class="youtube-embed-parent" style="--aspect-ratio: 16/9;">
                <iframe
                  src="https://www.youtube.com/embed/gj5L5Ju0x6k?autoplay=1&amp;start=1&amp;#038;feature=oembed"
                  frameborder="0"
                  class="youtube-embed"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  >
                  </iframe>
                </div>
            </div>
          </div>
        </div>
        <div class="xl:pb-8">
          <h2 class="uppercase text-center pb-6 font-semibold text-gray-800 text-sm tracking-tighter xl:hidden">Are you ready to create fast and intuitive websites users enjoy ?</h2>
          <div class="mx-auto xl:mx-4" style="max-width:800px;">
            <what-you-learn/>

            <div class="hidden xl:block">
              <h2 class="uppercase text-center py-2 font-semibold text-gray-800 text-sm tracking-tighter">Are you ready to create fast and intuitive websites users enjoy ?</h2>
              <cta-a />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden xl:block">
      <div style="height:100px;">
        &nbsp;
      </div>
    </div>
  <!--
    Founded in 2020, Next View has developed a certain algorithm which you can follow in creating websites that sell. I'm
    here to share this with you.

    Start Your Journey And Apply Now
    Discover What It's All About And How You Can Make It A Reality.
    -->
    <div class="container mx-auto p-4 xl:hidden">
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
  },
  data: () => ({
    clicked_play: false
  }),
  methods: {
    clicked() {
      this.clicked_play = true
    }
  }
}
</script>

<style lang="scss">


[style*="--aspect-ratio"]> :first-child {
  width: 100%;
}

@supports (--custom:property) {
  [style*="--aspect-ratio"] {
    position: relative;
  }

  [style*="--aspect-ratio"]::before {
    content: "";
    display: block;
    padding-bottom: calc(100% / (var(--aspect-ratio)));
  }

  [style*="--aspect-ratio"]> :first-child {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
  }
}

.youtube-embed {
  /*
  width: 100%;
  height: -webkit-fill-available;*/
  width: 100%;
  min-width: 650px;
  min-width:420px;
  height:-webkit-fill-available;;
}

.youtube-embed-parent {

  min-height:320px;
}
@media (min-width: 340px) {
  .youtube-embed-parent {
    min-width:120px;
  }
}
@media (min-width: 1024px) {
  .youtube-embed-parent {
    min-width:720px;
  }
}

#play {
  width:100%;
  height:100%;
  position:absolute;
  top:0px;
  left:0px;
  z-index:999;
  overflow:hidden;
  background: url("~assets/img/play.png") center center no-repeat;
}

</style>
