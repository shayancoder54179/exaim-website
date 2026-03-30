# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (Next.js with Turbopack)
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint via Next.js
```

No test runner is configured in this project.

## Architecture

This is a **Next.js 16 App Router** marketing website for ExAIm, an AI-powered exam preparation platform targeting GCSE/IGCSE students on the British curriculum. No backend — fully static/client-side, deployed on Vercel.

### Key architectural decisions

- **App Router** with flat route structure: pages live directly under `app/<route>/page.tsx`. There is no `(marketing)` route group.
- **Dark mode**: `next-themes` with `darkMode: 'class'` in Tailwind. `ThemeProvider` wraps the root layout; `ThemeToggle` is in the navbar.
- **Metadata pattern**: Use `createPageMetadata()` from `lib/metadata.ts` for all page metadata. It generates canonical URLs, Open Graph, Twitter Card, and robots tags. Also exports `createBreadcrumbSchema()` for JSON-LD breadcrumbs.
- **UI components**: Shadcn/ui components in `components/ui/`. Icon library is HugeIcons (`@hugeicons/react` + `@hugeicons/core-free-icons`) — prefer these over Lucide for new icons.
- **Styling**: Tailwind CSS. Custom design tokens use CSS variables via the `brand.*` scale (`brand-bg`, `brand-surface`, `brand-surface-light`, `brand-text`, `brand-muted`, `brand-border`, `brand-border-light`). Extended color scales: `indigo`, `purple`, `emerald`. Custom animations: `fade-in`, `fade-in-up`, `slide-up`, `float`, `float-slow`, `pulse-glow`, `marquee`, `gradient`.
- **Animation**: Framer Motion for component-level animations; GSAP is installed for scroll-driven effects.
- **Blog**: Content is hardcoded in `app/blog/posts.ts` as a `BlogPost[]` array — no CMS. `app/blog/[slug]/page.tsx` reads from this array at build time.
- **Contact form**: `components/ZohoContactForm.tsx` integrates with Zoho CRM.
- **Mockups**: Interactive UI mockups for the how-it-works flow live in `components/how-it-works/mockups/`. General product mockups are in `components/mockups/`.
- **Path alias**: `@/` maps to the project root.

### Route map

| Route | Description |
|---|---|
| `/` | Home page |
| `/how-it-works` | Platform walkthrough (client component: `HowItWorksClient.tsx`) |
| `/for-schools` | Schools landing page |
| `/pricing` | Pricing page |
| `/our-story` | Company narrative |
| `/blog` | Blog index |
| `/blog/[slug]` | Blog post (content from `app/blog/posts.ts`) |
| `/contact` | Contact page with Zoho form |
| `/privacy-policy`, `/terms-and-conditions` | Legal pages |

**Redirects** (configured in `next.config.js`): `/demo` → `/for-schools`, `/book-a-demo` → `/for-schools`, `/get-started` → `/pricing`, `/our-products` → `/`, `/how-exaim-works` → `/`.

### SEO

Security headers, HSTS, canonical URLs, and redirects are all in `next.config.js`. Do not duplicate in middleware or page-level headers.

Google Analytics (tag: `G-MSJ492NVMG`) and Vercel Analytics/Speed Insights are wired in `app/layout.tsx`.
