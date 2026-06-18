/* ============================================================================
 *  YOUR CONTENT LIVES HERE: edit this file to manage the whole site.
 * ----------------------------------------------------------------------------
 *  This is the ONLY file you need to touch to add, remove, or edit projects.
 *  The homepage grid and every project page are generated from the data below.
 *
 *  HOW TO ADD A PROJECT:
 *    1. Copy one { ... } block inside PROJECTS, paste it, and edit the fields.
 *    2. Give it a unique "slug" (lowercase, dashes, no spaces).
 *    3. Put your images in  assets/img/  and reference them by filename.
 *
 *  Images can be .jpg / .png / .webp, just match the filename.
 *  (The grey labelled placeholders tell you which drawing/render goes where.)
 * ========================================================================== */

window.SITE = {
  name: "Tim De Wasch",
  role: "Architect",
  tagline: "Architecture across scales",
  email: "timdewasch9@gmail.com",
  phone: "+32 495 17 28 33",
  location: "Ghent · Bruges, Belgium",
  social: [
    { label: "Instagram", handle: "@timnesty", url: "https://instagram.com/timnesty" },
  ],
  // Optional CV / résumé link (set to "" to hide the button)
  cv: "",

  // ---- About page -----------------------------------------------------------
  about: {
    intro: [
      "I'm Tim De Wasch, an architect based between Ghent and Bruges, Belgium. I hold a professional bachelor in applied architecture from Howest, Bruges, and a master of architecture from KU Leuven, Ghent, with an Erasmus exchange at ISCTE in Lisbon.",
      "My work moves from concept to detail and across scales, from sensory, material-driven research to urban landscape and public space. I'm drawn to projects that work with what already exists: reused materials, living surfaces, and architecture that grows and changes over time.",
    ],
    meta: "Born 23.11.1999, Bruges · Driver's licence B",
    education: [
      { years: "2024–26", place: "KU Leuven, Ghent", detail: "Master of Architecture · Erasmus at ISCTE, Lisbon" },
      { years: "2022–24", place: "KU Leuven, Ghent", detail: "Bridging programme to bachelor of architecture" },
      { years: "2019–22", place: "Howest, Bruges", detail: "Bachelor of Applied Architecture · Erasmus at Hogeschool Rotterdam" },
      { years: "2012–18", place: "OLVA, Bruges", detail: "Secondary: economics & modern languages" },
    ],
    experience: [
      { years: "2026", place: "Compagnie Costume, Bruges", detail: "Student work, from design to build permit" },
      { years: "2025", place: "EAR, Reus", detail: "International workshop: urban planning for flooding & drought" },
      { years: "2025", place: "ISCTE, Lisbon", detail: "Erasmus exchange" },
      { years: "2022", place: "Kobalt, Bruges", detail: "Internship: technical drawings & site supervision" },
      { years: "2021", place: "Hogeschool Rotterdam", detail: "Erasmus, minor 'Ontwerpen'" },
    ],
    skills: ["ArchiCAD", "AutoCAD", "Rhinoceros 3D", "Blender", "Lumion", "Photoshop", "Illustrator", "InDesign", "Premiere Pro"],
    other: ["3D printing", "Model making", "Technical drawing", "Video making"],
    languages: [
      { lang: "Dutch", level: "Native" },
      { lang: "English", level: "Advanced" },
      { lang: "French", level: "Basic" },
    ],
  },
};

window.PROJECTS = [
  {
    slug: "mise-en-space",
    title: "mise en space",
    location: "Ghent, BE",
    year: "2026",
    category: "Master thesis",
    cover: "assets/img/mise-en-space-cover.jpg",
    description: [
      "A single enclosed dining chamber becomes a design laboratory. The question is how deliberately architecture can shape the way we perceive, not as a backdrop to experience, but as its active author.",
      "Mise en space unfolds across three scales. At the macro scale, spatial choreography begins before the meal: threshold compression, acoustic absorption, light sequencing, the atmosphere of materials. At the meso scale the body becomes the instrument: orientation, proximity and temporal perception shaping how space is felt from the inside. At the micro scale a designed family of objects (a hydrogel plate with salt crystallisation, a coffee-wax candle, a yerba-mate bioplastic vessel and a SCOBY-leather coaster) investigates how texture, aroma and fermentation cross the boundary of the body directly.",
      "The findings are brought together into a practical guidebook for sensory architecture: a set of transferable design principles that treat sensory richness not as decoration, but as something that can be designed for, deliberately and from the beginning.",
    ],
    facts: {
      Programme: "4th semester master",
      University: "KU Leuven, St. Lucas Ghent",
      Supervisor: "prof. Rachel Armstrong",
      Work: "Individual",
    },
    images: [
      { src: "assets/img/mise-en-space-1.jpg", title: "Threshold sequence study", main: true },
      { src: "assets/img/mise-en-space-2.jpg", title: "Body orientation diagram" },
      { src: "assets/img/mise-en-space-3.jpg", title: "Material atmosphere study" },
      { src: "assets/img/mise-en-space-4.jpg", title: "Object family detail" },
      { src: "assets/img/mise-en-space-5.jpg", title: "Sensory object study" },
      { src: "assets/img/mise-en-space-6.jpg", title: "Spatial section" },
      { src: "assets/img/mise-en-space-7.jpg", title: "Final render" },
    ],
  },
  {
    slug: "soft-parasite",
    title: "soft parasite",
    location: "Arantzazu, Basque Country, ES",
    year: "2025",
    category: "Artists' residence",
    cover: "assets/img/soft-parasite-cover.jpg",
    description: [
      "At the Santuario de Nuestra Señora de Arantzazu, an existing underground concrete bunker becomes an artists' residence. Rather than erasing what is already there, soft parasite attaches itself lightly and reversibly to the bones of the existing structure, something that grows in the shadow of rock.",
      "A wooden column matrix gives rhythm to the plan without closing it off, allowing spaces to shift between day and night, between solitude and shared life. Box-in-box configurations let living and working overlap and separate again. Shoji-inspired translucent partitions filter light without cutting it, dividing without isolating.",
      "The contrast between delicate timber and raw concrete is the project's quiet tension: fragility pressed against permanence. Inspired by Aldo van Eyck and SANAA.",
    ],
    facts: {
      Programme: "2nd semester master · Erasmus",
      University: "ISCTE, Lisbon",
      Supervisor: "prof. Alexandra Paio · prof. Pedro Luz Pinto",
      Work: "With Renee Quataert",
    },
    images: [
      { src: "assets/img/soft-parasite-1.jpg", title: "Existing bunker structure", main: true },
      { src: "assets/img/soft-parasite-2.jpg", title: "Wooden column matrix" },
      { src: "assets/img/soft-parasite-3.jpg", title: "Box-in-box configuration" },
      { src: "assets/img/soft-parasite-4.jpg", title: "Soft parasite poster" },
      { src: "assets/img/soft-parasite-5.jpg", title: "Plan study" },
      { src: "assets/img/soft-parasite-6.jpg", title: "Interior render" },
      { src: "assets/img/soft-parasite-7.jpg", title: "Process sketch" },
    ],
  },
  {
    slug: "resonant-growth",
    title: "resonant growth",
    location: "Vooruit, Ghent, BE",
    year: "2025",
    category: "Acoustic intervention",
    cover: "assets/img/resonant-growth-cover.jpg",
    description: [
      "In a narrow alleyway beside the Vooruit in Ghent, noise is constant. Rather than blocking it, resonant growth meets it slowly, materially, from the ground up.",
      "A layered acoustic panel of 3D-printed clay, porous hempcrete and a plywood backing lines the passage. The textured clay surface scatters sound, the hempcrete absorbs it, and the wooden backing holds everything together and returns a controlled reflection. The result is not silence but a gradual softening, a shift in atmosphere as you move through.",
      "Beyond performance, the panel is designed to change. The clay surface invites moss and microbial growth, allowing the installation to evolve over time into something closer to a living wall than a technical object.",
    ],
    facts: {
      Programme: "3rd semester master",
      University: "KU Leuven, St. Lucas Ghent",
      Supervisor: "prof. Rachel Armstrong",
      Work: "Individual",
    },
    images: [
      { src: "assets/img/resonant-growth-1.jpg", title: "Site condition, Vooruit alley", main: true },
      { src: "assets/img/resonant-growth-2.jpg", title: "Panel detail" },
      { src: "assets/img/resonant-growth-3.jpg", title: "Material layering study" },
      { src: "assets/img/resonant-growth-4.jpg", title: "Clay print process" },
      { src: "assets/img/resonant-growth-5.jpg", title: "Acoustic diagram" },
      { src: "assets/img/resonant-growth-6.jpg", title: "Installed panel render" },
      { src: "assets/img/resonant-growth-7.jpg", title: "Final render" },
      { src: "assets/img/resonant-growth-8.jpg", title: "Supersalon render" },
    ],
  },
  {
    slug: "raw-25",
    title: "raw'25",
    location: "Reus, Tarragona, ES",
    year: "2025",
    category: "Urban / flood landscape",
    cover: "assets/img/raw-25-cover.jpg",
    description: [
      "Along the Riera de l'Abeurada on the eastern edge of Reus, a watercourse that is almost entirely dry cuts through a landscape that has lost coherence. Residential fabric, industrial zones and degraded open land accumulate at the city's edge without connecting to each other or to what lies beyond.",
      "Rather than channelling water away, the project embraces it and slows it down, distributing its presence across four zones that stitch the city back to its landscape. Zone I recovers the stream as a slow river; Zone II turns a flood-prone residential edge into a floodable neighbourhood of promenade and wetland; Zone III reimagines the Tecnoparc as a productive landscape of water basins, greenhouses and irrigated fields; Zone IV establishes a sanatorium park beside the Hospital de Sant Joan.",
      "Developed during the RAW International Workshop in Reus with a mixed team from EAR, ENSA Normandie, KU Leuven and DAD UniGE.",
    ],
    facts: {
      Programme: "Summer international workshop",
      University: "ETSA Reus",
      Supervisor: "prof. Arturo Frediani · prof. Livia De Bethune · prof. Jennifer Didelon",
      Work: "Group of six",
    },
    images: [
      { src: "assets/img/raw-25-1.jpg", title: "Zone I, slow river", main: true },
      { src: "assets/img/raw-25-2.jpg", title: "Zone II, floodable neighbourhood" },
      { src: "assets/img/raw-25-3.jpg", title: "Site diagram" },
      { src: "assets/img/raw-25-4.jpg", title: "Workshop sketch" },
    ],
  },
  {
    slug: "hexenhaus-2",
    title: "hexenhaus 2.0",
    location: "Zevergem, Ghent, BE",
    year: "2023",
    category: "House",
    cover: "assets/img/hexenhaus-2-cover.jpg",
    description: [
      "On the edge of Zevergem, adjacent to a highway, hexenhaus 2.0 begins with stone and ends with light. A massive natural-stone wall runs along the northern boundary, absorbing noise and anchoring the building to the ground. From there the structure gradually opens: timber takes over, ceilings rise, and the southern facade unfolds toward the landscape.",
      "The transition from enclosure to openness is the project's central movement. A raised walkway runs along a central void, connecting levels while keeping the interior visually continuous. Geometric cuts in the bedroom walls (triangles and half-moons) let light and sightlines travel freely through the house.",
      "Reinterpreting the tectonic playfulness of Peter and Alison Smithson's Hexenhaus within a contemporary rural setting.",
    ],
    facts: {
      Programme: "4th semester bachelor",
      University: "KU Leuven, St. Lucas Ghent",
      Supervisor: "prof. Sarah Poot · prof. Arian Schelstraete",
      Work: "Individual",
    },
    images: [
      { src: "assets/img/hexenhaus-2-1.jpg", title: "Model photograph", main: true },
    ],
  },
  {
    slug: "reculture",
    title: "reculture",
    location: "Marvila, Lisbon, PT",
    year: "2025",
    category: "Cultural public space",
    cover: "assets/img/reculture-cover.jpg",
    description: [
      "In the Marvila district of Lisbon, a disjointed stretch of public space runs from the Braço da Prata train station into a neighbourhood where galleries, theatres and community spaces exist side by side without really connecting. Each serves its own audience; nothing holds them together.",
      "Reculture proposes a cultural axis that does. A series of modular interventions lines the route: a gallery wall of reused brick, an amphitheatre that shifts from daytime gathering space to evening performance venue, a circular conversation bench, a rainwater-collection installation and a playground-like composition drawn from Aldo van Eyck. Each piece works on its own; together they make a corridor that changes with the day and the season.",
      "Reclaimed bricks, local planting and a rainwater irrigation system run through the material logic of the project. The abandoned station building at the entrance is repurposed rather than replaced. Culture here is not monument but infrastructure, something woven quietly into the everyday.",
    ],
    facts: {
      Programme: "2nd semester master · Erasmus",
      University: "ISCTE, Lisbon",
      Supervisor: "prof. Alexandra Paio · prof. Pedro Luz Pinto",
      Work: "With Renee Quataert",
    },
    images: [
      { src: "assets/img/reculture-1.jpg", title: "Cultural axis, site view", main: true },
      { src: "assets/img/reculture-2.jpg", title: "Material study" },
    ],
  },
  {
    slug: "through-the-wall",
    title: "through the wall",
    location: "Nieuwland, Ghent, BE",
    year: "2024",
    category: "Bachelor thesis",
    cover: "assets/img/through-the-wall-cover.jpg",
    description: [
      "Nieuwland, in Ghent, has green space but not enough of it, and shared meeting places but not in the right spots. The communities living there (local residents, multicultural families and soon a new generation of technical-school students) pass each other more than they meet.",
      "Through the wall draws a new axis through the site, physically opening up the neighbourhood and guiding movement through it. Where the axis lands, a brick tower rises from reclaimed material found on site, becoming a landmark that is also a meeting point. Around it four zones take shape: quiet green landscape, active open space, a commercial strip and a workshop zone. The focus falls on the workshops, where students and residents can learn, make, exchange and sell together.",
      "A shared outdoor space called De Koer bridges the productive and the natural, holding temporary constructions, reused materials and a neighbourhood garden in loose, generous relation.",
    ],
    facts: {
      Programme: "6th semester bachelor",
      University: "KU Leuven, St. Lucas Ghent",
      Supervisor: "prof. Isabel Dedeurwaerdere · prof. Lieven Dejaeghere",
      Work: "With Sanja Cooreman",
    },
    images: [
      { src: "assets/img/through-the-wall-1.jpg", title: "Brick tower, site photo", main: true },
      { src: "assets/img/through-the-wall-2.jpg", title: "Workshop zone" },
      { src: "assets/img/through-the-wall-3.jpg", title: "De Koer, shared outdoor space" },
      { src: "assets/img/through-the-wall-4.jpg", title: "Urban diagram" },
    ],
  },
];
