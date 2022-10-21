import { limitText, limitDate } from "../scripts/utils";

const Hero = ({
  backdrop_path,
  title,
  overview,
  release_date,
  runtime,
  vote_average,
  homepage,
}) =>
  `
    <section class="min-h-screen sm:min-h-[60vh] lg:min-h-[75vh] bg-cover bg-center bg-no-repeat duration-300" style="background-image: url(${
      process.env.IMG_URL + backdrop_path
    })">
      <div class="min-w-full min-h-screen sm:min-h-[60vh] lg:min-h-[75vh] bg-gradient-to-t from-slate-900 via-slate-800/80 to-slate-700/80 duration-300">
        <div class="container mx-auto flex items-end min-w-full sm:min-w-min min-h-screen sm:min-h-[60vh] lg:min-h-[75vh] pb-14">
          <div class="flex flex-col gap-2 sm:gap-3 md:max-w-md lg:max-w-xl">
            <h1 class="text-2xl text-white font-semibold drop-shadow-sm">${title}</h1>
            <div class="flex flex-row items-center gap-5 text-[12px] sm:text-sm drop-shadow-sm">
              <p class="flex items-center justify-center px-4 py-1 bg-slate-600 text-white font-semibold rounded-full drop-shadow-lg">⭐ ${vote_average
                .toString()
                .substring(0, 4)}</p>
              <p class="text-neutral-200/80">${limitDate(
                release_date
              )} • ${runtime} min</p>
            </div>
            <p class="hidden sm:block text-sm text-neutral-200/80">
              ${limitText(overview, 250)}
            </p>
            <p class="visible sm:hidden text-[12px] text-neutral-200/80">
              ${limitText(overview, 150)}
            </p>
            <a href="${homepage}" class="w-fit px-7 py-2 mt-3 text-sm border border-white hover:border-slate-600 rounded-full hover:bg-slate-600 duration-300" target="_blank">Watch now</a>
          </div>
        </div>
      </div>
    </section>
  `;

export default Hero;
