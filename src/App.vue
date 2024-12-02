<script>
import Header  from "@/components/Header.vue";
import Carousel from "./components/Carousel.vue";

export default {
  components: {
    Header,
    Carousel,
  },
  setup() {
    const carouselSlides = [
      "https://via.placeholder.com/800x300?text=Slide+1",
      "https://via.placeholder.com/800x300?text=Slide+2",
      "https://via.placeholder.com/800x300?text=Slide+3",
    ];

    return {
      carouselSlides,
    };
  },
};
</script>

<template>
  <Header />
  <Carousel />n
</template>