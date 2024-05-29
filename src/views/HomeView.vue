<script setup>
import Navbar from '@/components/Navbar.vue';
import Card from '@/components/Card.vue';
import Footer from '@/components/Footer.vue';
import Caraousel from '@/components/Caraousel.vue';

</script>

<template>
  <main>
    <Navbar />
    <div class="flex items-center justify-center mt-5 mb-5">
      <Caraousel />
    </div>
    <div class="grid items-start justify-between grid-flow-col gap-4 ">
      <Card />
    </div>
    <Footer />
  </main>
</template>
