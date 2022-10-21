const Footer = () =>
  `
    <footer class="bg-slate-900 brightness-75 text-neutral-300/30">
      <div class="container flex flex-col sm:flex-row min-w-full sm:min-w-min py-10 sm:mx-auto">
        <div class="flex flex-col basis-1/2">
          <h3 class="text-white font-semibold">Links</h3>
          <ul class="flex flex-col gap-2 w-fit mt-3 text-sm">
            <a href="#" id="movies-link" class="hover:text-neutral-300/70 duration-300">
              <li>Movies</li>
            </a>
            <a href="#" id="trending-link" class="hover:text-neutral-300/70 duration-300">
              <li>Trending</li>
            </a>
            <a href="#" id="popular-link" class="hover:text-neutral-300/70 duration-300">
              <li>Popular</li>
            </a>
          </ul>
        </div>
        <div class="flex flex-col basis-1/2 pt-6 sm:pt-0">
          <h3 class="text-white font-semibold">About Us</h3>
          <p class="mt-3 text-sm">
            JMovie is website for list of movie by using <a href="https://developers.themoviedb.org/3/getting-started/introduction" target="_blank" class="text-neutral-300/60 hover:text-neutral-300/80 font-semibold duration-300">The Movie Database (TMDB) API</a>. You can see any movies that recently playing, popular or trending in this site.
          </p>
          <div class="flex flex-row gap-5 justify-center items-center mt-6 invert sm:hidden">
            <a href="https://github.com/juniorimam" target="_blank" title="Github">
              <img src="https://simpleicons.org/icons/github.svg" alt="Github" class="w-[23px] opacity-60 hover:opacity-100 duration-300"/>
            </a>
            <a href="https://www.linkedin.com/in/junior-imam/" target="_blank" title="LinkedIn">
              <img src="https://simpleicons.org/icons/linkedin.svg" alt="LinkedIn" class="w-[23px] opacity-60 hover:opacity-100 duration-300"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  `;

export default Footer;
