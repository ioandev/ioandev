<template>
  <div>
    <nuxt/>
    <footer>
      <p>Made by NextView</p>
      <client-only>
        <cookie-law theme="dark-lime"></cookie-law>
      </client-only>
    </footer>
  </div>
</template>



<style>
  * {
    font-family: 'Montserrat', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  .h-ta-screen {
    min-height:60vh;
  }

  .who_is_ioan {
    box-shadow: 40px 40px #ffff00;
  }

  .cool_shadow {
    box-shadow: 0 -5px 5px -5px #333, 0 5px 5px -5px #333;
  }
  .cool_shadow2 {
    /*box-shadow: 0px -11px 32px 3px rgba(255,255,255,0.8), 10px 10px 8px 3px black, -10px 10px 8px 3px black;*/
    box-shadow: 0px 0px 1px 1px rgba(255,255,255,0.5);
  }
</style>
