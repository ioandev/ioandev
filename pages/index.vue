<template>
  <div>
    <h1>Hidden.</h1>
  </div>
</template>

<script>
  export default {
    //middleware: 'promo'
    middleware({ redirect }) {
      return redirect('/how-to-master-the-web')
    }
  }
</script>
