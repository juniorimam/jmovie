import { Card } from ".";

const MovieSection = (movies, title, padding = "p-0") =>
  `
    <section class="flex flex-col min-w-full ${padding}">
      <h1 class="w-fit pb-2 mb-5 text-2xl font-bold border-b border-slate-700">${title}</h1>
      <div class="grid grid-flow-row gap-x-3 sm:gap-x-5 gap-y-6 sm:gap-y-8 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        ${movies.map((movie) => Card(movie)).join("")}
      </div>
    </section>
  `;

export default MovieSection;
