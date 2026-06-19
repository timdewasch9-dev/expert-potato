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

  const pageUrl = `https://timdewasch9-dev.github.io/expert-potato/project.html?p=${encodeURIComponent(project.slug)}`;
  const summary = (project.description && project.description[0]) || project.title;
  const ogImage = `https://timdewasch9-dev.github.io/expert-potato/${project.cover}`;
  const setMeta = (selector, attr, content) => {
    let el = document.querySelector(selector);
    if (!el) {
      const [, name, value] = selector.match(/meta\[(\w+)="([^"]+)"\]/);
      el = document.createElement("meta");
      el.setAttribute(name, value);
      document.head.appendChild(el);
    }
    el.setAttribute(attr, content);
  };
  setMeta('meta[name="description"]', "content", summary);
  setMeta('meta[property="og:title"]', "content", document.title);
  setMeta('meta[property="og:description"]', "content", summary);
  setMeta('meta[property="og:url"]', "content", pageUrl);
  setMeta('meta[property="og:image"]', "content", ogImage);
  setMeta('meta[name="twitter:title"]', "content", document.title);
  setMeta('meta[name="twitter:description"]', "content", summary);
  setMeta('meta[name="twitter:image"]', "content", ogImage);
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }
  canonical.href = pageUrl;

  const facts = project.facts || {};
  const factsHtml = Object.keys(facts).length
    ? `<dl class="project-facts reveal">${Object.entries(facts)
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
      <figure class="project-image reveal${img.main ? " is-main" : ""}${img.fit === "contain" ? " is-contain" : ""}">
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

    <nav class="project-nav">
      <a class="prev" href="project.html?p=${encodeURIComponent(prev.slug)}">
        <img class="nav-bg" src="${prev.cover}" alt="">
        <span class="nav-label">Previous</span>
        <span class="nav-title">${prev.title}</span>
      </a>
      <a class="next" href="project.html?p=${encodeURIComponent(next.slug)}">
        <img class="nav-bg" src="${next.cover}" alt="">
        <span class="nav-label">Next</span>
        <span class="nav-title">${next.title}</span>
      </a>
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
