You are a senior full-stack engineer, premium UI/UX designer, conversion strategist, accessibility specialist, and performance engineer.

Your task is to redesign and improve the existing Peturn website so that it looks modern, premium, professional, trustworthy, and conversion-focused.

Do not create a separate demo or mockup. Modify the existing project directly and preserve all working functionality.

Current live website:
https://peturn-website-cjfs.vercel.app/

Business name:
Peturn

Tagline:
Turn Data Into Growth.

Business category:
Business Intelligence, Analytics, Dashboards, and Business Consulting.

Primary objective:
Generate qualified business consultation inquiries from retail and manufacturing companies.

Primary CTA:
Book a Free Consultation

Secondary CTA:
View Sample Dashboard

Do not ask me for additional instructions. Inspect the repository, understand the existing implementation, make reasonable decisions based on the content below, and complete all necessary improvements.

==================================================
1. INSPECT THE EXISTING PROJECT FIRST
==================================================

Before changing code:

1. Inspect the full repository structure.
2. Identify:
   - Framework and version
   - Routing structure
   - Styling approach
   - Existing components
   - Current images and public assets
   - Form implementation
   - Email API implementation
   - Existing animation system
   - Current SEO configuration
3. Preserve the existing stack when it is working correctly.
4. Do not unnecessarily recreate the entire project.
5. Reuse existing components where practical, but refactor poorly structured or duplicated components.
6. Search for incorrect business information, outdated content, placeholder values, duplicate markup, and broken links.
7. Search for any personal Gmail address and replace it with:
   hello@peturn.in
8. Remove duplicated desktop/mobile content. Use one semantic component and change only the layout through CSS.
9. Confirm the visible company name is always written as:
   Peturn
10. Do not use the misspelling “Petrurn” in visible website text.

Look for these supplied files or equivalent brand assets:

- Peturn logo image
- Peturn_Design_System.html
- Existing analytics, retail, manufacturing, consultation, or dashboard images

Treat the supplied Peturn design system as the primary visual source of truth.

==================================================
2. BUSINESS DETAILS
==================================================

Use the following verified business information throughout the website.

Company:
Peturn

Tagline:
Turn Data Into Growth.

Primary email:
hello@peturn.in

Website:
https://www.peturn.in

India phone and WhatsApp:
+91 84693 49930

United States phone and WhatsApp:
+1 732 801 1981

WhatsApp links:

India:
https://wa.me/918469349930

United States:
https://wa.me/17328011981

Do not invent:

- Office address
- Founder names
- Employee count
- Years of experience
- Number of clients
- Revenue figures
- Awards
- Certifications
- Partnerships
- Customer logos
- Testimonials
- Review ratings
- Social-media URLs

Only show social icons when a real URL exists in configuration.

==================================================
3. BRAND DESIGN SYSTEM
==================================================

Use the following colors as centralized design tokens.

Primary brand colors:

- Deep Navy: #061433
- Royal Blue: #0B2F8C
- Vivid Blue: #1D6CDB
- Data Teal: #268DBC

Neutral colors:

- Cloud Background: #F7F9FC
- White: #FFFFFF
- Primary Text: #0A1A3D
- Secondary Text: #5B6478
- Border: #E2E7F0
- Muted Neutral: #AEB6C7

Semantic colors:

- Success: #1F9D6F
- Warning: #E0A72E
- Error: #D64550

Primary gradient:

linear-gradient(135deg, #1D6CDB 0%, #0B2F8C 100%)

Create centralized CSS variables or Tailwind theme tokens.

Suggested CSS variables:

--color-navy
--color-royal
--color-blue
--color-teal
--color-cloud
--color-white
--color-text
--color-text-muted
--color-border
--color-success
--color-warning
--color-error
--gradient-brand

Typography:

- Headings: Poppins, weights 600 and 700
- Body, navigation, forms, and buttons: Inter, weights 400, 500, and 600
- Dashboard metrics, prices, KPI values, and chart labels: IBM Plex Mono, weights 500 and 600

Use `next/font/google` where applicable.

Do not use Poppins for long body paragraphs.

Recommended responsive scale:

- Hero H1: clamp(2.6rem, 5vw, 4.8rem)
- Section H2: clamp(2rem, 3.5vw, 3.25rem)
- Card heading: 1.1rem–1.4rem
- Body: 1rem–1.125rem
- Small labels: 0.75rem–0.875rem

Typography should have:

- Tight heading letter spacing
- Comfortable paragraph line height
- Maximum paragraph width around 60–70 characters
- Strong contrast
- Clear hierarchy

==================================================
4. BRAND VOICE
==================================================

Peturn communicates with business owners and decision-makers, not only technical analysts.

Tone:

- Clear
- Confident
- Professional
- Business-focused
- Outcome-first
- Helpful
- Reliable

Avoid:

- Unnecessary BI jargon
- Overly technical explanations
- Hype
- Unsupported superlatives
- Excessive exclamation marks
- Phrases such as “revolutionary,” “world-class,” or “industry-leading” unless verified

Focus on business outcomes:

- Better visibility
- Faster reporting
- Reduced manual work
- Improved profitability
- Inventory control
- Procurement efficiency
- Confident decisions
- Scalable reporting

==================================================
5. LOGO USAGE
==================================================

Use the official Peturn logo.

Rules:

1. Maintain the original aspect ratio.
2. Do not stretch, rotate, recolor, crop, outline, bevel, distort, or add a strong drop shadow.
3. Use the full logo on white or Cloud backgrounds.
4. Use an approved light or icon version on dark navy backgrounds when available.
5. Keep enough clear space around the logo.
6. Use a sharp transparent PNG or SVG where available.
7. Use the icon version for the favicon when possible.
8. Do not reproduce the logo manually with text or CSS when the real asset exists.

==================================================
6. PREMIUM DESIGN DIRECTION
==================================================

The website must feel like a high-end data consulting company, not a generic SaaS template.

Visual characteristics:

- Generous whitespace
- Strong visual hierarchy
- Clean grid alignment
- Premium typography
- Restrained gradients
- High-quality analytics imagery
- Meaningful data visualizations
- Subtle borders
- Soft shadows
- Consistent spacing
- Professional motion
- Strong dark/light section contrast

Use a maximum content width of approximately 1200–1280px.

Create a consistent spacing system such as:

- 4px
- 8px
- 12px
- 16px
- 24px
- 32px
- 48px
- 64px
- 96px
- 128px

Suggested section padding:

Desktop:
96px–128px vertically

Tablet:
72px–96px vertically

Mobile:
56px–72px vertically

Avoid making every section a collection of identical rounded cards.

Use a mixture of:

- Editorial split layouts
- Full-width dark dashboard sections
- Image and content sections
- Connected timelines
- Numbered process layouts
- Structured comparison layouts
- Selective premium cards
- Large data visuals
- Highlight bands
- Horizontal integration lists

Suggested section rhythm:

- Hero: light background with subtle blue glow
- Business problems: Cloud background
- Services: white
- Dashboard preview: Deep Navy
- Industries: white
- Why Peturn: very light blue
- Process: white
- Security: Deep Navy
- Pricing: Cloud
- FAQ: white
- Final CTA: brand gradient
- Footer: Deep Navy

==================================================
7. HEADER AND NAVIGATION
==================================================

Create a premium sticky header.

Desktop navigation:

- Home
- Services
- Why Us
- About Company
- Contact Us

Add a prominent button:

Book a Free Consultation

Requirements:

1. Header starts clean and transparent or white depending on hero contrast.
2. After scrolling, apply:
   - White semi-transparent background
   - Backdrop blur
   - Soft shadow
   - Slightly reduced height
3. Add a smooth active navigation indicator.
4. Highlight the current page or section.
5. Add an animated underline on hover.
6. Use accessible navigation semantics.
7. Add a skip-to-content link.
8. Add a polished mobile menu with:
   - Focus management
   - Escape key closing
   - Background scroll lock
   - Large touch targets
   - Visible close button
9. Do not duplicate desktop and mobile menu content unnecessarily.

==================================================
8. HOMEPAGE STRUCTURE
==================================================

Improve the homepage conversion flow using this order:

1. Header
2. Hero
3. Trust/compatibility strip
4. Business problems
5. Services preview
6. Interactive sample dashboard
7. Industries served
8. Why choose Peturn
9. What clients receive
10. Business process
11. Data sources and integrations
12. Illustrative business scenario
13. Data security and confidentiality
14. Pricing
15. FAQ
16. Final consultation CTA
17. Footer

Preserve separate About, Services, Why Us, and Contact pages if they already exist.

Add concise homepage previews linking to the full pages.

==================================================
9. HERO SECTION
==================================================

Use this content.

Eyebrow:
Business Intelligence & Analytics Consulting

Main heading:
Transform Your Business Data into Smarter Decisions

Supporting paragraph:
We help businesses turn scattered data into meaningful insights through Business Intelligence, interactive dashboards, and analytics solutions that improve profitability, efficiency, and decision-making.

Supporting statement:
Data-Driven Decisions. Measurable Growth. Smarter Business.

Primary CTA:
Book a Free Consultation

Secondary CTA:
View Sample Dashboard

Add a trust row below the CTAs:

- Retail and manufacturing focused
- Excel, ERP, POS, and database compatible
- Confidential business consultation

Do not present these as certifications.

Hero layout:

Desktop:
- Left side: headline, description, CTAs, trust indicators
- Right side: premium dashboard visual or business intelligence interface

Mobile:
- Text first
- Dashboard visual below
- Full-width CTAs where appropriate

Hero visual requirements:

- Use one primary high-quality image or interactive dashboard
- Add no more than two floating KPI cards
- Use subtle data-node graphics inspired by the Peturn logo
- Add soft blue and teal glow accents
- Keep the CTA visually dominant
- Avoid a busy or overly futuristic appearance
- Do not use generic handshake photography

Potential floating KPI cards:

- Monthly Growth +18.6%
- Revenue Visibility
- Inventory Health

Clearly mark any numerical information as demo data.

==================================================
10. TRUST AND COMPATIBILITY STRIP
==================================================

Add a clean strip immediately after the hero.

Suggested content:

Compatible with your existing business data

- Excel
- CSV
- ERP systems
- POS systems
- Accounting software
- SQL databases
- Cloud business applications

Do not use specific software logos unless they are actually supported.

Use simple text labels or neutral line icons.

==================================================
11. BUSINESS PROBLEMS SECTION
==================================================

Heading:
Your Business Has Data. The Challenge Is Turning It into Direction.

Add four problem items:

1. Scattered spreadsheets
2. Manual reporting
3. Disconnected systems
4. Slow decision-making

Supporting transition:

Peturn transforms disconnected business information into clear dashboards, reliable reporting, and actionable insights.

Use a clean four-column grid on desktop and vertical cards on mobile.

Each problem should include:

- A simple icon
- A concise description
- A subtle visual connector leading toward the solution

==================================================
12. SERVICES SECTION
==================================================

Heading:
Business Intelligence Solutions Built Around Your Business

Introduction:
From sales and inventory to procurement and profitability, Peturn helps you see what is happening, understand why it is happening, and decide what to do next.

Services:

1. Business Intelligence

Centralize your business data into one intelligent platform for better visibility and faster decision-making.

2. Interactive Dashboards

Modern dashboards that provide timely insights into your business performance.

3. Sales Analytics

Include:

- Sales Performance
- Revenue Analysis
- Customer Trends
- Monthly Growth
- Product Performance
- Regional Sales

4. Inventory Analytics

Include:

- Inventory Health
- Stock Aging
- Fast and Slow Moving Items
- Reorder Planning
- Stock Availability
- Inventory Optimization

5. Procurement Analytics

Include:

- Vendor Performance
- Purchase Trends
- Supplier Analysis
- Purchase Cost Monitoring
- Procurement Efficiency

6. Profitability Analysis

Include:

- Gross Profit
- Net Profit
- Product Margins
- Department Performance
- Category Performance

7. Executive Reporting

Executive-ready reports designed for business owners and leadership teams, highlighting KPIs, trends, risks, and actionable recommendations.

Design:

- Use a featured service layout rather than seven identical cards
- Place Business Intelligence and Interactive Dashboards as large feature blocks
- Organize the remaining analytics services in a polished grid
- Add one relevant image or dashboard visual per service category when assets exist
- Use icons consistently
- Add hover detail without excessive motion
- Include a CTA:
  Explore Our Services

==================================================
13. SAMPLE DASHBOARD SECTION
==================================================

Create a premium dark section using Deep Navy.

Heading:
See Your Business More Clearly

Supporting text:
Explore examples of dashboard solutions that Peturn can customize around your data, goals, and KPIs.

Dashboard categories:

- Executive KPI Dashboard
- Sales Dashboard
- Inventory Dashboard
- Procurement Dashboard
- Profitability Dashboard
- Customer Analytics
- Business Performance Dashboard
- Financial Summary Dashboard

Requirements:

1. Create accessible tabs or filters.
2. Display at least four polished dashboard previews.
3. Clearly show:
   Demo Data
4. Use charts such as:
   - Monthly sales trend
   - Revenue vs target
   - Gross-margin trend
   - Inventory aging
   - Vendor performance
   - Regional sales
   - Category profitability
5. Keep the dashboard container height stable during tab switching.
6. Make charts responsive.
7. Use IBM Plex Mono for metrics.
8. Use the Peturn chart palette.
9. Add a CTA:
   Request a Dashboard for Your Business
10. The CTA should scroll to the contact form and preselect Dashboard Development.

==================================================
14. INDUSTRIES SECTION
==================================================

Heading:
Analytics Designed for Your Industry

Retail businesses:

- Supermarkets
- Liquor Stores
- Grocery Stores
- Department Stores
- Electronics Retailers
- Pharmacy Stores
- Fashion Retail

Manufacturing companies:

- FMCG
- Plastic Manufacturing
- Packaging
- Textile
- Cosmetics
- Consumer Products

Use two premium feature panels:

Retail:
- Retail image
- Store performance
- Sales visibility
- Stock aging
- Product movement
- Reorder planning

Manufacturing:
- Factory or production image
- Procurement
- Inventory
- Production monitoring
- Cost visibility
- Profitability analysis

Do not create a separate small image for every industry name.

Use one strong image for retail and one strong image for manufacturing, with smaller industry labels below.

==================================================
15. WHY CHOOSE PETURN
==================================================

Heading:
Why Businesses Choose Peturn

Include:

- Business-focused analytics
- Customized dashboards
- Affordable solutions
- Actionable business insights
- Data privacy and confidentiality
- Professional consulting approach
- Continuous support
- Scalable solutions for growing businesses

Add a concise supporting sentence to each benefit.

Do not repeat the benefit list in separate desktop and mobile markup.

Design this as:

- A split section
- Large image or dashboard visual on one side
- Structured numbered benefits on the other
- Subtle connected-line motif

CTA:
Discuss Your Reporting Challenges

==================================================
16. WHAT CLIENTS RECEIVE
==================================================

Add a new section.

Heading:
What You Receive

Items:

- Customized business dashboard
- Cleaned and structured data model
- KPI definition and reporting structure
- Executive summary report
- Dashboard walkthrough
- Review and refinement session
- Ongoing support options

Supporting text:
Every engagement is designed to give your team a usable reporting system, not only a collection of charts.

Use a clean checklist or deliverables layout.

==================================================
17. BUSINESS PROCESS
==================================================

Heading:
A Clear Process from Raw Data to Better Decisions

Steps:

1. Business Discovery

We understand your business, challenges, goals, and reporting requirements.

2. Data Collection

We collect data from Excel, ERP systems, accounting software, POS systems, databases, and other business applications.

3. Data Preparation

Our team cleans, validates, and structures your data for accurate analysis.

4. Dashboard Development

We design customized dashboards tailored to your business objectives.

5. Review and Optimization

We review the dashboards with your team and refine them based on feedback.

6. Delivery and Support

We deploy the solution and provide continuous support to ensure long-term success.

Design:

- Connected horizontal timeline on desktop
- Vertical timeline on mobile
- Animated progress line while scrolling
- Numbered nodes
- Peturn blue-to-teal connector
- One semantic markup structure for every breakpoint

==================================================
18. DATA SOURCES AND INTEGRATIONS
==================================================

Add a dedicated section.

Heading:
Work With the Data You Already Have

Include:

- Excel
- CSV
- ERP systems
- POS systems
- Accounting software
- Databases
- Other business applications

Supporting copy:
Peturn helps structure and connect existing business data so management can work from a clearer, more consistent reporting view.

Do not display unsupported product logos.

==================================================
19. ILLUSTRATIVE BUSINESS SCENARIO
==================================================

Add one clearly labelled illustrative example.

Label:
Illustrative Retail Scenario

Challenge:
Sales, margin, and stock reports exist in separate Excel files and require manual preparation.

Dashboard:
Sales, product margins, stock aging, inventory availability, and category performance are combined into a single reporting view.

Decision supported:
Management can quickly identify slow-moving stock, underperforming categories, and products requiring reorder attention.

Important:

- Clearly state that this is an illustrative example
- Do not present it as a real client case study
- Do not invent numerical outcomes
- Use a before-and-after reporting layout or dashboard image

==================================================
20. SECURITY AND CONFIDENTIALITY
==================================================

Add a premium Deep Navy section.

Heading:
Your Data Stays Your Data

Include only responsible, non-absolute statements:

- Confidential handling of business information
- Access limited to the agreed project scope
- Secure data-transfer procedures
- No reuse of client data for unrelated purposes
- Access can be removed after project completion
- NDA support where agreed

Add a note:

Security practices depend on the agreed engagement scope and selected infrastructure.

Do not claim legal compliance certifications unless verified.

==================================================
21. ABOUT COMPANY PAGE
==================================================

Heading:
About Peturn

Use this content:

Peturn is a Business Intelligence and Analytics consulting company focused on helping businesses unlock the true value of their data.

Many organizations rely on spreadsheets, manual reports, and disconnected systems that make decision-making slow and inefficient. At Peturn, we transform business data into interactive dashboards and actionable insights that help leaders make confident, data-driven decisions.

Whether you are a growing retail business or a manufacturing company, our solutions provide clear visibility into your operations, enabling you to improve performance, reduce costs, and drive sustainable growth.

Mission:

To empower businesses with simple, reliable, and affordable Business Intelligence solutions that transform raw data into meaningful insights.

Vision:

To become one of India’s most trusted Business Intelligence consulting companies, helping organizations make smarter decisions through data and innovation.

Add:

- Company introduction
- Mission and vision
- Who Peturn serves
- Consulting approach
- Business outcomes
- CTA to book a consultation

Do not invent team members or founder information.

==================================================
22. PRICING SECTION
==================================================

Heading:
Analytics Solutions for Every Stage of Growth

Starter:

Perfect for small businesses beginning their analytics journey.

Starting from ₹9,999/month

Includes:

- Dashboard setup
- Monthly reporting
- Business insights
- Email support

Growth:

Designed for businesses requiring advanced analytics and deeper reporting.

Starting from ₹14,999/month

Includes:

- Multiple dashboards
- Executive reports
- Performance tracking
- Priority support

Enterprise:

Customized Business Intelligence solutions for medium and large organizations.

Custom pricing based on project scope.

Add this note:

Final pricing depends on data sources, dashboard complexity, reporting frequency, integrations, and project scope.

Requirements:

- Highlight Growth without making it visually aggressive
- Use IBM Plex Mono for prices
- Include a consultation CTA on every plan
- Do not add checkout functionality
- Do not imply fixed deliverables beyond the listed inclusions
- Ensure pricing cards have equal heights

==================================================
23. FAQ SECTION
==================================================

Use an accessible accordion.

Questions and answers:

What data sources do you support?

Excel, CSV, ERP systems, POS systems, accounting software, databases, and other business applications.

Can you work with our existing Excel reports?

Yes. We can transform your existing Excel reports into structured, professional dashboards.

Is our business data secure?

Client confidentiality and responsible handling of business data are among Peturn’s highest priorities.

Do you provide ongoing support?

Yes. Peturn offers continuous support, dashboard enhancements, and performance reviews based on the selected service plan.

Can dashboards be customized?

Yes. Every dashboard is tailored to the business’s reporting requirements, operations, goals, and KPIs.

Requirements:

- Use proper button elements
- Add `aria-expanded`
- Add `aria-controls`
- Animate answer height and opacity
- Rotate the plus icon
- Maintain keyboard navigation
- Avoid layout jumps

==================================================
24. CONTACT SECTION AND FORM
==================================================

Heading:
Ready to Transform Your Business with Data?

Supporting content:

Let’s build smarter decisions together.

Book Your Free Business Consultation Today.

Contact details:

Email:
hello@peturn.in

India:
+91 84693 49930

United States:
+1 732 801 1981

Form fields:

- Full Name
- Work Email
- Phone or WhatsApp Number
- Company Name
- Country
- Industry
- Service Required
- Preferred Contact Method
- Message
- Consent checkbox

Industry options:

- Retail
- Manufacturing
- FMCG
- Packaging
- Textile
- Cosmetics
- Professional Services
- Other

Service options:

- Business Intelligence Consulting
- Dashboard Development
- Sales Analytics
- Inventory Analytics
- Procurement Analytics
- Profitability Analysis
- Executive Reporting
- Other

Preferred contact methods:

- Email
- Phone
- WhatsApp

Submit button:
Request Free Consultation

Requirements:

1. Client-side validation
2. Server-side validation
3. Loading state
4. Disabled state
5. Success state
6. Error state
7. Accessible status announcement
8. Input length limits
9. Safe HTML escaping
10. Spam honeypot
11. Basic rate limiting when practical
12. Do not show the honeypot to users
13. Honeypot must use:
    - aria-hidden
    - tabIndex -1
    - off-screen positioning
14. Do not return success when email delivery fails

==================================================
25. EMAIL DELIVERY
==================================================

Preserve or implement secure server-side email delivery.

Use Resend if it is already part of the project.

Environment variables:

RESEND_API_KEY=
CONTACT_TO_EMAIL=hello@peturn.in
CONTACT_FROM_EMAIL=Peturn Website <website@your-verified-domain.com>
NEXT_PUBLIC_SITE_URL=https://www.peturn.in

Recipient:
hello@peturn.in

Internal email subject:

New Peturn Website Inquiry — [Name] — [Company]

Include:

- Submission time
- Full name
- Email
- Phone/WhatsApp
- Company
- Country
- Industry
- Requested service
- Preferred contact method
- Message
- Source page

Set the visitor’s email as `replyTo`.

Send a visitor confirmation email when technically possible.

Do not expose API keys to the client.

Do not commit `.env.local`.

Provide `.env.example`.

==================================================
26. IMAGE SYSTEM
==================================================

Inspect existing images in the repository and use the most relevant assets.

Recommended visual placement:

- Hero: executive dashboard
- About: analytics consultation meeting
- Services: business intelligence or dashboard workspace
- Retail: retail analytics or supermarket
- Manufacturing: factory analytics
- Why Us: professional dashboard workspace
- Contact: consultation image
- Data concept: abstract data analytics visualization

Requirements:

1. Use `next/image`.
2. Use explicit dimensions.
3. Add responsive `sizes`.
4. Use `priority` only for above-the-fold hero media.
5. Lazy-load below-the-fold images.
6. Convert large PNG/JPG assets to WebP or AVIF where practical.
7. Maintain good quality while reducing file size.
8. Add descriptive alt text.
9. Do not put images in every small card.
10. Avoid unstable remote image URLs.
11. Store assets locally under `/public/images/peturn`.
12. Create a centralized image configuration.
13. Do not show AI-generated unreadable dashboard text at large sizes when it is visibly distorted.
14. Crop images consistently.
15. Use object-position configuration when needed.

If no suitable image exists for a section, use a clean data-themed SVG or CSS illustration rather than a broken placeholder.

==================================================
27. ANIMATION SYSTEM
==================================================

Use one consistent, restrained animation system.

Install and use Motion only when it is not already installed:

npm install motion

Import from:

motion/react

Do not make the entire page a Client Component. Create small reusable Client Components for animation.

Create:

- Reveal component
- StaggerGrid component
- MotionCard component
- AnimatedNumber component where useful
- ProcessTimeline component
- Dashboard transition component

Global animation easing:

[0.22, 1, 0.36, 1]

Scroll reveal:

- Opacity: 0 to 1
- Y position: 24px to 0
- Duration: 550–700ms
- Trigger once
- Viewport amount: approximately 0.15–0.2

Hero sequence:

- Eyebrow appears first
- Heading follows
- Description follows
- Buttons follow
- Dashboard enters from the right
- Floating KPI cards begin only after the initial entrance

Hero dashboard entrance:

- Opacity 0 to 1
- X 40px to 0
- Scale 0.96 to 1
- Duration approximately 850ms

Floating elements:

- Maximum two
- Movement no more than 6–8px
- Duration approximately four seconds
- Ease in/out
- Disable with reduced motion

Card entrance:

- Stagger children by 70–100ms
- Opacity 0 to 1
- Y 24px to 0
- Scale 0.985 to 1

Card hover:

- Translate Y: -5px
- Scale: 1.015
- Soft navy shadow
- Blue border highlight
- Image scale: 1.04
- Spring transition
- No layout shift

Buttons:

- Lift 2px on hover
- Scale 0.98 on tap
- Move arrow 3–4px horizontally
- Do not continuously bounce

Dashboard tabs:

- Use AnimatePresence
- Previous content fades out
- New content fades and moves upward
- Duration around 300ms
- Keep parent height stable

FAQ:

- Animate height
- Animate opacity
- Rotate plus icon
- Use layout animation for surrounding items

Process:

- Scroll-linked progress line
- Nodes activate as the line reaches them
- Use a vertical progress line on mobile

Header:

- Subtle initial entrance
- Background blur and shadow after scroll
- Animated nav underline

Do not use:

- Continuous pulsing CTAs
- Large card zoom
- Excessive parallax
- Rotating full sections
- Fast bouncing
- Animations on every paragraph
- Different animation styles in each section

==================================================
28. REDUCED MOTION
==================================================

Support `prefers-reduced-motion`.

Use Motion’s `useReducedMotion`.

Add CSS fallback:

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

The website must remain fully usable without animations.

==================================================
29. RESPONSIVENESS
==================================================

Test and optimize for:

- 360px
- 390px
- 430px
- 768px
- 1024px
- 1280px
- 1440px
- 1920px

Requirements:

- No horizontal scrolling
- No clipped cards
- No overflowing charts
- No tiny buttons
- No unreadable dashboard text
- Proper mobile menu
- Full-width form fields on mobile
- Responsive typography
- Responsive images
- Stable dashboard container
- Pricing cards stack cleanly
- Process becomes vertical
- CTAs remain visible and easy to tap
- Minimum practical touch target around 44px

Use CSS Grid and Flexbox appropriately.

Avoid large amounts of breakpoint-specific duplicate markup.

==================================================
30. ACCESSIBILITY
==================================================

Implement WCAG-oriented accessibility best practices.

Include:

- Semantic HTML
- One primary H1 per page
- Logical heading hierarchy
- Skip-to-content link
- Keyboard navigation
- Visible focus styles
- Accessible mobile menu
- Accessible accordion
- Accessible dashboard tabs
- Form labels
- `aria-describedby` for errors
- `aria-live` for submission results
- Sufficient contrast
- Descriptive image alt text
- Decorative icons hidden from screen readers
- Reduced-motion support
- Clear link names
- Accessible WhatsApp chooser
- No color-only chart meaning

Add focus-visible styles:

- High contrast
- Clear outline
- Consistent offset
- No hidden focus ring without replacement

==================================================
31. FLOATING WHATSAPP CONTACT
==================================================

Add a tasteful floating WhatsApp control.

On activation, open an accessible chooser:

- Contact India
- Contact United States

Do not automatically send the visitor to one number.

Requirements:

- One-time entrance animation
- No continuous bouncing
- Accessible button label
- Keyboard support
- Escape key closes chooser
- Focus returns to trigger
- Safe external link attributes
- Does not cover important content on mobile

==================================================
32. FOOTER
==================================================

Include:

Peturn

Business Intelligence | Analytics | Dashboards | Business Consulting

Helping businesses transform data into better decisions.

Footer navigation:

- Home
- Services
- Why Us
- About Company
- Contact Us
- Pricing
- FAQ

Service links:

- Business Intelligence
- Sales Analytics
- Inventory Analytics
- Procurement Analytics
- Profitability Analysis
- Executive Reporting

Contact:

- hello@peturn.in
- India phone
- US phone
- India WhatsApp
- US WhatsApp

Requirements:

- Make footer service items clickable
- Hide social icons with empty URLs
- Dynamic current year
- Back-to-top button
- Deep Navy background
- Proper contrast
- Mobile-friendly columns
- Do not show false legal or address information

==================================================
33. SEO
==================================================

Add or improve:

Title:
Peturn | Business Intelligence, Analytics & Dashboards

Description:
Peturn helps retail and manufacturing businesses transform spreadsheets, ERP data, sales, inventory, procurement, and profitability information into interactive dashboards and actionable business insights.

Canonical:
https://www.peturn.in

Add:

- Open Graph metadata
- Twitter metadata
- Favicon
- `robots.ts`
- `sitemap.ts`
- Organization structured data
- ProfessionalService structured data
- ContactPoint structured data for India and the United States
- Page-specific metadata for About, Services, Why Us, and Contact
- Semantic internal linking
- Descriptive image alt text

Do not add a postal address because one was not supplied.

==================================================
34. PERFORMANCE
==================================================

Optimize for strong Core Web Vitals.

Requirements:

1. Minimize Client Components.
2. Reduce unnecessary JavaScript.
3. Lazy-load heavy sections.
4. Dynamically import large charts where appropriate.
5. Use optimized local images.
6. Reserve image dimensions.
7. Avoid layout shifts.
8. Avoid loading all animations before needed.
9. Remove unused dependencies.
10. Remove unused CSS.
11. Prevent duplicate rendering.
12. Use Server Components by default.
13. Use font display optimization.
14. Avoid autoplay background video.
15. Avoid huge decorative PNG files.
16. Compress icons and SVGs.
17. Keep initial hero rendering fast.
18. Avoid blocking third-party scripts.

Do not compromise accessibility or usability for performance scores.

==================================================
35. CODE QUALITY
==================================================

Use:

- TypeScript strict mode
- Reusable components
- Typed content models
- Centralized content
- Centralized contact data
- Centralized navigation
- Centralized pricing
- Centralized FAQ content
- Centralized image mapping
- Centralized animation variants
- Server Components by default
- Client Components only where needed

Avoid:

- `any`
- Duplicated content
- Inline hardcoded contact values across multiple components
- Large monolithic page components
- Unused imports
- Console errors
- Placeholder lorem ipsum
- Broken links
- Empty href values
- Invalid nesting
- Hydration mismatches
- Fake business claims

Suggested structure:

app/
  api/contact/route.ts
  about/page.tsx
  services/page.tsx
  why-us/page.tsx
  contact/page.tsx
  layout.tsx
  page.tsx
  globals.css
  robots.ts
  sitemap.ts

components/
  layout/
    Header.tsx
    Footer.tsx
    MobileMenu.tsx
  sections/
    Hero.tsx
    TrustStrip.tsx
    BusinessProblems.tsx
    ServicesPreview.tsx
    DashboardShowcase.tsx
    Industries.tsx
    WhyChooseUs.tsx
    Deliverables.tsx
    Process.tsx
    Integrations.tsx
    IllustrativeScenario.tsx
    Security.tsx
    Pricing.tsx
    FAQ.tsx
    ContactCTA.tsx
  animations/
    Reveal.tsx
    StaggerGrid.tsx
    MotionCard.tsx
    variants.ts
  ui/
    Button.tsx
    SectionHeading.tsx
    Container.tsx
    Card.tsx
    Icon.tsx
  forms/
    ContactForm.tsx
  contact/
    WhatsAppChooser.tsx

data/
  site-content.ts
  navigation.ts
  pricing.ts
  faq.ts
  images.ts

lib/
  validation.ts
  email.ts
  utils.ts
  metadata.ts

==================================================
36. README
==================================================

Update the README with:

1. Project overview
2. Technology stack
3. Installation
4. Development command
5. Build command
6. Environment variables
7. Resend setup
8. Verified sender-domain setup
9. Contact recipient configuration
10. Image management
11. Updating business content
12. Updating prices
13. Updating phone numbers
14. Adding social links
15. Vercel deployment
16. Form testing
17. Accessibility testing
18. Performance testing

Do not include real secret values.

==================================================
37. FINAL VALIDATION
==================================================

After implementation:

1. Install required dependencies.
2. Run the development server.
3. Run lint.
4. Run TypeScript checks.
5. Run the production build.
6. Fix every error.
7. Fix every warning that affects quality or accessibility.
8. Check all routes.
9. Check every navigation link.
10. Test both WhatsApp contacts.
11. Test phone links.
12. Test the email link.
13. Test form validation.
14. Test successful email delivery.
15. Test email failure handling.
16. Test mobile menu.
17. Test FAQ keyboard behavior.
18. Test dashboard tabs.
19. Test reduced-motion behavior.
20. Test 360px mobile width.
21. Test 768px tablet width.
22. Test 1440px desktop width.
23. Confirm no horizontal overflow.
24. Confirm no duplicated content.
25. Confirm no incorrect Gmail address remains.
26. Confirm `hello@peturn.in` is used.
27. Confirm no fake testimonials, client logos, statistics, or awards were added.
28. Confirm all images have appropriate alt text.
29. Confirm the visible brand name is Peturn.
30. Confirm production build passes.

Commands should include the project’s actual scripts, such as:

npm run lint
npm run build

If a dedicated typecheck script does not exist, add one or use:

npx tsc --noEmit

==================================================
38. COMPLETION RESPONSE
==================================================

Do not stop after describing what should be changed.

Implement the changes directly.

At the end, provide:

1. Concise summary of improvements
2. Files created
3. Files modified
4. Packages installed
5. Environment variables required
6. Contact-form setup requirements
7. Image assets used
8. Accessibility improvements
9. Performance improvements
10. Commands run
11. Lint result
12. Type-check result
13. Production-build result
14. Any remaining limitation that depends on external setup

Do not report a check as passed unless it was actually run successfully.