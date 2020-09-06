<template>
  <div class="my-20">
    <h2 class="text-4xl text-center font-bold tracking-tighter">What others say about me...</h2>
    <p class="px-20">Once you attain the passion for creating web sites, people are going to start noticing you and
      you'll be in high demand. It's the combination of these three vital factors forming the ultimate "bliss zone" ...
   </p>

    <div class="flex flex-col mx-10">
      <testimonial
        :company="testimonial.company"
        :content="testimonial.content"
        :author="testimonial.author"
        :img="testimonial.img"
        :title="testimonial.title"
        classes="w-full md:w-3/5 mx-auto"
      v-for="testimonial in testimonials" :key="testimonial.author"/>
    </div>

    <div class="w-2/5 mx-auto">
      <cta-a/>
    </div>
  </div>
</template>

<script>
  import testimonial from './testimonial'
  import ctaA from './cta-a'
  export default {
    components: {
      testimonial,
      ctaA
    },
    data() {
      let testimonial1 = {
        company: "Derivco London",
        content: "Ive really enjoyed working with Ioan. He has always shown a great attitude of getting stuck in to any problem presented, and learn whatever systems or technologies are needed to solve the problem. His other main strength was a good devops approach to development, the ability to write code, build the pipeline to deploy and and then support it in production by monitoring logs and checking for errors. A good multi-talented developer that I'm sorry to see moving on, but I wish him all the best!",
        author: "Chris Ellis",
        title: "Head of Developent",
        //img: "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
        img: require("../assets/img/testimonials/chris-ellis.jpg")
      }
      let testimonial2 = {
        company: "Derivco London",
        content: "Ioan is a brilliant person! We worked together for more than one year in the same team and for all of this time he was always proactive and really committed. Spontaneously, he always try to add value to the his job trying to improve, evolve and test different approaches and technologies. He was a precious asset in my Team and I'm pretty sure he will be a precious asset in every context he will contribute",
        author: "Alessio Laterza",
        title: "Software Team Lead",
        //img: "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
        img: require("../assets/img/testimonials/alessio-laterza.jpg")
      }
      let testimonial3 = {
        company: "Derivco London",
        content: "I had the pleasure of working closely with Ioan during his time at Derivco on a number of projects. Ioan is a focused, forward thinking and intelligent individual. He has tenacity, hunger to better himself and considerable skillset which make him highly committed to getting positive results. I would not hesitate to recommend Ioan and hope we get to work together again in the future.",
        author: "Jacopo Astolfi",
        title: "Lead Quantative Analyst",
        //img: "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
        img: require("../assets/img/testimonials/jacopo-astolfi.jpg")
      }

      return {
        testimonials: [testimonial1,testimonial2,testimonial3]
      }
    }
}
</script>

<style>

</style>
