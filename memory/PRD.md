# Koodh Website — PRD

## Problem statement
Pixel-perfect clone of a branding website, fully rebranded to "Koodh". Dynamic portfolio content fetched via a FastAPI backend proxy to an external Koodh API (`clr.koodh.com`). Custom About, Work, Legal and Contact pages, full SEO/GEO, local asset hosting, and Koodh-specific business data (FAQ, team, tools). User language: **Dutch (nl)** — always respond in Dutch.

## Key constraints
- Direct `mailto:` links only — NO contact form.
- No payment terms anywhere except inside the FAQ.
- Do NOT mention "Custom Software Development" / complex software for businesses.
- Typography: uppercase bold + lowercase `font-script`.

## Architecture
- Frontend: React + Tailwind (`/app/frontend/src/`), pages in `pages/`, components in `components/`, local assets in `assets/`.
- Backend: FastAPI (`/app/backend/server.py`) with proxy endpoints `GET /api/work` and `GET /api/work/{id}` (httpx). MongoDB `status_checks` from template (unused for business logic).

## Implemented
- Full Koodh rebrand, hero carousel + work grid via API proxy.
- Custom About/Work/Legal/Contact pages, SEO/GEO, sitemap.xml, robots.txt.
- FAQ component, cookie consent (LocalStorage), scroll-reveal animations, koodh.com footer (KVK 42066318).
- Hero rotating title: circular loop with measured per-title stacking + bottom fade mask (no gap/overlap/hard clip).
- **2026-06 (this session):** Split the site into dedicated pages with a shared, consistent design system:
  - New shared components: PageHero, FeatureRow, CtaBand, MockupInfo (`/app/frontend/src/components/`).
  - New pages: `/meet-us` (MeetUs), `/website-development` (WebsiteDevelopment, incl. AI Integration), `/microsoft-365` (Microsoft365 + Xink signatures), `/it-consultancy` (ItConsultancy: Wi-Fi/PC/on-site). About.jsx rewritten as overview with service cards linking to the detail pages + team teaser.
  - Nav (`mock.js` navLinks) now lists all items separately: WORK, ABOUT, MEET US, WEBSITE DEVELOPMENT, MICROSOFT 365, IT CONSULTANCY, CONTACT. Header desktop nav uses `xl:flex` (mobile menu below xl, scrollable).
  - Routes added in App.js. Generated AI mockup image `kootah-ai.jpg`. Each Kootah mockup image used once. Team photos: Chiel = KOODH_CHIEL, Yannick = KOODH_YANNICK.
  - Verified by frontend testing agent (iteration_1.json): 28/29 checks pass, no app bugs.
- **2026-06 (English + local assets + FAQ page):**
  - Reviewed all pages for perfect English; fixed content that referenced a non-existent "contact form" (FAQ + Privacy) to reflect email-only contact.
  - Localized all remaining static external assets: client "Trusted by" logos (Thomas More, Radiogroep, Studio Wonderland, GRK) downloaded to `src/assets/clients/` and imported in mock.js. No static asset now loads from koodh.com — repo is self-contained for GitHub push/pull. (Work/WorkDetail images remain from the live Koodh API by design.)
  - New dedicated FAQ page `/faq` (Faq.jsx) reusing FaqSection (with `hideHeading` prop); added to nav (now 8 items) and App.js routes. Removed the inline FAQ section from About.

## Backlog / notes
- Orphaned SMTP config in backend `.env`/`server.py` (harmless, contact form removed).
- Footer has no service links yet (nav covers it); could add for SEO/discoverability.
