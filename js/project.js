/* Renders a single project page from ?p=<slug>, plus prev/next nav + lightbox. */
(function () {
  const PROJECTS = window.PROJECTS || [];
  const params = new URLSearchParams(location.search);
  const slug = params.get("p");
  const idx = PROJECTS.findIndex((p) => p.slug === slug);
  const project = idx > -1 ? PROJECTS[idx] : PROJECTS[0];
  const root = document.querySelector("[data-project]");
  if (!root) return;

  if (!project) {
    root.innerHTML = `<div class="wrap"><h1 class="page-title">Not found</h1>
      <p><a href="index.html" class="btn">Back to work</a></p></div>`;
    return;
  }

  document.title = `${project.title} · ${(window.SITE && window.SITE.name) || "Portfolio"}`;

  const facts = project.facts || {};
  const factsHtml = Object.keys(facts).length
    ? `<dl class="project-facts">${Object.entries(facts)
        .map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`)
        .join("")}</dl>`
    : "";

  const intro = (project.description || [])
    .map((p) => `<p>${p}</p>`)
    .join("");

  const images = (project.images || [])
    .map((img) => (typeof img === "string" ? { src: img } : img))
    .map(
      (img) => `
      <figure class="project-image${img.main ? " is-main" : ""}">
        <img src="${img.src}" alt="${img.title || project.title}" loading="lazy">
        ${img.title ? `<figcaption>${img.title}</figcaption>` : ""}
      </figure>`
    )
    .join("");

  const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  root.innerHTML = `
    <header class="project-hero wrap reveal">
      <span class="eyebrow">${[project.category, project.location, project.year].filter(Boolean).join(" / ")}</span>
      <h1>${project.title}</h1>
      ${factsHtml}
    </header>

    <section class="project-intro wrap narrow reveal">${intro}</section>

    <section class="project-images wrap">${images}</section>

    <nav class="project-nav wrap">
      <a class="prev" href="project.html?p=${encodeURIComponent(prev.slug)}">Previous<span>${prev.title}</span></a>
      <a class="next" href="project.html?p=${encodeURIComponent(next.slug)}">Next<span>${next.title}</span></a>
    </nav>`;

  if (window.observeReveals) window.observeReveals();

  /* ---- lightbox ---- */
  const box = document.createElement("div");
  box.className = "lightbox";
  box.innerHTML = `<button class="lightbox-close" aria-label="Close">×</button><img alt="">`;
  document.body.appendChild(box);
  const boxImg = box.querySelector("img");
  const close = () => box.classList.remove("open");

  root.querySelectorAll(".project-images img").forEach((img) => {
    img.addEventListener("click", () => {
      boxImg.src = img.src;
      box.classList.add("open");
    });
  });
  box.addEventListener("click", (e) => {
    if (e.target === box || e.target.classList.contains("lightbox-close")) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
})();
