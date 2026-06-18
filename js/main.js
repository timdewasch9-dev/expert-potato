/* Shared behaviour: header rendering, mobile nav, scroll state, reveal-on-scroll.
   Loaded on every page after data.js. */
(function () {
  const SITE = window.SITE || {};
  const PAGE = document.body.dataset.page || "";

  /* ---- inject header ---- */
  const header = document.querySelector("[data-header]");
  if (header) {
    const links = [
      { href: "index.html", label: "Work", key: "work" },
      { href: "about.html", label: "About", key: "about" },
      { href: "contact.html", label: "Contact", key: "contact" },
    ];
    header.innerHTML = `
      <a href="index.html" class="logo">${SITE.name || "Portfolio"}</a>
      <button class="nav-toggle" aria-label="Menu" aria-expanded="false">
        <span></span><span></span>
      </button>
      <nav class="site-nav">
        ${links
          .map(
            (l) =>
              `<a href="${l.href}"${l.key === PAGE ? ' aria-current="page"' : ""}>${l.label}</a>`
          )
          .join("")}
      </nav>`;

    const toggle = header.querySelector(".nav-toggle");
    toggle.addEventListener("click", () => {
      const open = header.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  /* ---- inject footer ---- */
  const footer = document.querySelector("[data-footer]");
  if (footer) {
    const social = (SITE.social || [])
      .map((s) => `<a href="${s.url}" target="_blank" rel="noopener">${s.label}</a>`)
      .join("");
    footer.innerHTML = `
      <span>© ${new Date().getFullYear()} ${SITE.name || ""}. All rights reserved.</span>
      <span class="foot-links">${social}<a href="contact.html">Contact</a></span>`;
  }

  /* ---- header solidify on scroll (only meaningful where there is a hero) ---- */
  const head = document.querySelector(".site-header");
  if (head) {
    const onScroll = () => head.classList.toggle("scrolled", window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---- reveal on scroll ---- */
  const io =
    "IntersectionObserver" in window
      ? new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              if (e.isIntersecting) {
                e.target.classList.add("in");
                io.unobserve(e.target);
              }
            });
          },
          { threshold: 0.12 }
        )
      : null;
  window.observeReveals = function () {
    document.querySelectorAll(".reveal:not(.in)").forEach((el) => {
      if (io) io.observe(el);
      else el.classList.add("in");
    });
  };
  window.observeReveals();
})();
