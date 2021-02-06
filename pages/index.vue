<template>
  <div class="homepage sketch">
    <header>
      <img src="~/assets/img/ioan.jpg" alt="Ioan's profile picture" class="profile-picture" />
      <h1 class="title">Catalin Hoha</h1>
      <h2 class="subtitle">Independent Contractor</h2>
    </header>
    <nav class="">
      <h3 class="header-title">Contact</h3>
      <ul>
        <li><a href="#">LinkedIn profile</a></li>
        <li><a href="#">15 min call with Calendly</a></li>
        <li><a href="#">Send me a mail</a></li>
      </ul>
    </nav>
    <article class="">
      <h3 class="header-title">About</h3>
      <p><strong>Full Stack Developer</strong> with <strong>4 years of experience</strong> in building <strong>back-end</strong> and <strong>front-end</strong> solutions. I work as a contractor and sonsultant to help companies around the world design and implement their software products. Only interested in <strong>remote jobs.</strong></p>
      <p>On the technical side, I enjoy working with <strong>Python</strong> and <strong>JavaScript</strong>. I am experienced with <strong>Django</strong>, <strong>Flask</strong>, <strong>Express</strong>, <strong>React</strong>, <strong>Vue</strong> and other similar technologies.</p>
      <p>Contact me if you think my expertise could help your organisation!</p>
    </article>
  </div>
</template>

<script>
  export default {
    //middleware: 'promo'

  }
</script>

<style lang="scss" scoped>
  .sketch {

    //background: url("~assets/img/sketch.png") 0px 0px no-repeat;
    /*width:487px;
    height:617px;*/
  }

  .homepage {
    @apply  mx-auto p-4 align-middle;

    .title {
      @apply text-4xl font-semibold text-center
    }
    .subtitle {
      @apply text-2xl  text-center
    }
    .profile-picture {
      @apply w-32 h-32 rounded-full mx-auto
    }

    .header-title {
      @apply font-bold py-4
    }

    article {
      p {
        @apply mb-4
      }

      strong {
        @apply font-semibold
      }
    }

    nav a {
      @apply underline text-lg py-2 leading-9;
    }
  }

</style>
