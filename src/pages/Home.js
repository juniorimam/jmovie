import { Hero, MovieSection } from "../components";

const Home = (popularMovie, nowPlaying, trendingMovie, movieDetail) =>
  `
    ${Hero(movieDetail)}
    <section id="movie-list" class="container mx-auto flex flex-col min-w-full sm:min-w-min pt-10 pb-16">
      ${MovieSection(nowPlaying.slice(0, 16), "Now Playing")}
      ${MovieSection(trendingMovie.slice(0, 16), "Trending", "pt-12")}
      ${MovieSection(popularMovie.slice(0, 16), "Popular", "pt-12")}
    </section>
  `;

export default Home;
