const requests = {
  fetchTrending:
    "https://api.themoviedb.org/3/trending/all/week?api_key=af0299303bc281f7f4b37e8ad881de7f",
  fetchNetflixOriginals:
    "https://api.themoviedb.org/3/discover/tv?api_key=af0299303bc281f7f4b37e8ad881de7f&with_networks=213",
  fetchTopRated:
    "https://api.themoviedb.org/3/movie/top_rated?api_key=af0299303bc281f7f4b37e8ad881de7f",
  fetchActionMovies:
    "https://api.themoviedb.org/3/discover/movie?api_key=af0299303bc281f7f4b37e8ad881de7f&with_genres=28",
  fetchComedyMovies:
    "https://api.themoviedb.org/3/discover/movie?api_key=af0299303bc281f7f4b37e8ad881de7f&with_genres=35",

  fetchHorrorMovies:
    "https://api.themoviedb.org/3/discover/movie?api_key=af0299303bc281f7f4b37e8ad881de7f&with_genres=27",

  fetchRomanceMovies:
    "https://api.themoviedb.org/3/discover/movie?api_key=af0299303bc281f7f4b37e8ad881de7f&with_genres=10749",

  fetchDocumentaries:
    "https://api.themoviedb.org/3/discover/movie?api_key=af0299303bc281f7f4b37e8ad881de7f&with_genres=99",
};
export default requests;
