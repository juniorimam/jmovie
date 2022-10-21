import axios from "axios";

let movieDetail = [];
let nowPlaying = [];
let trendingMovie = [];
let popularMovie = [];

const requestTimeout = 15000;

const getMovieDetail = async (movieId = process.env.TOP_MOVIE_ID) => {
  const response = await axios.get(`${process.env.BASE_URL}/movie/${movieId}`, {
    params: {
      api_key: process.env.TMDB_API_KEY,
    },
    timeout: requestTimeout,
  });

  const result = await response.data;
  movieDetail = result;
};

const getNowPlaying = async () => {
  const response = await axios.get(
    `${process.env.BASE_URL}/movie/now_playing`,
    {
      params: {
        api_key: process.env.TMDB_API_KEY,
      },
      timeout: requestTimeout,
    }
  );
  const result = await response.data.results;
  nowPlaying = result;
};

const getTrendingMovie = async (page = 1) => {
  const response = await axios.get(
    `${process.env.BASE_URL}/trending/movie/week`,
    {
      params: {
        api_key: process.env.TMDB_API_KEY,
        page: page,
      },
      timeout: requestTimeout,
    }
  );

  const result = [...trendingMovie, ...response.data.results];
  trendingMovie = result;
};

const getPopularMovie = async (page = 1) => {
  const response = await axios.get(`${process.env.BASE_URL}/movie/popular`, {
    params: {
      api_key: process.env.TMDB_API_KEY,
      page: page,
    },
    timeout: requestTimeout,
  });

  const result = [...popularMovie, ...response.data.results];
  popularMovie = result;
};

export {
  movieDetail,
  nowPlaying,
  trendingMovie,
  popularMovie,
  getMovieDetail,
  getNowPlaying,
  getTrendingMovie,
  getPopularMovie,
};
