# AGENTS.md

## Project Overview

Peturn business website — a production-ready, responsive single-page Next.js App Router site for Business Intelligence and Analytics consulting services. Includes interactive dashboard demos, accessible navigation, contact form with Resend email delivery, and SEO metadata.

## Key Commands

```bash
npm run lint        # ESLint (Next.js config)
npm run typecheck   # TypeScript strict mode check (tsc --noEmit)
npm run build       # Production build
npm run dev         # Local development server
```

**Validation order:** `lint` → `typecheck` → `build`

## Architecture

- **Framework:** Next.js 16 App Router with React 19 and strict TypeScript
- **Styling:** CSS variables and custom CSS in `app/globals.css` (no Tailwind, no CSS modules)
- **Forms:** React Hook Form + Zod validation (`lib/validation.ts`)
- **Email:** Resend server-side delivery (`lib/email.ts`) — never expose API key with `NEXT_PUBLIC_`
- **SEO:** JSON-LD structured data (`lib/seo.ts`), metadata in `app/layout.tsx`
- **Charts:** Lightweight inline SVG compositions (no charting libraries)

## Directory Structure

```
app/              # App Router pages (about, contact, pricing, services, etc.)
components/       # React components (Header, Footer, ContactForm, Dashboard, etc.)
components/ui/    # Reusable UI primitives (Badge, Button, Card, Container, Logo, Section)
data/             # Content configuration files
lib/              # Utilities (email, seo, validation)
public/           # Static assets including brand logo at public/brand/peturn-logo.png
```

## Content Configuration

All business content is centralized in `data/site-content.ts`:
- `services` — service offerings and descriptions
- `pricing` — plan details and inclusions
- `faqs` — frequently asked questions
- Contact details re-exported from `data/brand-config.ts`
- Navigation links in `data/navigation.ts`

**When updating content:** Update both display and machine-readable phone values together.

## Environment Variables

Required for email functionality:
- `RESEND_API_KEY` — Resend API key (never prefix with `NEXT_PUBLIC_`)
- `CONTACT_TO_EMAIL` — recipient email (defaults to `hello@peturn.in`)
- `CONTACT_FROM_EMAIL` — sender address (must be on verified Resend domain)
- `NEXT_PUBLIC_SITE_URL` — site URL for SEO metadata

The API route returns 503 when email is not configured; it never reports false success.

## Brand Assets

- Logo: `public/brand/peturn-logo.png` — use without visual alteration
- Colors defined as CSS variables in `app/globals.css`
- Fonts: Anton (headings), Poppins (body) via next/font/google

## Deployment

Vercel deployment — import repository, add environment variables, deploy. Verify:
- `/robots.txt`, `/sitemap.xml`
- Contact form submission and email receipt
- WhatsApp actions

## Key Conventions

- Strict TypeScript (`strict: true` in tsconfig)
- Path alias: `@/*` maps to project root
- React 19 with server components by default
- Client components explicitly marked with `'use client'`
- Accessible controls for navigation and FAQ accordions
- Responsive design with mobile-first approach
