// Generates monochrome SVG placeholders so the layout reads as complete
// before real photography/drawings are dropped in.
// Each gallery placeholder is labelled with the image it should hold, so it
// doubles as a checklist. Run: node scripts/gen-placeholders.js
const fs = require("fs");
const path = require("path");

const OUT = path.join(__dirname, "..", "assets", "img");
fs.mkdirSync(OUT, { recursive: true });

// Drafting-paper placeholder: soft grey field, hairline frame, faint
// crosshair, small label. Tones stay within the monochrome system.
function placeholder({ w, h, label, tone = "#ededed", ink = "#9a9a9a" }) {
  const m = Math.round(Math.min(w, h) * 0.06);
  const fs2 = Math.max(13, Math.round(Math.min(w, h) * 0.045));
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${label}">
  <rect width="${w}" height="${h}" fill="${tone}"/>
  <rect x="${m}.5" y="${m}.5" width="${w - m * 2 - 1}" height="${h - m * 2 - 1}" fill="none" stroke="${ink}" stroke-width="1" opacity="0.5"/>
  <line x1="${w / 2}" y1="${m}" x2="${w / 2}" y2="${h - m}" stroke="${ink}" stroke-width="1" opacity="0.16"/>
  <line x1="${m}" y1="${h / 2}" x2="${w - m}" y2="${h / 2}" stroke="${ink}" stroke-width="1" opacity="0.16"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
    font-family="Helvetica, Arial, sans-serif" font-size="${fs2}"
    letter-spacing="1.5" fill="${ink}">${label}</text>
</svg>`;
}

// One entry per project: cover label + the captions of the images it holds.
const projects = [
  { slug: "mise-en-space", cover: "mise en space", shots: [
    "methodology — concept drawing", "macro scale — renders",
    "meso diagram — temporal sequence", "micro — hydrogel dinnerset",
    "micro — SCOBY leather coaster", "micro — bioplastic glass" ] },
  { slug: "soft-parasite", cover: "soft parasite", shots: [
    "site plan", "concept & circulation scheme",
    "interior render — shoji walls", "exploded axonometric" ] },
  { slug: "resonant-growth", cover: "resonant growth", shots: [
    "concept image", "model — alleyway 1/50", "section — alleyway",
    "panel — before & after colonisation", "Vooruit installation" ] },
  { slug: "raw-25", cover: "raw'25", shots: [
    "site plan — flood management", "zone I — promenade",
    "zone II — urban market", "zone III — agriculture" ] },
  { slug: "hexenhaus-2", cover: "hexenhaus 2.0", shots: [
    "section — Zevergem", "site study — model 1/100",
    "detail — roof window", "fragment study — model 1/33" ] },
  { slug: "reculture", cover: "reculture", shots: [
    "site plan — axonometry", "interventions" ] },
  { slug: "through-the-wall", cover: "through the wall", shots: [
    "site plan — recycle/reuse axonometry", "floorplan — workshops",
    "section AA'", "model — workshop space 1/33" ] },
];

const files = [];
projects.forEach((p) => {
  files.push([`${p.slug}-cover.svg`, placeholder({ w: 1600, h: 1100, label: p.cover })]);
  p.shots.forEach((caption, i) => {
    files.push([`${p.slug}-${i + 1}.svg`, placeholder({
      w: 1600, h: 1067, label: caption, tone: i % 2 ? "#e7e7e7" : "#f0f0f0",
    })]);
  });
});
files.push(["portrait.svg", placeholder({ w: 1000, h: 1250, label: "PORTRAIT", tone: "#e9e9e9" })]);
files.push(["hero.svg", placeholder({ w: 2400, h: 1350, label: "HERO IMAGE", tone: "#eaeaea" })]);

// Clear out stale placeholders from a previous run, then write fresh ones.
for (const f of fs.readdirSync(OUT)) {
  if (f.endsWith(".svg")) fs.unlinkSync(path.join(OUT, f));
}
for (const [name, svg] of files) fs.writeFileSync(path.join(OUT, name), svg);
console.log(`Wrote ${files.length} placeholder images to assets/img/`);
