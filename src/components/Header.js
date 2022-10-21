const Header = () =>
  `
    <header class="absolute top-0 left-0 z-50 min-w-full">
      <nav class="container mx-auto flex flex-col sm:flex-row items-center gap-2 sm:gap-16 px-0 pt-3 sm:py-6">
        <a href="#" id="movies-link" class="flex flex-row items-center min-w-fit">
          <img src="https://img.icons8.com/material-rounded/48/000000/play--v1.png" class="invert"/>
          <h1 class="text-2xl text-white font-bold">JMovie</h1>
        </a>
        <ul class="flex flex-row gap-10 text-sm text-neutral-200/80">
          <a href="#" id="movies-link" class="hover:text-neutral-200 duration-300">
            <li>Movies</li>
          </a>
          <a href="#" id="trending-link" class="hover:text-neutral-200 duration-300">
            <li>Trending</li>
          </a>
          <a href="#" id="popular-link" class="hover:text-neutral-200 duration-300">
            <li>Popular</li>
          </a>
        </ul>
        <div class="hidden sm:flex flex-row gap-5 justify-end items-center w-full invert">
          <a href="https://github.com/juniorimam" target="_blank" title="Github">
            <img src="https://simpleicons.org/icons/github.svg" alt="Github" class="w-[23px] opacity-60 hover:opacity-100 duration-300"/>
          </a>
          <a href="https://www.linkedin.com/in/junior-imam/" target="_blank" title="LinkedIn">
            <img src="https://simpleicons.org/icons/linkedin.svg" alt="LinkedIn" class="w-[23px] opacity-60 hover:opacity-100 duration-300"/>
          </a>
        </div>
      </nav>
    </header>
  `;

export default Header;
