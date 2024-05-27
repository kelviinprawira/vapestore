<template>
  <Carousel>
    <Slide v-for="slide in pictures" :key="slide">
      <div class="carousel__item">
        <img :src="slide.image" alt="">
        </div>
    </Slide>
    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script setup>
import { ref } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

const pictures = ref([
  { image: "../public/images1.png"},
  {  image: "../public/images2.png"},
  {  image: "../public/images3.png"},
  {  image: "../public/images4.png"},
  {  image: "../public/images5.png"},
])



</script>
