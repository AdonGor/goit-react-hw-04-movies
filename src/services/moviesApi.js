import axios from 'axios';

const apiKey = '030295876ec9637cb436e167c8c73741';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrendingMovies = () => {
  return axios
    .get(`trending/all/day?api_key=${apiKey}`)
    .then(response => response.data.results);
}

export const fetchMoviesWithQuery = (query) => {
  return axios
    .get(`search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`)
    .then(response => response.data.results);
}

export const fetchMovieDetails = (movieId) => {
  return axios
    .get(`movie/${movieId}?api_key=${apiKey}&language=en-US`)
    .then(response => response.data);
}

export const fetchMovieCast = (movieId) => {
  return axios
    .get(`movie/${movieId}/credits?api_key=${apiKey}`)
    .then(response => response.data.cast);
}

export const fetchMovieReviews = (movieId) => {
  return axios
    .get(`movie/${movieId}/reviews?api_key=${apiKey}&language=en-US&page=1`)
    .then(response => response.data.results);
}


