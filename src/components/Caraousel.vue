<template>
  <Carousel>
    <Slide v-for="slide in pictures" :key="slide">
      <div class="carousel__item">
        <img :src="slide" alt="">
      </div>
    </Slide>
    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script setup>
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

import Image1 from '/public/images1.png'
import Image2 from '/public/images2.png'
import Image3 from '/public/images3.png'
import Image4 from '/public/images4.png'
import Image5 from '/public/images5.png'

const pictures = [Image1, Image2, Image3, Image4, Image5 ]



</script>
