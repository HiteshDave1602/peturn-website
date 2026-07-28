# Premium Redesign Plan

Planning-only document for a premium redesign of the existing Peturn website. This plan does not authorize implementation yet.

## Non-Negotiable Brand Guardrails

- Do not change the existing brand color variables `--navy`, `--blue`, `--royal`, or `--teal` in `app/globals.css`.
- Do not replace or remove the existing font direction: Anton, Poppins, and HK Grotesk.
- Do not introduce a new palette, new font stack, or new CSS variable naming system that overrides those brand decisions.
- All redesign work must use the current palette and typography more deliberately, not replace them.
- Do not invent testimonials, client logos, certifications, revenue figures, case-study results, or compliance claims.
- Keep `dhyanirayka20@gmail.com` as the contact email for now.
- Keep "Designed and Developed by Vrattiks" in the footer exactly as it is.
- Keep pricing plan names as Starter, Growth, and Enterprise.
- Keep the current top navigation intent: Industries and Process were intentionally moved onto the Home page and removed from top navigation.

## Repository Inspection Summary

- Framework: Next.js App Router with React 19 and TypeScript.
- Routes: `/`, `/about`, `/services`, `/why-us`, `/industries`, `/process`, `/pricing`, `/contact`, `/api/contact`, plus `app/robots.ts` and `app/sitemap.ts`.
- Primary pages:
  - `app/page.tsx`
  - `app/about/page.tsx`
  - `app/services/page.tsx`
  - `app/contact/page.tsx`
  - `app/why-us/page.tsx`
  - `app/industries/page.tsx`
  - `app/process/page.tsx`
  - `app/pricing/page.tsx`
- Component structure:
  - Global layout/navigation: `components/Header.tsx`, `components/MobileNav.tsx`, `components/Footer.tsx`, `components/ui/Logo.tsx`
  - Page sections: `components/PageSections.tsx`, `components/SectionHeading.tsx`, `components/ScrollReveal.tsx`
  - Interactive UI: `components/Dashboard.tsx`, `components/Interactive.tsx`, `components/AutoCarousel.tsx`
  - Form: `components/ContactForm.tsx`
  - SEO structured data: `components/JsonLd.tsx`
  - UI primitives: `components/ui/Button.tsx`, `components/ui/Card.tsx`, `components/ui/Container.tsx`, `components/ui/Section.tsx`, `components/ui/Badge.tsx`
- Styling system: global CSS in `app/globals.css` with custom CSS variables, component class names, media queries, scroll reveal styles, carousel styles, dashboard styles, form styles, and responsive layout rules. No Tailwind or CSS module system is currently used.
- Content/config:
  - `data/site-content.ts` exports services, pricing, FAQs, contact, social links, and navigation re-exports.
  - `data/brand-config.ts` contains brand and contact details.
  - `data/navigation.ts` contains the main nav items.
- SEO:
  - `lib/seo.ts` contains page metadata, keywords, Open Graph data, organization JSON-LD, page JSON-LD, breadcrumb JSON-LD, services JSON-LD, pricing JSON-LD, and FAQ JSON-LD.
  - `app/layout.tsx` sets global metadata, viewport, header, footer, WhatsApp chooser, and website JSON-LD.
- Contact/backend:
  - `components/ContactForm.tsx` uses `react-hook-form`, Zod validation, consent, honeypot, loading state, and `/api/contact`.
  - `app/api/contact/route.ts` validates requests and calls `lib/email.ts`.
  - `lib/validation.ts` owns the contact schema.
  - `lib/email.ts` handles Resend delivery.
- Dependencies:
  - Runtime: `next`, `react`, `react-dom`, `lucide-react`, `react-hook-form`, `zod`, `@hookform/resolvers`, `resend`.
  - Development: `typescript`, `eslint`, `eslint-config-next`, React/Node type packages.
- Assets:
  - Logo assets in root and `public/brand/`.
  - Hero/dashboard/industry/about images in `public/images/`.
  - Icon PNGs in `public/icons/`.
  - Brochure PDF and temporary extracted pages in root/`tmp/`.
- Current implementation note: some foundation primitives and premium styling overrides already exist, but `app/layout.tsx` currently imports Manrope, Inter, and Sora. Future implementation must correct this to preserve Anton, Poppins, and HK Grotesk rather than continuing that font direction.

## Phase 1: Foundation

Status: Complete.

Goal: refine the shared layout, spacing, header, footer, buttons, cards, and core section patterns without changing the existing palette variables or fonts.

Work items:

- Audit `app/globals.css` for conflicting redesign overrides and remove or revise any rules that replace the approved palette or font system.
- Restore or preserve Anton, Poppins, and HK Grotesk in `app/layout.tsx` and global typography rules.
- Keep `--navy`, `--blue`, `--royal`, and `--teal` values unchanged; use them consistently for hierarchy, CTAs, focus states, and accents.
- Normalize section spacing, container widths, page gutters, and responsive rhythm while keeping the existing class-based CSS approach.
- Refine `Header` and `MobileNav` for polished desktop/mobile navigation, active states, focus states, and stable sticky behavior.
- Refine `Footer` structure, contact presentation, link grouping, and mobile layout.
- Tighten reusable primitives for button, card, badge, section, container, and logo usage without introducing a new styling framework.
- Preserve the existing route map, WhatsApp chooser, SEO helpers, contact flow, and business data configuration.

Files this phase will touch:

- `app/globals.css`
- `app/layout.tsx`
- `components/Header.tsx`
- `components/MobileNav.tsx`
- `components/Footer.tsx`
- `components/SectionHeading.tsx`
- `components/ui/Button.tsx`
- `components/ui/Card.tsx`
- `components/ui/Container.tsx`
- `components/ui/Section.tsx`
- `components/ui/Badge.tsx`
- `components/ui/Logo.tsx`
- `data/brand-config.ts`
- `data/navigation.ts`

## Phase 2: Homepage

Goal: redesign the homepage into a premium conversion path: hero, trust strip, services, dashboard, process, FAQ, and CTA.

Work items:

- Rework the hero around a sharper business intelligence promise, stronger visual hierarchy, clearer primary CTA, and secondary dashboard CTA.
- Add a trust strip using only verified claims, such as confidentiality, tailored dashboards, demo-data transparency, and practical consulting process.
- Upgrade the services presentation so each service has a clear business problem, outcome, and CTA path.
- Improve the dashboard showcase in `components/Dashboard.tsx` with better tab semantics, richer demo data, responsive fit, and clearer demo labels.
- Add or refine a process section that makes discovery, data preparation, dashboard development, review, delivery, and support feel premium and easy to understand.
- Keep FAQ behavior accessible while rewriting content around data sources, implementation, security, customization, timelines, and support.
- Add a stronger final CTA that routes to the existing contact form and WhatsApp chooser.
- Keep all homepage content truthful and avoid unverified metrics or client proof.

Files this phase will touch:

- `app/page.tsx`
- `components/PageSections.tsx`
- `components/Dashboard.tsx`
- `components/Interactive.tsx`
- `components/AutoCarousel.tsx`
- `components/SectionHeading.tsx`
- `components/ScrollReveal.tsx`
- `app/globals.css`
- `data/site-content.ts`
- `data/brand-config.ts`
- `lib/seo.ts`

Possible files to create if section splitting becomes useful:

- `components/home/HeroSection.tsx`
- `components/home/TrustStrip.tsx`
- `components/home/ServicesOverview.tsx`
- `components/home/DashboardShowcase.tsx`
- `components/home/ProcessPreview.tsx`
- `components/home/FaqSection.tsx`
- `components/home/FinalCta.tsx`
- `data/home-content.ts`

## Phase 3: Remaining Pages

Goal: make About, Contact, and Services feel like complete premium pages rather than thin wrappers around shared homepage sections.

Work items:

- About page: expand company positioning, mission/vision, consulting approach, industries served, and CTA while avoiding unverified founder/team claims.
- Contact page: improve consultation flow, contact-card layout, reassurance copy, validation messaging, and responsive form presentation while keeping `/api/contact` intact.
- Services page: convert the service overview into a more detailed buyer page covering BI consulting, sales analytics, inventory analytics, procurement analytics, profitability analysis, executive reporting, and dashboard development.
- Decide whether `/why-us`, `/industries`, `/process`, and `/pricing` should remain separate pages, be strengthened, or be repositioned as supporting routes linked from the primary pages.
- Update metadata and structured data for any rewritten page content.
- Keep the current form schema unless implementation later approves a new lead qualification flow.

Files this phase will touch:

- `app/about/page.tsx`
- `app/contact/page.tsx`
- `app/services/page.tsx`
- `app/why-us/page.tsx`
- `app/industries/page.tsx`
- `app/process/page.tsx`
- `app/pricing/page.tsx`
- `components/PageSections.tsx`
- `components/ContactForm.tsx`
- `components/Interactive.tsx`
- `app/globals.css`
- `data/site-content.ts`
- `data/brand-config.ts`
- `lib/seo.ts`
- `lib/validation.ts`
- `app/api/contact/route.ts`
- `lib/email.ts`

Possible files to create if page content grows:

- `components/pages/AboutPageContent.tsx`
- `components/pages/ContactPageContent.tsx`
- `components/pages/ServicesPageContent.tsx`
- `data/services.ts`
- `data/company.ts`

## Phase 4: Final Polish

Goal: finish the redesign with accessibility, performance, SEO, QA, and a production build.

Work items:

- Accessibility: verify landmarks, heading order, skip link, focus-visible states, color contrast, mobile menu behavior, dashboard tabs, FAQ accordion behavior, form labels, error states, and keyboard navigation.
- Performance: optimize images, check LCP asset priority, avoid oversized decorative media, reduce layout shift, keep animations lightweight, and add reduced-motion handling where needed.
- SEO: review titles, descriptions, canonical paths, Open Graph image usage, JSON-LD output, sitemap entries, robots behavior, and route coverage.
- QA: test desktop, tablet, and mobile layouts from narrow mobile through wide desktop; verify no text overlap, clipping, broken links, hydration warnings, or console errors.
- Production readiness: run typecheck, lint, and build; address any blocking issues.
- Keep dependency additions minimal; prefer existing `lucide-react`, CSS, and React state unless a new library has a clear implementation need.

Files this phase will touch:

- `app/globals.css`
- `app/layout.tsx`
- `app/sitemap.ts`
- `app/robots.ts`
- `next.config.ts`
- `lib/seo.ts`
- `components/JsonLd.tsx`
- `README.md`
- Any page/component/data files changed in Phases 1-3

Validation commands for the implementation phase:

```bash
npm run typecheck
npm run lint
npm run build
```

## Open Questions Before Implementation

- Should the current contact email remain `dhyanirayka20@gmail.com`, or should visible fallback copy use a business email?
- Should "Designed and Developed by Vrattiks" remain in the footer exactly as-is?
- Are there any verified testimonials, client logos, certifications, integrations, or case-study outcomes that can be used?
- Should pricing remain visible as Starter/Growth/Enterprise, or be reframed as consultation-led engagement models?
- Should `/why-us`, `/industries`, `/process`, and `/pricing` remain in the top-level navigation after the premium redesign?
