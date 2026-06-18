/* ============================================================================
 *  YOUR CONTENT LIVES HERE  —  edit this file to manage the whole site.
 * ----------------------------------------------------------------------------
 *  This is the ONLY file you need to touch to add, remove, or edit projects.
 *  The homepage grid and every project page are generated from the data below.
 *
 *  HOW TO ADD A PROJECT:
 *    1. Copy one { ... } block inside PROJECTS, paste it, and edit the fields.
 *    2. Give it a unique "slug" (lowercase, dashes, no spaces).
 *    3. Put your images in  assets/img/  and reference them by filename.
 *
 *  Images can be .jpg / .png / .webp / .svg — just match the filename.
 * ========================================================================== */

window.SITE = {
  name: "Jane Doe",            // shown in the logo / header
  role: "Architect",          // shown under the name
  tagline: "Architecture & spatial design",
  email: "hello@example.com",
  phone: "+1 (000) 000-0000",
  location: "City, Country",
  social: [
    { label: "Instagram", url: "https://instagram.com/" },
    { label: "LinkedIn", url: "https://linkedin.com/in/" },
  ],
  // About page — one string per paragraph
  about: [
    "This is placeholder bio text. Replace it with a short introduction: your background, where you studied, and the ideas that drive your work.",
    "Add a second paragraph for experience, notable projects, studios you have worked with, awards, or publications.",
  ],
  // Optional CV / résumé link (set to "" to hide the button)
  cv: "",
};

window.PROJECTS = [
  {
    slug: "riverside-pavilion",
    title: "Riverside Pavilion",
    location: "Oslo, Norway",
    year: "2025",
    category: "Cultural",
    cover: "assets/img/project-1-cover.svg",
    description: [
      "Placeholder description. Open with the brief and the site — what the project responds to and why.",
      "Second paragraph: materials, structure, and the spatial idea that ties it together.",
    ],
    facts: { Status: "Completed", Area: "1,200 m²", Role: "Lead Architect", Client: "—" },
    images: [
      "assets/img/project-1-1.svg",
      "assets/img/project-1-2.svg",
      "assets/img/project-1-3.svg",
    ],
  },
  {
    slug: "courtyard-house",
    title: "Courtyard House",
    location: "Lisbon, Portugal",
    year: "2024",
    category: "Residential",
    cover: "assets/img/project-2-cover.svg",
    description: [
      "Placeholder description for the second project.",
      "Replace with your own write-up.",
    ],
    facts: { Status: "Completed", Area: "320 m²", Role: "Project Architect", Client: "Private" },
    images: [
      "assets/img/project-2-1.svg",
      "assets/img/project-2-2.svg",
      "assets/img/project-2-3.svg",
    ],
  },
  {
    slug: "civic-library",
    title: "Civic Library",
    location: "Kyoto, Japan",
    year: "2023",
    category: "Public",
    cover: "assets/img/project-3-cover.svg",
    description: [
      "Placeholder description for the third project.",
      "Replace with your own write-up.",
    ],
    facts: { Status: "Competition", Area: "4,500 m²", Role: "Design Team", Client: "City of Kyoto" },
    images: [
      "assets/img/project-3-1.svg",
      "assets/img/project-3-2.svg",
      "assets/img/project-3-3.svg",
    ],
  },
  {
    slug: "hillside-studio",
    title: "Hillside Studio",
    location: "Mendoza, Argentina",
    year: "2022",
    category: "Residential",
    cover: "assets/img/project-4-cover.svg",
    description: [
      "Placeholder description for the fourth project.",
      "Replace with your own write-up.",
    ],
    facts: { Status: "Completed", Area: "180 m²", Role: "Architect", Client: "Private" },
    images: [
      "assets/img/project-4-1.svg",
      "assets/img/project-4-2.svg",
      "assets/img/project-4-3.svg",
    ],
  },
];
