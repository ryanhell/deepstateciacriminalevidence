# Copilot Instructions for banquo

## Project Overview

**banquo** is a Next.js 15 multimedia documentation platform built with TypeScript, Tailwind CSS, Radix UI, and Mux video streaming. The site hosts case documentation, evidence videos, galleries, downloadable CAD files, and police reports.

### Tech Stack
- **Framework**: Next.js 15.5.7 (App Router, Standalone output mode, Turbopack in dev)
- **Language**: TypeScript 5.9.2 (ES2017, strict mode, path alias `@/*`)
- **Styling**: Tailwind CSS 4 + PostCSS v4, with Radix UI primitives
- **UI Components**: Custom component library in `components/` using shadcn/ui patterns
- **Video**: Mux SDK (`@mux/mux-node`, `@mux/mux-player-react`, `@mux/mux-uploader-react`)
- **Icons**: lucide-react for icon library
- **Animations**: motion library for transitions
- **Build Output**: Standalone (containerization-ready), with asset copy step

## Architecture Patterns

### Pages & Routes
- App Router structure: `app/[feature]/page.tsx` for each major section
- Key routes: `/911Calls`, `/videos`, `/Downloads`, `/JeremiahJohnson`, `/SallyBagshaw`, `/CADFiles`, `/PoliceReport`, `/aboutRyan`
- Sidebar navigation defined in `fixtures/sidebar.ts` with lucide-react icons
- Layout hierarchy: `RootLayout` → Header → Navbar → page content → Footer

### Components
- **UI Library** (`components/ui/*`): Radix UI base components (card, button, accordion, dialog, dropdown, tabs, separator, badge, carousel, collapsible, etc.)
- **Feature Components** (`components/*`): Story sections (Intro, EthicalMisconduct, Discrepancies), galleries (BagShawGallery, ColockumGallery), media players (RenderVideos, VideoCard)
- **Styled Approach**: Combine Tailwind classes directly in JSX + CSS modules for page-specific styles (e.g., `page.module.css`)
- **Import Convention**: Use `@/` alias for all imports (`import { Card } from '@/components/ui/card'`)

### Data & Media Management
- Static assets in `public/` (images, PDFs, CAD files, videos)
- JSON data files: `components/data/evidence.js`, `app/api/CaseData.json`
- Mux integration: upload/playback components for video streaming
- Download management: `components/DownloadManager.tsx` handles nested file structures
- API routes in `app/api/` for file serving and gallery endpoints

### Styling Conventions
- **Utility-first**: Heavy use of Tailwind's predefined classes
- **Responsive Design**: Use Tailwind's `md:`, `lg:` breakpoints (e.g., `md:h-[500px] lg:h-[600px]`)
- **Colors**: Tailwind's semantic colors (e.g., `bg-gray-800`, `text-white`, `text-slate-900`)
- **Spacing**: Consistent use of `px-`, `py-`, `mb-`, `gap-` utilities
- **CSS Modules**: Page-specific styles in collocated `.module.css` files (e.g., `JeremiahJohnson/page.module.css`)
- **CSS-in-JS**: Some components use inline styles for calculated values (e.g., `style={{ paddingLeft: \`${depth * 24}px\` }}`)

## Build & Development Workflows

### Development
```bash
npm run dev          # Starts dev server with Turbopack at http://localhost:3000
npm run lint         # Runs Next.js linter
```

### Production
```bash
npm run build        # Runs prebuild → process-files → build → copy-assets → postbuild → sitemap generation
npm run start        # Serves production standalone build
npm run process-files  # Custom script: processes/transforms files pre-build
```

### Build Pipeline
1. **prebuild**: (if configured) Pre-build setup
2. **process-files**: Custom script in `scripts/process-files.ts` transforms files
3. **build**: Next.js production build (creates `.next/standalone`)
4. **copy-assets**: `copy-assets.js` copies public assets to build output
5. **postbuild**: Sitemap generation via `next-sitemap`

## Key Development Patterns

### Server vs Client Components
- Use `"use client"` directive for interactive components (e.g., `Navbar.tsx`, `page.tsx` on home page)
- Server-rendered pages by default; only add "use client" when state, hooks, or interactivity required
- Server Actions: Use for form submissions (max 2MB body limit, allowed origins: `ryanhellfacts.com` & `localhost:3000`)

### Image Handling
- Use Next.js `<Image>` component for optimization (avoids CLS)
- Remote patterns configured: `image.mux.com`, `files.ryanhellfacts.com`
- Layout modes: `fill` with `objectFit="cover"` for hero sections, standard `width/height` for cards
- Fallback alt text required for accessibility

### Component Composition
- Radix UI primitives wrapped in styled components (e.g., `Card`, `Button`, `Accordion`)
- Composition pattern: base component + styled variants (see `components/ui/card.tsx`)
- Props forwarding via `React.HTMLAttributes` for flexibility
- Example: `Card` extends `HTMLDivElement` with `className` composition

### Metadata & SEO
- Use `generateMetadata()` or inline metadata in `layout.tsx`
- Open Graph: configured in `app/layout.tsx` with `openGraph` object
- Robots meta: `index: true, follow: true` by default
- Automatic sitemap generation: `next-sitemap` creates `public/sitemap.xml`

### Security Headers (Next.js config)
- **HSTS**: Preload enabled, 31536000s max-age
- **X-Frame-Options**: DENY (no iframe embedding)
- **X-XSS-Protection**: 1; mode=block
- **Referrer-Policy**: strict-no-referrer
- **CSP-adjacent**: No inline scripts in HTML

## Common Tasks & Solutions

### Adding a New Page
1. Create directory: `app/newPage/`
2. Create `page.tsx` with default export
3. Add route to navigation in `fixtures/sidebar.ts` or `app/layout.tsx`
4. Use `Card`, `Button`, `Accordion` from `@/components/ui/*`
5. Set metadata via `generateMetadata()` if SEO critical

### Styling a Component
1. Prefer Tailwind utility classes in `className`
2. For complex layouts: add CSS module `component.module.css` next to component
3. Use TailwindCSS's `@apply` directive in modules for reusable patterns
4. Example: `className="flex items-center gap-3 p-3 hover:bg-slate-600/50 rounded cursor-pointer transition-colors"`

### Integrating Mux Video
1. Use `@mux/mux-player-react` for playback
2. Use `@mux/mux-uploader-react` for uploads
3. Store playback IDs in data files or database
4. Example: `<MuxPlayer playbackId={playbackId} />` (from semantic search patterns)

### Adding an Accordion/Collapsible Section
1. Import: `import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'`
2. Structure: each `AccordionItem` wraps trigger + content
3. Example pattern: Used extensively in home page and story sections for content organization

## File Organization

```
app/
  [route]/page.tsx          # Route pages
  layout.tsx                # Root layout (Header, Navbar, Footer wrapper)
  globals.css              # Global Tailwind directives
  manifest.ts              # Metadata route
  robots.ts                # Robots.txt route
  sitemap.ts               # Sitemap route
  actions.js               # Server actions (if used)

components/
  ui/                      # Radix UI wrapped components
  imageComponents/         # Image-heavy galleries
  storyComponents/         # Content sections (Intro, EthicalMisconduct, etc.)
  Toasts/                  # Toast notification components
  data/                    # JSON data files
  [Feature].tsx            # Feature components (Navbar, Footer, etc.)

scripts/
  process-files.ts         # Pre-build file processing

public/
  [assets]/                # Static images, PDFs, CAD files, videos
```

## Important Notes for AI Agents

1. **Path Aliases**: Always use `@/` for imports (e.g., `@/components/ui/card`)
2. **Standalone Build**: Output mode is standalone; don't assume node_modules in production
3. **Asset Pipeline**: Files in `public/` are served directly; pre-build processing in `scripts/process-files.ts`
4. **Accessibility**: Radix UI components provide a11y; ensure alt text on images and semantic HTML
5. **Image Optimization**: Mux handles video; Next.js handles image formats (AVIF/WebP)
6. **No Hardcoded Routes**: Define navigation in `fixtures/sidebar.ts` or centralized `layout.tsx`
