<template>
    <carousel :items-to-show="1.5">
      <slide v-for="slide in data" :key="slide.id">
        <img :src="slide.src" alt="" class="object-cover">
      </slide>
  
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </template>
  
  <script setup>
  import 'vue3-carousel/dist/carousel.css'
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

  const data = [
    { id: 1, src: '../src/assets/images/images3.jpg', title: 'Pulse Aio Pro', price: 800000,
  description: 'Varian terbaru dari pulse aio dengan konsep yang colorfull', type: 'AIO'},
  
  { id: 2, src: "../src/assets/images/images2.jpeg", title: "Paradewa Sthorberry", price: 100000,
  description: 'Liquid terbaru dari paradewa dengan', type: 'LIQUID'},

  { id: 3, src: '../src/assets/images/images6.jpg', title: 'Oxva Xlim Pro', price: 200000, 
  description: 'POD kekinian yang disukai banyak anak muda', type: 'POD' },
  
  { id: 4, src: '../src/assets/images/images4.jpg', title: 'Drop Rda', price: 400000,
  description: 'Rda terbaru dari drop yang menawarkan flavour dan th yang nikmat', type: 'RDA'},
  
  { id: 5, src: '../src/assets/images/images5.jpg', title: 'Tita Rta', price: 600000,
  description: 'New tita RTA dengan model terbaru', type: 'RTA'},
  ]
  
  </script>