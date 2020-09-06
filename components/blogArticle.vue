<template>
  <a :href="href" target="_blank" class="block flex-1" :class="classes">
    <div class="max-w-sm rounded overflow-hidden shadow-lg h-full">
      <img class="w-full h-40 object-cover" :src="img" :alt="img_alt">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{title}}</div>
        <p class="text-gray-700 text-base" v-html="excerpt"/>
      </div>

      <div class="px-6 pt-4 pb-2" v-if="tags.length != 0">
        <span
          v-for="tag in tags" :key="tag"
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{{tag}}</span>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: ["title", "excerpt", "tags", "img", "img_alt", "href", "classes"]
}
</script>

<style>

</style>
