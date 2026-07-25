# Peturn business website

A production-ready, responsive single-page website for Peturn’s Business Intelligence and Analytics consulting services. It includes interactive dashboard demos, accessible navigation and FAQ controls, conversion-focused sections, a validated consultation form, server-side Resend email delivery, SEO metadata and structured data.

## Technology

- Next.js App Router, React and strict TypeScript
- React Hook Form and Zod
- Resend
- Lucide icons
- CSS variables and responsive custom CSS
- Lightweight inline SVG charts (no client-heavy charting runtime)

## Local setup

1. Install Node.js 20.9 or later.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local`.
4. Fill in the environment values described below.
5. Run `npm run dev` and open `http://localhost:3000`.

Production validation:

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

## Environment variables

```env
RESEND_API_KEY=
CONTACT_TO_EMAIL=hello@peturn.in
CONTACT_FROM_EMAIL=Peturn Website <website@your-verified-domain.com>
NEXT_PUBLIC_SITE_URL=https://www.peturn.in
```

Never prefix the Resend key with `NEXT_PUBLIC_`. The API route returns a clear 503 response when email delivery is not configured; it never reports a false success.

## Resend setup

Create a Resend account, add and verify a domain you control, and use an address on that verified domain in `CONTACT_FROM_EMAIL`. Add the API key and variables to `.env.local` and to the production hosting environment. `CONTACT_TO_EMAIL` defaults to `hello@peturn.in`. The visitor’s address is used as `replyTo`. A successful internal email is required before the API returns success; the visitor confirmation is attempted separately so a secondary-email issue does not lose the primary inquiry.

Test with a real work email after configuring Resend. Also test invalid fields, the consent checkbox, missing environment values, and a deliberately invalid API key. Do not use a production recipient during automated load tests.

## Updating business content

Centralized contact details, navigation, services, pricing, FAQs and social links are in `data/site-content.ts`.

- Update both display and machine-readable phone values together.
- Add real LinkedIn, Instagram or Facebook URLs to `socialLinks`; empty entries remain hidden.
- Edit `pricing` to update plans and inclusions.
- The approved logo is stored at `public/brand/peturn-logo.png` and is used without visual alteration.

Industry visuals are original CSS/SVG compositions, so no third-party image credits or remote assets are required.

## Deploying to Vercel

Import the repository in Vercel, keep the detected Next.js settings, add all four environment variables under Project Settings → Environment Variables, and deploy. Configure `www.peturn.in` as the production domain, ensure DNS is active, and then verify `/robots.txt`, `/sitemap.xml`, the contact form, email receipt and both WhatsApp actions.
