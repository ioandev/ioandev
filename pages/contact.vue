<template>
  <div>
    <p>The contact page is under construction. Please contact me on LinkedIn in the meantime.</p>
    <client-only>
      <div>{{redirect()}}</div>
    </client-only>
  </div>
</template>

<script>
  export default {
    methods: {
      redirect() {
        const linkedInUrl = "https://www.linkedin.com/in/ioanbiticu/"
        if (process.browser) {
          location.href = linkedInUrl;
        }
      }
    }
  }

</script>
