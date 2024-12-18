<script>
import { ref } from 'vue';

const currentSlide = ref(0);

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + moviesStore.movies.length) % moviesStore.movies.length;
};

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % moviesStore.movies.length;
};
</script>

<script setup>
import { onMounted } from 'vue';
import { useMoviesStore } from '@/stores/useMoviesStore';
import { ref } from 'vue';

const moviesStore = useMoviesStore();

onMounted(() => {
  moviesStore.fetchMovies();


});
</script>

<template>
  <div v-if="moviesStore.loading" class="loading">
    Carregando...
  </div>
  <div v-else class="carousel">
    <div class="carousel-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
      <div class="carousel-slide" v-for="movie in moviesStore.movies" :key="movie.id">
        <div class="slide-content">
          <h1 class="movie-title">{{ movie.title }}</h1>
          <p class="movie-description">{{ movie.description }}</p>
          <iframe
            v-if="movie.trailerKey"
            class="movie-trailer"
            :src="`https://www.youtube.com/embed/${movie.trailerKey}`"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          ></iframe>
        </div>
        <div
          class="backdrop"
          :style="{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop})` }"
        ></div>
      </div>
    </div>
    <div class="carousel-controls">
      <button @click="prevSlide">❮</button>
      <button @click="nextSlide">❯</button>
    </div>
  </div>
</template>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-slide {
  min-width: 100%;
  height: 100vh;
  position: relative;
}

.backdrop {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  z-index: -1;
  filter: brightness(0.5);
}

.slide-content {
  position: absolute;
  bottom: 50px;
  left: 50px;
  color: white;
  z-index: 10;
}

.movie-title {
  font-size: 3rem;
  font-weight: bold;
}

.movie-description {
  font-size: 1.5rem;
  margin-top: 10px;
}

.movie-trailer {
  margin-top: 20px;
  width: 560px;
  height: 315px;
}

.carousel-controls {
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
}

.carousel-controls button {
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1.5rem;
  cursor: pointer;
}

.carousel-controls button:hover {
  background: rgba(0, 0, 0, 0.8);
}
</style>
