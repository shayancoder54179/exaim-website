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

This is a **Next.js 16 App Router** marketing website for ExAIm, an AI-powered exam preparation platform. There is no backend — it is a fully static/client-side marketing site deployed on Vercel.

### Key architectural decisions

- **App Router** with route groups: `app/(marketing)/` groups marketing page layouts. Each page under `app/<route>/` has its own `page.tsx` and often its own `_components/` subdirectory.
- **Metadata pattern**: Use `createPageMetadata()` from `lib/metadata.ts` to generate page-level metadata. This function builds on the root layout's base metadata and ensures consistent Open Graph, Twitter Card, and canonical URL handling.
- **Structured data**: The `components/StructuredData.tsx` component injects JSON-LD (Organization and SiteNavigation schemas) — it is rendered in the root layout.
- **Animation**: Framer Motion is used for component-level animations; GSAP is used for scroll-driven animations via `components/ScrollAnimations.tsx`. The `app/template.tsx` provides page transition animations.
- **UI components**: Shadcn/ui components live in `components/ui/`. The icon library is HugeIcons (not Lucide for new icons where possible). Shadcn config is in `components.json`.
- **Styling**: Tailwind CSS with custom design tokens defined in `tailwind.config.ts` — custom colors (`primary`, `secondary`, `accent`), custom keyframes (`fade-in`, `slide-up`, `gradient`, `blob`, `pulse-slow`).
- **Path alias**: `@/` maps to the project root.

### Route map

| Route | Description |
|---|---|
| `/` | Home page |
| `/how-exaim-works` | Platform walkthrough |
| `/our-products` | Product offerings |
| `/our-story` | Company narrative |
| `/why-exaim` | Value proposition |
| `/preview-demos` | Interactive feature demos |
| `/pitch-deck` | Investor pitch deck (PDF viewer) |
| `/book-a-demo` | Demo booking form (Zoho CRM integration) |
| `/case-studies` | Case studies |
| `/privacy-policy`, `/terms-and-conditions` | Legal pages |

The `/demo` URL redirects to `/book-a-demo` via `next.config.js`.

### SEO

Security headers, HSTS, canonical URLs, and redirects are all configured in `next.config.js`. Do not duplicate these in middleware or page-level headers.

Google Analytics (tag: `GA-MSJ492NVMG`) and Vercel Analytics/Speed Insights are wired in the root `app/layout.tsx`.
