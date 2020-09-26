<template>
  <div>
    <ul>
      <li v-for="thing in things" :key="thing[1]" class="">
        <div class="border-4 border-blue-800 text-white m-2" style="background-color: #00224c">
          <div class="flex ">
            <div class="text-lg block h-full bg-white flex-grow">
              <div class="inline-block text-2xl bg-white" style="width:50px; overflow-x:hidden;">
              &nbsp;{{thing[0]}}&nbsp;
              </div>
            </div>

            <div class="text-sm w-full align-middle inline-block ml-4 px-2 leading-10 h-full" >
              {{thing[1]}}
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    things: [
      [
        "🕵️‍♀️",
        "Set your lifetime goals, and..",
      ],
      [
        "👟",
        "Learn how to work from the city near by for a few days a week",
      ],
      [
        "👨‍🔬",
        "Discover the programming languages of the web in 2021",
      ],
      [
        "💥",
        "Enjoy a balanced lifestyle with friends & family",
      ],
    ]
  })
}
</script>

<style>

</style>
