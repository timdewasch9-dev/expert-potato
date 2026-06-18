// Generates monochrome SVG placeholders so the layout reads as complete
// before real photography is dropped in. Run: node scripts/gen-placeholders.js
const fs = require("fs");
const path = require("path");

const OUT = path.join(__dirname, "..", "assets", "img");
fs.mkdirSync(OUT, { recursive: true });

// A restrained, drafting-paper placeholder: soft grey field, hairline frame,
// faint crosshair, and a small label. Tones stay within the monochrome system.
function placeholder({ w, h, label, tone = "#ededed", ink = "#9a9a9a" }) {
  const m = Math.round(Math.min(w, h) * 0.06); // inner margin
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${label}">
  <rect width="${w}" height="${h}" fill="${tone}"/>
  <rect x="${m}.5" y="${m}.5" width="${w - m * 2 - 1}" height="${h - m * 2 - 1}" fill="none" stroke="${ink}" stroke-width="1" opacity="0.5"/>
  <line x1="${w / 2}" y1="${m}" x2="${w / 2}" y2="${h - m}" stroke="${ink}" stroke-width="1" opacity="0.18"/>
  <line x1="${m}" y1="${h / 2}" x2="${w - m}" y2="${h / 2}" stroke="${ink}" stroke-width="1" opacity="0.18"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
    font-family="Helvetica, Arial, sans-serif" font-size="${Math.round(Math.min(w, h) * 0.05)}"
    letter-spacing="2" fill="${ink}">${label}</text>
</svg>`;
}

const files = [];

// Project covers (portrait-ish feed images) + gallery shots, 4 projects
for (let i = 1; i <= 4; i++) {
  files.push([`project-${i}-cover.svg`, placeholder({ w: 1600, h: 1100, label: `PROJECT ${String(i).padStart(2, "0")}` })]);
  for (let g = 1; g <= 3; g++) {
    files.push([`project-${i}-${g}.svg`, placeholder({ w: 1600, h: 1067, label: `0${i} · IMAGE ${g}`, tone: g % 2 ? "#e7e7e7" : "#f0f0f0" })]);
  }
}

files.push(["portrait.svg", placeholder({ w: 1000, h: 1250, label: "PORTRAIT", tone: "#e9e9e9" })]);
files.push(["hero.svg", placeholder({ w: 2400, h: 1350, label: "HERO IMAGE", tone: "#eaeaea" })]);

for (const [name, svg] of files) {
  fs.writeFileSync(path.join(OUT, name), svg);
}
console.log(`Wrote ${files.length} placeholder images to assets/img/`);
