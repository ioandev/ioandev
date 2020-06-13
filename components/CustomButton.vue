<template>
  <div class="button-outer">
    <div class="inline-block">
      <div :class="'buttonId' + buttonId + '_main flex rounded border-b-2 overflow-hidden m-2'">
        <button
          :class="'buttonId' + buttonId + '_main2 block text-white text-sm shadow-lg text-sm py-3 px-4 font-sans tracking-wide uppercase font-bold'"
          @click="onClick">
          {{displayText}}
        </button>
        <div :class="'buttonId' + buttonId + '_main3 shadow-lg p-3'">
          <div class="w-4 h-4 relative">
            <i class="material-icons absolute">{{icon}}</i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import CustomButton from '~/components/CustomButton'
  export default {
    props: ["text", "icon", "buttonId", "afterClickText"],
    components: {
      CustomButton
    },
    data() {
      return {
        hasBeenClicked: false
      }
    },
    computed: {
      displayText() {
        if (this.hasBeenClicked && this.afterClickText != undefined) {
          return this.afterClickText;
        }
        return this.text
      }
    },
    methods: {
      onClick() {
        this.$emit('click', this.click)
        this.hasBeenClicked = true
      }
    }
  }

</script>

<style lang="scss" scoped>
  i {
    color: white;
    top: 0px;
    left: -4px;
  }

  //default values
  .buttonId_main {
    @apply border-gray-700;
  }

  .buttonId_main2 {
    @apply bg-blue-600;

    &:hover {
      @apply bg-blue-700;
    }
  }

  .buttonId_main3 {
    @apply bg-blue-400;
  }

  ///default values

  .buttonId1_main {
    @apply border-gray-700;
  }

  .buttonId1_main2 {
    @apply bg-blue-600;

    &:hover {
      @apply bg-blue-700;
    }
  }

  .buttonId1_main3 {
    @apply bg-blue-400;
  }



  .buttonId2_main {
    @apply border-gray-700;
  }

  .buttonId2_main2 {
    @apply bg-green-800;

    &:hover {
      @apply bg-green-700;
    }
  }

  .buttonId2_main3 {
    @apply bg-green-400;
  }


  .buttonId3_main {
    @apply border-gray-700;
  }

  .buttonId3_main2 {
    @apply bg-orange-700;

    &:hover {
      @apply bg-orange-500;
    }
  }

  .buttonId3_main3 {
    @apply bg-orange-400;
  }

</style>
