---
name: Navbar links and new pages
overview: "Add center nav links (Blog, Paper, Gallery) to the navbar and create two new routes: /paper for papers/articles and /gallery for a photo grid with optional minimalist animations."
todos:
  - id: navbar-center-links
    content: Add center nav links (Blog, Paper, Gallery) to Navbar between logo and social icons
    status: completed
  - id: paper-page
    content: Create /paper page with list of papers and self-written articles (Navbar + max-w-3xl layout)
    status: completed
  - id: gallery-page
    content: Create /gallery page with responsive photo grid and minimalist scroll/hover animations
    status: completed
isProject: false
---

# Navbar center links + Paper and Gallery pages

## Current state

- **[Navbar](src/app/Navbar.tsx)**: Logo "Hossein" on the left, social icons (GitHub, LinkedIn, YouTube) on the right. No center section.
- **Routes**: `/` (home), `/blog` and `/blog/[slug]` (existing). No `/paper` or `/gallery` yet.
- **Patterns**: Blog reads from `content/blog` with gray-matter; pages use `Navbar`, `max-w-3xl`/`max-w-5xl`, motion from framer-motion, Tailwind.

## 1. Navbar: center links

**File:** [src/app/Navbar.tsx](src/app/Navbar.tsx)

- Add an internal nav list between the logo and the social list so the layout is: **Logo | Blog, Paper, Gallery | Social**.
- Use a three-column flex layout: left (logo), center (links), right (social). Center can use `absolute left-1/2 -translate-x-1/2` so the three links are truly centered, or a flex grow/shrink approach so they sit in the middle on all breakpoints.
- Links:
  - **Blog** → `/blog`
  - **Paper** → `/paper`
  - **Gallery** → `/paper`
- Style links to match the site (e.g. same hover/opacity as the logo or subtle underline on hover). Reuse existing `Link` from `next/link` for in-app routes.
- Keep social array and right-side icons unchanged.

## 2. Paper page (new)

**Route:** `/paper`  
**Files to add:**

- `src/app/paper/page.tsx` — main page component.

**Content and data:**

- Static page that lists “papers and self-written articles.” No file upload UI in this phase; you can add papers by editing a list in code or (later) by adding something like `content/paper/*.md` and reading with gray-matter, similar to blog.
- Start with a simple in-code array of items (e.g. `title`, `date`, `summary`, `url` or `slug`) and render a list. Each item can link to an external PDF/URL or a future `/paper/[slug]` page.
- Layout: include `Navbar`, then a main section with a title (e.g. “Paper”) and the list. Use the same width convention as blog/experience (e.g. `mx-auto max-w-3xl py-24`) and optional `motion` for consistency with [src/app/page.tsx](src/app/page.tsx).

**Optional later:** Move data to `content/paper/*.md` and add `paper/[slug]/page.tsx` for full articles; the plan does not depend on it.

## 3. Gallery page (new)

**Route:** `/gallery`  
**Files to add:**

- `src/app/gallery/page.tsx` — gallery grid and optional animations.

**Content and data:**

- Static list of photos (e.g. `src`, `alt`, optional `caption`). Images can live under `public/gallery/` and be referenced by path (e.g. `/gallery/photo1.jpg`).
- **Layout:** Responsive grid. You mentioned “mx4 or mx3” — interpret as a grid with 3–4 columns on large screens (e.g. `grid-cols-2 sm:grid-cols-3 lg:grid-cols-4`) and consistent gap. Constrain width with something like `max-w-5xl` or `max-w-6xl` and `mx-auto` so it doesn’t stretch too wide.
- **Animation:** Minimalist option — e.g. framer-motion `whileInView` for slight fade-in and/or scale on scroll, and a light hover scale or opacity on each tile. Keep it subtle so it stays “cool but minimalist.”
- Include `Navbar` and a short heading (e.g. “Gallery”) above the grid. Use Next.js `Image` for optimization and consistent aspect ratio (e.g. object-cover in a fixed aspect box) so the grid looks even.

## 4. File and route summary

| Action   | Path                                            |
| -------- | ----------------------------------------------- |
| Edit     | `src/app/Navbar.tsx`                            |
| Create   | `src/app/paper/page.tsx`                        |
| Create   | `src/app/gallery/page.tsx`                      |
| Optional | `public/gallery/` (add images as you have them) |

## 5. Order of implementation

1. Update **Navbar** with the center links (Blog, Paper, Gallery) so all three routes are reachable.
2. Add **Paper** page with a simple list (data in code) and shared layout/Navbar.
3. Add **Gallery** page with a responsive grid, placeholder or real image paths, and optional minimalist scroll/hover animations.

No changes to layout, blog, or home page are required beyond ensuring the new pages use the same `Navbar` and width/style conventions for consistency.
