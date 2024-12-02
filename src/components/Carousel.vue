<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

// Carrega o token do arquivo .env
const token = import.meta.env.VITE_TOKEN;

// Verifica se o token está carregado corretamente
if (!token) {
  console.error("O token não foi carregado. Verifique o arquivo .env.");
}

// Configuração da instância do Axios
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const moviesGenres = ref([]);
const TVGenres = ref([]);
const movieResponse = ref(null); 
const tvResponse = ref(null);

onMounted(async () => {
  try {
    let response = await api.get("genre/movie/list?language=pt-BR");
    movieResponse.value = response;
    moviesGenres.value = response.data.genres;

    response = await api.get("genre/tv/list?language=pt-BR");
    tvResponse.value = response; 
    TVGenres.value = response.data.genres;
    console.log(TVGenres)
  } catch (error) {
    console.error("Erro ao carregar os gêneros:", error.response || error.message);
  }
});
</script>

<template>
  <h1>Gêneros de Filmes</h1>
  <ul>
    <li v-for="genre in moviesGenres" :key="genre.id">
      {{ genre.name }}
    </li>
  </ul>

  <pre v-if="movieResponse">
    <strong>Response de Filmes:</strong>
    {{ movieResponse }}
  </pre>

  <hr />

  <h1>Gêneros de Programas de TV</h1>
  <ul>
    <li v-for="genre in TVGenres" :key="genre.id">
      {{ genre.name }}
    </li>
  </ul>

  <pre v-if="tvResponse">
    <strong>Response de TV:</strong>
    {{ tvResponse }}
  </pre>
</template>
