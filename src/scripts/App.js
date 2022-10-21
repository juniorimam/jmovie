import { Footer, Header } from "../components";
import { Home, Loading, Error, MovieList } from "../pages";
import {
  movieDetail,
  nowPlaying,
  trendingMovie,
  popularMovie,
  getMovieDetail,
  getNowPlaying,
  getTrendingMovie,
  getPopularMovie,
} from "./api/fetch";

const App = () => {
  const body = document.body;

  const fetchData = async () => {
    if (window.fetch) {
      body.innerHTML = Loading();
    }

    try {
      await getMovieDetail(process.env.TOP_MOVIE_ID);
      await getNowPlaying();
      await getTrendingMovie(1);
      await getTrendingMovie(2);
      await getPopularMovie(1);
      await getPopularMovie(2);

      renderComponents();
    } catch (error) {
      if (error.message.includes("timeout")) {
        body.innerHTML = Error(
          408,
          "REQUEST TIMEOUT",
          "Check your internet connection, and try again."
        );
      } else if (error.response.status === 404) {
        body.innerHTML = Error(
          404,
          "NOT FOUND",
          "Sorry, this page isn't available."
        );
      } else {
        body.innerHTML = Error(
          500,
          "INTERNAL SERVER ERROR",
          "Oops, Something when wrong. Try to refresh this page."
        );
      }
    }
  };

  const renderComponents = () => {
    body.innerHTML = `
        ${Header()}
        <main class="bg-gradient-to-t from-slate-900 via-slate-800 to-slate-900 text-white">
          ${Home(popularMovie, nowPlaying, trendingMovie, movieDetail)}
        </main>
        ${Footer()}
      `;

    const main = document.querySelector("main");
    const moviesLink = document.querySelectorAll("#movies-link");
    moviesLink.forEach((link) =>
      link.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo(0, 0);
        document.title = "JMovie";
        window.history.pushState("", "", "/");
        main.innerHTML = Home(
          popularMovie,
          nowPlaying,
          trendingMovie,
          movieDetail
        );
      })
    );

    const trendingLink = document.querySelectorAll("#trending-link");
    trendingLink.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo(0, 0);
        document.title = "JMovie - Trending";
        window.history.pushState("", "", "/trending");
        main.innerHTML = MovieList(trendingMovie, "Trending");
      });
    });

    const popularLink = document.querySelectorAll("#popular-link");
    popularLink.forEach((link) =>
      link.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo(0, 0);
        document.title = "JMovie - Popular";
        window.history.pushState("", "", "/popular");
        main.innerHTML = MovieList(popularMovie, "Popular");
      })
    );
  };

  document.addEventListener("DOMContentLoaded", () => {
    fetchData();
  });
};

export default App;
