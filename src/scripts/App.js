import { Footer, Header } from "../components";
import { Home, MovieList } from "../pages";
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
      body.innerHTML = "<loading-page />";
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
        body.innerHTML = `<error-page data-code=408 data-message="REQUEST TIMEOUT" data-description="Check your internet connection, and try again." />`;
      } else if (error.response.status === 404) {
        body.innerHTML = `<error-page data-code=404 data-message="NOT FOUND" data-description="Sorry, this page isn't available" />`;
      } else {
        body.innerHTML = `<error-page data-code=500 data-message="INTERNAL SERVER ERROR" data-description="Oops, Something when wrong. Try to refresh this page." />`;
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
        main.innerHTML = MovieList(trendingMovie, "Trending");
      });
    });

    const popularLink = document.querySelectorAll("#popular-link");
    popularLink.forEach((link) =>
      link.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo(0, 0);
        document.title = "JMovie - Popular";
        main.innerHTML = MovieList(popularMovie, "Popular");
      })
    );
  };

  document.addEventListener("DOMContentLoaded", () => {
    fetchData();
  });
};

export default App;
