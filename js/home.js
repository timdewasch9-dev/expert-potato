/* Builds the homepage hero + work grid from window.PROJECTS. */
(function () {
  const SITE = window.SITE || {};
  const PROJECTS = window.PROJECTS || [];

  const hero = document.querySelector("[data-hero]");
  if (hero) {
    hero.innerHTML = `
      <img class="hero-bg" src="${(PROJECTS[0] && PROJECTS[0].cover) || "assets/img/hero.svg"}" alt="">
      <div class="hero-inner">
        <h1>${SITE.tagline || "Selected Works"}</h1>
        <p class="hero-sub">${SITE.name || ""}${SITE.location ? " — " + SITE.location : ""}</p>
      </div>
      <span class="scroll-cue">Scroll</span>`;
  }

  const grid = document.querySelector("[data-grid]");
  if (grid) {
    grid.innerHTML = PROJECTS.map((p, i) => {
      const n = String(i + 1).padStart(2, "0");
      return `
        <a class="work-item reveal" href="project.html?p=${encodeURIComponent(p.slug)}">
          <figure class="work-figure"><img src="${p.cover}" alt="${p.title}" loading="lazy"></figure>
          <div class="work-meta">
            <h3>${p.title}</h3>
            <span class="work-loc">${[p.category, p.year].filter(Boolean).join(" · ")}</span>
          </div>
          <span class="work-index">${n} — ${p.location || ""}</span>
        </a>`;
    }).join("");

    const count = document.querySelector("[data-count]");
    if (count) count.textContent = String(PROJECTS.length).padStart(2, "0");

    if (window.observeReveals) window.observeReveals();
  }
})();
