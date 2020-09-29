<template>
  <div class=" bg-gray-200 border-b-8">
    <div class="container mx-auto py-20 bg-gray-100 relative">
      <h2 class="text-4xl text-center font-bold tracking-tighter">The Key To Unlock Life's Sweetest Secret…</h2>
      <!--<p>Once you've attained this, you may never want to go back. It's the combination of these three vital factors
        forming the ultimate "bliss zone" …</p>-->
      <div class="what-its-about m-20">
        <!--<h1>What the course is about</h1>-->
        <h2>
          #1: Location Independence
        </h2>
        <p>
          You only need a few things to work from anywhere you want. Ask yourself, what can't you live without that is not easy to get from wherever you are? What you'll probably have left is: a laptop with a good keyboard and a large screen, a powerbank, a phone, an external SSD for backups, and a data to wifi router because the internet is indeed, <strong>essential</strong>. Take this with you, a few clothes, and book that airbnb you want to go to for a couple of weeks, tickets, and go. You've got the privilege to work from wherever you want in this industry. You're not needed in the office.
        </p>
        <h2>
          #2: Financial Stability
        </h2>
        <p>
          You need money to enjoy financial freedom. Luckily, this industry pays above average for your coding skills. It can even pay 10X above the average salary if you do contracting and you are <strong>good</strong> at what you're doing. No surprises there. You want to travel, to enjoy the places you travel to, to improve yourself with books and mentors, to buy the sports equipement you need? You can have your cake and eat it too.
        </p>
        <h2>
          #3: Pursuit of Passion
        </h2>
        <p>
          There are so many industries out there. What I've specialised in is web development, which was my preferred choice against game development, app development and software development. Which was the right bet for me, as it's only the game industry that is not moving towards web technologies at the moment. And, the game industry requires way more work from developers than web development - while also paying pennies. Web development is what I recommend everyone should focus on if, of course, <strong>you like it</strong>.
        </p>
        <p>Here are a few benefits of web development that <strong>crushed</strong> the app&software development sectors:</p>
        <ul class="list-disc list-inside">
          <li>Faster speed internet means websites load fast, without needing to run an installed</li>
          <li>Software applications are often converted to cloud technologies, whose preferred way of access is the HTTP protocol</li>
          <li>The technology stack build on top of JavaScript and HTML5 have improved massively in the past 10 years, and it has become the preffered way of coding for many coders</li>
          <li>Building an app like Spotify or Slack on top of a web stack lets you have 0day updates and faster, targeted, A/B tested deployments</li>
          <li>The engine behind Chromium has advanced so much it allows you to have offline webpages, PWAs, notifications, location access, local databases, video playback, 3d GPU rendering, 1 click checkout, powerful CSS3 animations, extensions on top of extensions</li>
          <li>React Native which went way ahead of its rivals such as Xamarin</li>
          <li>Accessibility tools for the blind</li>
          <li>Search engines</li>
          <li>WYSIWYG and cross platform support, independent of the OS or screen size</li>
          <li><strong>and more..</strong></li>
        </ul>
        <p>The web stack is the gorilla in the room now, you should <strong>pay attention to it</strong>.</p>
        <div class="pt-10">
          <cta-a/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import ctaA from './cta-a'
export default {
  components: {
    ctaA
  }
}
</script>

<style lang="scss">

  .what-its-about {
    h1 {
      @apply text-3xl leading-10 mb-8;
    }
    h2 {
      @apply text-2xl;
    }
    p {
      @apply leading-7 my-4;
    }
  }
</style>
