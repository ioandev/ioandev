<template>
  <div>
    <div class="container">
      <div>
        <h1 class="title">
          Ioan
        </h1>
        <h2 class="subtitle">
          Contractor
        </h2>
        <nuxt />
        <div class="links">
          <CustomButton text="Resume" afterClickText="Resume - Downloaded" @click="cvClick" icon="attach_file"
            buttonId="1" />
          <CustomButton text="LinkedIn" @click="linkedinClick" icon="linkedin" buttonId="2" />
          <CustomButton text="Blog" @click="blogClick" icon="crop_free" buttonId="3" />
          <CustomButton text="Github" @click="githubClick" icon="code" buttonId="4" />
        </div>
      </div>
    </div>

    <footer>
      <client-only>
        <cookie-law theme="dark-lime"></cookie-law>
      </client-only>
    </footer>
  </div>
</template>

<script>
  import CustomButton from '~/components/CustomButton'
  import axios from 'axios'
  import {
    gsap
  } from "gsap/dist/gsap";
  export default {
    components: {
      CustomButton
    },
    methods: {
      async cvClick() {
        let url = "/cv.pdf"
        let label = "IoanBiticu-Contractor.pdf"

        var response = await axios.get(url, {
          responseType: 'blob'
        })
        const blob = new Blob([response.data], {
          type: 'application/pdf'
        })
        const link = document.createElement('a')
        link.href = URL.createObjectURL(blob)
        link.download = label
        link.click()
        URL.revokeObjectURL(link.href)
      },
      async linkedinClick() {
        const linkedInUrl = "https://www.linkedin.com/in/ioanbiticu/"
        window.open(linkedInUrl, '_blank');
      },
      async blogClick() {
        const blogUrl = "https://ioan.blog/"
        window.open(blogUrl, '_blank');
      },
      async githubClick() {
        const githubUrl = "https://github.com/ioandev"
        window.open(githubUrl, '_blank');
      },
    },
    mounted() {
      if (process.browser) {
        var tl = gsap.timeline({
          defaults: {
            duration: 0.4
          }
        });
        tl.from(".title", {
          x: -50,
          stagger: .6,
          opacity: 1,
          duration: 1
        })
        tl.from(".button-outer", {
          y: -50,
          stagger: .4,
          opacity: 0
        }, "-=1")
      }
    }
  }

</script>


<style>
  html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 24px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }

</style>
