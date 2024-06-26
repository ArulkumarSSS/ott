const API_KEY = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjYwNzI4MzYwMjk3ZTE5ODViYTAyYjVlNWJlN2VmNCIsInN1YiI6IjY2MDM3ODg0NjJmMzM1MDE3ZDU1MjlkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dLm8a_YdOnt2sPWZVEc7dwbL7RdbxBv-5uxCakR959Y";

const request = {
  fetchTrending: `/trending/all/day?language=en-US`,
  fetchNetflixOriginals: `/trending/tv/day?language=en-US`,
  fetchActionMovies: `/discover/movie?language=en-US&page=1&with_genres=28`,
  fetchComedyMovies: `/discover/movie?language=en-US&page=1&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?language=en-US&page=1&with_genres=27`,
  fetchRomanticMovies: `/discover/movie?language=en-US&page=1&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?language=en-US&page=1&with_genres=99`,
  fetchLatest: `/trending/all/day?language=en-US`,
  fetchTrendingMovies: `/trending/movie/day?language=en-US`,
  fetchTrendingTv: `/trending/tv/day?language=en-US`,
  fetchTrendingPeople: `/trending/person/day?language=en-US`,
  fetchPopular: `/tv/popular`,
  fetchtopRated: `/tv/top_rated`,
  fetchOnTheAir: `/tv/on_the_air`,
};
export default request;