import { limitText, limitDate } from "../scripts/utils";

const Card = ({ id, title, poster_path, release_date, vote_average }) =>
  `
    <div class="flex flex-col group hover:cursor-pointer " id="${id}" title="${title} • ${limitDate(
    release_date,
    4
  )}">
      <div class="overflow-hidden rounded-md sm:rounded-lg">
        <img src="https://image.tmdb.org/t/p/w200${poster_path}" alt="${title}" class="w-full h-full group-hover:scale-105 group-hover:brightness-75 duration-500" loading="lazy" />
      </div>
      <p class="pt-2 sm:pt-3 text-sm sm:text-base font-semibold">${limitText(
        title,
        18
      )}</p>
      <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:pt-2 text-neutral-200/50">
        <p class="text-[12px] sm:text-sm">${limitDate(
          release_date,
          4
        )} • ⭐ ${vote_average.toString().substring(0, 4)}</p>
        <div class="flex items-center justify-center w-fit px-1.5 text-xs border border-neutral-200/50 rounded-[4px]">Movie</div>
      </div>
    </div>
  `;

export default Card;
