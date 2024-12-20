<script setup>
import { ref, onMounted, computed } from 'vue';
import { useMoviesStore } from '../stores/cards';

const moviesStore = useMoviesStore();
const currentSlide = ref(0);

const props = defineProps({
  intervalTime: {
    type: Number,
    default: 2500
  },
  itemsPerSlide: {
    type: Number,
    default: 4
  }
});

onMounted(() => {
  moviesStore.fetchMovies();

  const interval = setInterval(() => {
    nextSlide();
  }, props.intervalTime);

  return () => clearInterval(interval);
});

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % Math.ceil(moviesStore.movies.length / props.itemsPerSlide);
};

const prevSlide = () => {
  currentSlide.value =
    (currentSlide.value - 1 + Math.ceil(moviesStore.movies.length / props.itemsPerSlide)) %
    Math.ceil(moviesStore.movies.length / props.itemsPerSlide);
};

const visibleMovies = computed(() => {
  const start = currentSlide.value * props.itemsPerSlide;
  return moviesStore.movies.slice(start, start + props.itemsPerSlide);
});
</script>

<template>
  <div v-if="moviesStore.loading" class="loading">
    Carregando...
  </div>
  <div v-else class="carousel">
    <div class="carousel-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
      <div
        class="carousel-slide"
        v-for="(movie, index) in moviesStore.movies"
        :key="movie.id"
      >
        <div class="backdrop" :style="{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop})` }"></div>
        <div class="slide-content">
          <h1 class="movie-title">{{ movie.title }}</h1>
          <p class="movie-description">{{ movie.description }}</p>
          <button class="watch-button">Assistir</button>
        </div>
      </div>
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
  filter: brightness(0.4);
}

.slide-content {
  position: absolute;
  top: 58%; 
  left: 19px; 
  transform: translateY(-50%); 
  color: white;
  z-index: 10;
  text-align: left;
  width: 90%;
}

.movie-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  padding-left: 0;
}

.movie-description {
  font-size: 1.2rem;
  top: 10%;
  line-height: 1.5;
  max-width: 600px;
  padding-left: 1px;
}

.watch-button {
  display: inline-block;
  padding: 10px 30px;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: white;
  color: black;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 5px;
  margin-top: 20px;
}

.watch-button:hover {
  background-color: #444;
}

.carousel-controls {
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  z-index: 20;
}

@media (max-width: 768px) {
  .movie-title {
    font-size: 2rem;
  }

  .movie-description {
    font-size: 1rem;
  }

  .watch-button {
    font-size: 1rem;
    padding: 8px 16px;
  }
}

@media (max-width: 480px) {
  .movie-title {
    font-size: 1.5rem;
  }

  .movie-description {
    font-size: 0.9rem;
  }

  .watch-button {
    font-size: 0.9rem;
    padding: 6px 12px;
  }
}
</style>
