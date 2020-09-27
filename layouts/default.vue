<template>
  <div>
    <nuxt/>
    <footer class="bg-gray-900 text-white">
      <section class="p-20 pt-20">
        <div class="container mx-auto pt-10">
<div class="flex flex-col lg:w-2/3 sm:flex-row mx-auto">



    <div class=" h-auto">
      <div class="text-orange mb-2 text-center">Related</div>
      <ul class="list-reset leading-normal w-full sm:w-48">
        <li class="hover:text-orange text-gray-200 my-1"><a href="https://github.com/ioandev" target="_blank" class="py-2 px-4 text-center bg-blue-900 text-white hover:bg-blue-100 hover:text-blue-800 w-full inline-block"><span class="underline">G</span>it<span class="underline">H</span>ub</a></li>
        <li class="hover:text-orange text-gray-200 my-1"><a href="https://stackoverflow.com/users/1204843/ioan" target="_blank" class="py-2 px-4 text-center bg-blue-900 text-white hover:bg-blue-100 hover:text-blue-800 w-full inline-block"><span class="underline">S</span>tack<span class="underline">O</span>verflow</a></li>
        <li class="hover:text-orange text-gray-200 my-1"><a href="https://www.linkedin.com/in/ioanbiticu/" target="_blank" class="py-2 px-4 text-center bg-blue-900 text-white hover:bg-blue-100 hover:text-blue-800 w-full inline-block"><span class="underline">L</span>inked<span class="underline">I</span>n</a></li>
        <li class="hover:text-orange text-gray-200 my-1"><a href="https://nextview.dev/" target="_blank" class="py-2 px-4 text-center bg-blue-900 text-white hover:bg-blue-100 hover:text-blue-800 w-full inline-block"><span class="underline">N</span>ext<span class="underline">V</span>iew</a></li>
        <li class="hover:text-orange text-gray-200 my-1"><a href="https://ioan.blog/" target="_blank" class="py-2 px-4 text-center bg-blue-900 text-white hover:bg-blue-100 hover:text-blue-800 w-full inline-block"><span class="underline">B</span>log</a></li>
        <li class="hover:text-orange text-gray-200 my-1"><a href="https://www.facebook.com/blogioan" target="_blank" class="py-2 px-4 text-center bg-blue-900 text-white hover:bg-blue-100 hover:text-blue-800 w-full inline-block"><span class="underline">F</span>ace<span class="underline">B</span>ook</a></li>
        <li class="hover:text-orange text-gray-200 my-1"><a href="https://wa.me/message/YBSP2PZXIU6KJ1" target="_blank" class="py-2 px-4 text-center bg-blue-900 text-white hover:bg-blue-100 hover:text-blue-800 w-full inline-block"><span class="underline">W</span>hats<span class="underline">A</span>pp</a></li>
      </ul>
    </div>

    <div class="mt-10 sm:mt-0 h-auto sm:pl-10">
      <div class="text-red-light mb-2">Newsletter</div>
      <p class="text-gray-200 leading-normal">How do you master the web? I will send you some articles in your inbox.</p>
      <div class="mt-4 flex flex-col sm:flex-row">
        <input type="text" class="p-2 border border-grey-light round text-grey-dark text-sm h-auto"
          placeholder="Your email address">
        <button class="bg-orange text-white rounded-sm h-auto text-xs p-3">Subscribe</button>
      </div>
    </div>
</div>



          <p class="text-center" style="margin-top:100px;">Made by <a href="https://nextview.dev/" target="_blank" class="underline">NextView</a></p>
        </div>

      </section>
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
