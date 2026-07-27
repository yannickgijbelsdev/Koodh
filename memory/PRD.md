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
- **2026-06 (this session):** Replaced Pexels images in About page beeldband with 4 local Koodh mockups (kootah-unifi/microsoft365/signature/code.png), added English privacy disclaimer explaining images are fictional mockups and "Kootah" is an informal internal nickname for Koodh. Also swapped the "How we work" image to a Koodh mockup. Verified via screenshot.

## Backlog / notes
- Orphaned SMTP config in backend `.env`/`server.py` (harmless, contact form removed).
