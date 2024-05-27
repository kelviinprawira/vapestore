<script setup>
import { ref } from 'vue';

import Navbar from '@/components/Navbar.vue';
import Card from '@/components/Card.vue';
import Footer from '@/components/Footer.vue';
import Caraousel from '@/components/Caraousel.vue';

const data = ref([
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
]);
</script>

<template>
  <main>
    <Navbar />
    <div class="flex items-center justify-center mt-5 mb-5">
      <Caraousel :data="data" />
    </div>
    <div class="grid items-start justify-between grid-flow-col gap-4">
      <Card :data="data"/>
    </div>
    <Footer />
  </main>
</template>
