const Error = (code, message, description) =>
  `
    <section class="container flex flex-col justify-center items-center gap-3 min-w-full min-h-screen bg-slate-900">
      <h1 class="text-9xl text-white font-bold">${code}</h1>
      <h1 class="text-2xl text-white font-bold">${message}</h1>
      <p class="text-sm text-slate-500">${description}</p>
      <a href="/" class="px-7 py-2 mt-3 sm:mt-4 text-sm text-white hover:text-slate-900 border border-white rounded-full hover:bg-white  duration-300">Go to homepage</a>
    </section>
`;

export default Error;
