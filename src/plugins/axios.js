import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';

const API_KEY = import.meta.env.VITE_TOKEN;

const tmdb = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY, 
    language: 'pt-BR', 
  },
});

export default tmdb;
