class ErrorPage extends HTMLElement {
  constructor() {
    super();

    this.setAttribute(
      "class",
      "container flex flex-col justify-center items-center gap-3 min-w-full min-h-screen bg-slate-900"
    );

    this.innerHTML = `
      <h1 class="text-9xl text-white font-bold">${this.getAttribute(
        "data-code"
      )}</h1>
      <h1 class="text-2xl text-white font-bold">${this.getAttribute(
        "data-message"
      )}</h1>
      <p class="text-sm text-slate-500">${this.getAttribute(
        "data-description"
      )}</p>
      <a
        href="/"
        class="px-7 py-2 mt-3 sm:mt-4 text-sm text-white hover:text-slate-900 border border-white rounded-full hover:bg-white duration-300"
        >Go to homepage</a
      >
    `;
  }
}

customElements.define("error-page", ErrorPage);
