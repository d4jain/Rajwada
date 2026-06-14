# RAJWADA — The Royal Kitchens of India

A luxury Indian fine dining restaurant website built as a cinematic digital palace experience,
inspired by Jamavar at The Leela Palace Bengaluru.

## Tech Stack

- React 18 + Vite
- Tailwind CSS (custom luxury token system — emerald, burgundy, antique gold, ivory, walnut)
- Framer Motion (slow, regal scroll reveals and cinematic hero entrance)
- Lucide React (icons)

## Getting Started

```bash
npm install
npm run dev
```

Then open the printed local URL (typically `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  components/
    Navbar.jsx           — Fixed luxury navigation with mobile menu
    Hero.jsx             — Full-screen cinematic hero with curtain-reveal entrance
    Heritage.jsx         — Editorial heritage storytelling section
    SignatureCollection.jsx — Six signature dishes with regional stories
    CulinaryRegions.jsx  — Interactive tabbed showcase of 6 Indian culinary regions
    TastingExperience.jsx — Chef's tasting menus (Maharaja, Vegetarian, Seasonal)
    DigitalMenu.jsx      — Full HTML menu with search + category filtering
    Gallery.jsx          — Masonry gallery of opulence
    Testimonials.jsx     — Guest review carousel + awards strip
    PrivateDining.jsx    — Private dining occasions + enquiry form
    Reservation.jsx      — Full reservation form with date/time/guest selection
    Location.jsx         — Map embed + address, hours, valet, contact
    Footer.jsx           — Luxury footer with links, socials, policies
    StickyReserve.jsx    — Floating reserve CTA (desktop)
    Motifs.jsx           — Shared SVG motifs: emblem, ornamental divider, jali band
  data/
    signatureDishes.js   — 6 signature dish entries
    regions.js           — 6 culinary region entries
    menuData.js          — Full 40-item menu across 8 categories
    contentData.js        — Testimonials, awards, gallery images, tasting menus
  lib/
    motion.js            — Shared Framer Motion variants (fadeUp, fadeIn, etc.)
  index.css              — Global styles, design tokens, jali pattern, custom utilities
  App.jsx                — Assembles all sections
  main.jsx               — React entry point

tailwind.config.js        — Custom color palette, fonts, easing curve
index.html                 — Font imports (Playfair Display, Cormorant Garamond, Jost)
```

## Design Notes

- **Palette**: Deep Emerald (#0B1F17), Royal Burgundy (#5C0A1E), Antique Gold (#C9A04D),
  Champagne Gold (#F0D49C), Ivory (#F5EFE2), Rich Walnut (#3D2817).
- **Typography**: Playfair Display for display headings, Cormorant Garamond for serif body
  accents/quotes, Jost for UI and body sans-serif.
- **Signature motif**: A custom palace-arch emblem (`RajwadaEmblem`) used in the nav, hero,
  and footer, plus a repeating jali (lattice) background pattern as a section texture.
- **Motion**: All scroll reveals use a shared "regal" easing curve
  (`cubic-bezier(0.22, 1, 0.36, 1)`) with slow durations (0.8s–2.6s) — no bouncy or
  startup-style motion anywhere.

## Customisation

- Replace Unsplash image URLs in `src/data/*.js` and component files with your own
  professional photography for production use.
- Update contact details, address and map embed in `Location.jsx` and `Footer.jsx`.
- Reservation and enquiry forms currently simulate submission client-side — connect to your
  reservation system / CRM / email service as needed.

# Rajwada
Resturant Dummy Website
