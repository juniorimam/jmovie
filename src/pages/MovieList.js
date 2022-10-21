import { MovieSection } from "../components";

const MovieList = (movies, title) =>
  `
    <section id="movie-list" class="container mx-auto flex flex-col min-w-full sm:min-w-min pt-28 sm:pt-24 pb-16">
      ${MovieSection(movies, title)}
    </section>
  `;

export default MovieList;
