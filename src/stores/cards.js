import { defineStore } from 'pinia';
import tmdb from '../api/tmdb'; // A instância do Axios configurada

export const useMoviesStore = defineStore('movies', {
  state: () => ({
    movies: [], // Armazena os filmes para o carrossel
    loading: false,
    error: null,
  }),
  actions: {
    async fetchMovies() {
      this.loading = true;
      this.error = null;
      try {
        const { data } = await tmdb.get('/movie/popular', {
          params: { page: 1 },
        });

        // Pegue os detalhes adicionais do trailer para os 3 primeiros filmes
        const trailers = await Promise.all(
          data.results.slice(0, 3).map(async (movie) => {
            const movieDetails = await tmdb.get(`/movie/${movie.id}`, {
              params: { append_to_response: 'videos' },
            });
            const trailer = movieDetails.data.videos.results.find(
              (video) => video.type === 'Trailer' && video.site === 'YouTube'
            );
            return {
              id: movie.id,
              title: movie.title,
              description: movie.overview,
              backdrop: movie.backdrop_path,
              trailerKey: trailer?.key || null,
            };
          })
        );

        this.movies = trailers;
      } catch (err) {
        this.error = 'Failed to fetch movies';
        console.error(err);
      } finally {
        this.loading = false;
      }
    },
  },
});
