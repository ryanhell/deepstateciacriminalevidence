# Complete Next.js SEO Setup Guide for Dokploy VPS

**TypeScript Configuration - December 2024**

---

## Table of Contents

1. [Next.js Configuration](#1-nextjs-configuration)
2. [Sitemap Configuration](#2-sitemap-configuration)
3. [Root Layout Metadata](#3-root-layout-metadata)
4. [Dynamic Page Metadata](#4-dynamic-page-metadata)
5. [Robots.txt](#5-robotstxt)
6. [Sitemap Generation](#6-sitemap-generation)
7. [Web Manifest](#7-web-manifest)
8. [SEO Helper Functions](#8-seo-helper-functions)
9. [Structured Data (JSON-LD)](#9-structured-data-json-ld)
10. [Image Optimization](#10-image-optimization)
11. [Dokploy Configuration](#11-dokploy-configuration)
12. [Performance & Core Web Vitals](#12-performance--core-web-vitals)
13. [Post-Deployment Checklist](#13-post-deployment-checklist)

---

## 1. Next.js Configuration

**File: `next.config.ts`**

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,

  // SEO-friendly redirects
  async redirects() {
    return [
      {
        source: "/old-page",
        destination: "/new-page",
        permanent: true, // 301 redirect for SEO
      },
      // Add more redirects as needed
    ];
  },

  // Security and SEO headers
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
```

---

## 2. Sitemap Configuration

**Install next-sitemap:**

```bash
npm install next-sitemap
```

**File: `next-sitemap.config.ts`**

```typescript
import type { IConfig } from "next-sitemap";

const config: IConfig = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false, // Set true if 50,000+ URLs

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/api", "/private"],
      },
    ],
  },

  exclude: ["/admin/*", "/api/*", "/private/*", "/server-sitemap.xml"],
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,

  transform: async (config, path) => {
    let priority = config.priority;
    let changefreq = config.changefreq;

    if (path === "/") {
      priority = 1.0;
      changefreq = "daily";
    } else if (path.startsWith("/blog/")) {
      priority = 0.8;
      changefreq = "weekly";
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};

export default config;
```

**Update package.json:**

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "postbuild": "next-sitemap",
    "start": "next start"
  }
}
```

---

## 3. Root Layout Metadata

**File: `app/layout.tsx`**

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com"
  ),

  title: {
    default: "Your Site Name - Tagline",
    template: "%s | Your Site Name",
  },

  description: "Your compelling site description (155-160 characters max)",

  keywords: ["keyword1", "keyword2", "keyword3", "nextjs", "seo"],

  authors: [{ name: "Your Name", url: "https://yourdomain.com" }],

  creator: "Your Name",
  publisher: "Your Company",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    siteName: "Your Site Name",
    title: "Your Site Name - Tagline",
    description: "Your compelling site description",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Your Site Name",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@yourhandle",
    creator: "@yourhandle",
    title: "Your Site Name - Tagline",
    description: "Your compelling site description",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    // Add other verification codes as needed
  },

  alternates: {
    canonical: "https://yourdomain.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

---

## 4. Dynamic Page Metadata

**File: `app/blog/[slug]/page.tsx`**

```typescript
import type { Metadata } from "next";

interface PageProps {
  params: { slug: string };
}

interface Post {
  title: string;
  excerpt: string;
  slug: string;
  image: string;
  publishedAt: string;
  updatedAt: string;
  author: string;
  keywords: string[];
}

// Generate metadata for each blog post
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const post: Post = await getPost(params.slug);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com";

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    authors: [{ name: post.author }],

    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${baseUrl}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },

    alternates: {
      canonical: `${baseUrl}/blog/${post.slug}`,
    },
  };
}

// Generate static params for SSG
export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

// Enable ISR - revalidate every hour
export const revalidate = 3600;

export default async function BlogPost({ params }: PageProps) {
  const post = await getPost(params.slug);

  return (
    <article>
      <h1>{post.title}</h1>
      {/* Your content */}
    </article>
  );
}
```

---

## 5. Robots.txt

**File: `app/robots.ts`**

```typescript
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/", "/private/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/admin/", "/private/"],
        crawlDelay: 0,
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/admin/", "/private/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
```

---

## 6. Sitemap Generation

**File: `app/sitemap.ts`**

```typescript
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com";

  // Static routes
  const staticRoutes = ["", "/about", "/contact", "/services"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic routes (example: blog posts)
  const posts = await getPosts();
  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Combine all routes
  return [...staticRoutes, ...blogRoutes];
}

// Example getPosts function
async function getPosts() {
  // Replace with your actual data fetching logic
  return [
    {
      slug: "example-post",
      updatedAt: "2024-12-01",
    },
    // ... more posts
  ];
}
```

---

## 7. Web Manifest

**File: `app/manifest.ts`**

```typescript
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Your Full App Name",
    short_name: "App Name",
    description: "Your app description for PWA",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    orientation: "portrait",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
```

---

## 8. SEO Helper Functions

**File: `lib/metadata.ts`**

```typescript
import type { Metadata } from "next";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  keywords?: string[];
  noIndex?: boolean;
}

export function generateSEO({
  title,
  description,
  image = "/og-image.jpg",
  url = "",
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  keywords,
  noIndex = false,
}: SEOProps): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com";
  const fullUrl = `${baseUrl}${url}`;
  const fullImage = image.startsWith("http") ? image : `${baseUrl}${image}`;

  return {
    title,
    description,
    keywords,
    authors: authors?.map((name) => ({ name })),

    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: "Your Site Name",
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [fullImage],
      creator: "@yourhandle",
    },

    alternates: {
      canonical: fullUrl,
    },

    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
  };
}

// Helper for breadcrumb JSON-LD
export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com";

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  };
}

// Helper for article JSON-LD
export function generateArticleSchema(article: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: string;
  url: string;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com";

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: article.image.startsWith("http")
      ? article.image
      : `${baseUrl}${article.image}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Your Site Name",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}${article.url}`,
    },
  };
}
```

---

## 9. Structured Data (JSON-LD)

**File: `components/StructuredData.tsx`**

```typescript
interface StructuredDataProps {
  data: Record<string, any>;
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
```

**Usage in a blog post:**

```typescript
import { StructuredData } from "@/components/StructuredData";
import { generateArticleSchema } from "@/lib/metadata";

export default function BlogPost({ post }) {
  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: post.author,
    url: `/blog/${post.slug}`,
  });

  return (
    <>
      <StructuredData data={articleSchema} />
      <article>
        <h1>{post.title}</h1>
        {/* Content */}
      </article>
    </>
  );
}
```

**Organization Schema (for homepage):**

```typescript
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ryan Hell",
  url: "https://ryanhellfacts.com",
  logo: "https://ryryanhellfactsa/logo.png",
  description:
    "Ive been kidnapped and framed during a 911 call I made to get aid for a disabled woman while camping on the 4th of july.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "11015 10th ave sw",
    addressLocality: "Seattle",
    addressRegion: "WA",
    postalCode: "98144",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-267-777-2344",
    contactType: "Cell Phone",
  },
  sameAs: [
    "https://twitter.com/ryanhell",
    "https://linkedin.com/company/ryanhell",
    "https://facebook.com/ryanhell",
  ],
};
```

---

## 10. Image Optimization

**Always use Next.js Image component:**

```typescript
import Image from 'next/image'

// Above-the-fold image (LCP candidate)
<Image
  src="/hero-image.jpg"
  alt="Descriptive alt text for SEO and accessibility"
  width={1200}
  height={600}
  priority // Loads immediately, no lazy loading
  quality={90}
  placeholder="blur" // Requires blurDataURL or static import
/>

// Regular images
<Image
  src="/content-image.jpg"
  alt="Detailed description of the image content"
  width={800}
  height={600}
  quality={85}
  loading="lazy" // Default behavior
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>

// External images (requires remotePatterns in next.config.ts)
<Image
  src="https://example.com/image.jpg"
  alt="External image description"
  width={800}
  height={600}
  quality={85}
/>
```

**Update next.config.ts for external images:**

```typescript
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example.com",
        pathname: "/images/**",
      },
    ],
  },
};
```

---

## 11. Dokploy Configuration

### Docker Compose Configuration

**File: `docker-compose.yml`**

```yaml
version: "3.8"

services:
  nextjs-app:
    build:
      context: .
      dockerfile: Dockerfile
    restart: always
    ports:
      - "3000"
    networks:
      - dokploy-network
    environment:
      - NODE_ENV=production
      - NEXT_PUBLIC_SITE_URL=https://yourdomain.com
    labels:
      # Enable Traefik
      - "traefik.enable=true"

      # Main domain
      - "traefik.http.routers.myapp.rule=Host(`yourdomain.com`)"
      - "traefik.http.routers.myapp.entrypoints=websecure"
      - "traefik.http.routers.myapp.tls=true"
      - "traefik.http.routers.myapp.tls.certresolver=letsencrypt"
      - "traefik.http.services.myapp.loadbalancer.server.port=3000"

      # WWW to non-WWW redirect (301)
      - "traefik.http.routers.myapp-www.rule=Host(`www.yourdomain.com`)"
      - "traefik.http.routers.myapp-www.entrypoints=websecure"
      - "traefik.http.routers.myapp-www.tls=true"
      - "traefik.http.routers.myapp-www.tls.certresolver=letsencrypt"
      - "traefik.http.routers.myapp-www.middlewares=redirect-to-non-www"

      # Redirect middleware
      - "traefik.http.middlewares.redirect-to-non-www.redirectregex.regex=^https://www\\.(.*)"
      - "traefik.http.middlewares.redirect-to-non-www.redirectregex.replacement=https://$${1}"
      - "traefik.http.middlewares.redirect-to-non-www.redirectregex.permanent=true"

      # HTTP to HTTPS redirect
      - "traefik.http.routers.myapp-http.rule=Host(`yourdomain.com`) || Host(`www.yourdomain.com`)"
      - "traefik.http.routers.myapp-http.entrypoints=web"
      - "traefik.http.routers.myapp-http.middlewares=redirect-to-https"
      - "traefik.http.middlewares.redirect-to-https.redirectscheme.scheme=https"
      - "traefik.http.middlewares.redirect-to-https.redirectscheme.permanent=true"

networks:
  dokploy-network:
    external: true
```

### Dockerfile Optimization

**File: `Dockerfile`**

```dockerfile
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Set environment variables for build
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production

RUN npm run build

# Production image, copy all files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set correct permissions for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

### Environment Variables in Dokploy

In Dokploy dashboard, add these environment variables:

```
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_TELEMETRY_DISABLED=1
```

---

## 12. Performance & Core Web Vitals

### Optimize Loading Performance

**File: `app/layout.tsx`**

```typescript
import { Inter } from "next/font/google";

// Optimize font loading
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* DNS prefetch */}
        <link rel="dns-prefetch" href="https://analytics.google.com" />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### Lazy Load Components

```typescript
import dynamic from "next/dynamic";

// Lazy load heavy components
const HeavyComponent = dynamic(() => import("@/components/HeavyComponent"), {
  loading: () => <div>Loading...</div>,
  ssr: false, // If component doesn't need SSR
});

// Lazy load components that appear below the fold
const BelowFoldSection = dynamic(() => import("@/components/BelowFoldSection"));
```

### Enable Standalone Output

**Update next.config.ts:**

```typescript
const nextConfig: NextConfig = {
  output: "standalone", // Reduces image size significantly
  // ... other config
};
```

---

## 13. Post-Deployment Checklist

### Immediate Actions

- [ ] Submit sitemap to Google Search Console

  - Go to: https://search.google.com/search-console
  - Add property: yourdomain.com
  - Submit sitemap: https://yourdomain.com/sitemap.xml

- [ ] Submit sitemap to Bing Webmaster Tools

  - Go to: https://www.bing.com/webmasters
  - Submit sitemap: https://yourdomain.com/sitemap.xml

- [ ] Verify robots.txt is accessible

  - Check: https://yourdomain.com/robots.txt

- [ ] Test structured data
  - Google Rich Results Test: https://search.google.com/test/rich-results
  - Schema.org Validator: https://validator.schema.org/

### Performance Testing

- [ ] Run Lighthouse audit

  - Target scores: Performance 90+, SEO 95+, Accessibility 90+, Best Practices 90+

- [ ] Check Core Web Vitals

  - PageSpeed Insights: https://pagespeed.web.dev/
  - Target: LCP < 2.5s, FID < 100ms, CLS < 0.1

- [ ] Test mobile-friendliness

  - Google Mobile-Friendly Test: https://search.google.com/test/mobile-friendly

- [ ] Verify HTTPS and SSL
  - SSL Labs Test: https://www.ssllabs.com/ssltest/

### SEO Validation

- [ ] Check meta tags with browser dev tools
- [ ] Verify Open Graph tags (Facebook Sharing Debugger)
- [ ] Verify Twitter Cards (Twitter Card Validator)
- [ ] Check canonical URLs are correct
- [ ] Ensure no duplicate content issues
- [ ] Verify all images have alt text
- [ ] Check internal linking structure
- [ ] Test site search functionality (if applicable)

### Monitoring Setup

- [ ] Set up Google Analytics 4
- [ ] Enable Google Search Console monitoring
- [ ] Set up uptime monitoring (UptimeRobot, etc.)
- [ ] Configure error tracking (Sentry, etc.)

### Ongoing Maintenance

- [ ] Monitor Core Web Vitals monthly
- [ ] Update sitemap when adding new pages
- [ ] Review and fix crawl errors in Search Console
- [ ] Analyze search performance data
- [ ] Update metadata based on performance
- [ ] Keep dependencies updated
- [ ] Regular security audits

---

## Common SEO Issues & Solutions

### Issue: Pages not indexing

**Solutions:**

1. Check robots.txt isn't blocking pages
2. Verify sitemap includes all pages
3. Check for `noindex` meta tags
4. Ensure pages return 200 status code
5. Submit individual URLs in Search Console

### Issue: Poor Core Web Vitals

**Solutions:**

1. Optimize images (use Next.js Image component)
2. Reduce JavaScript bundle size
3. Use dynamic imports for heavy components
4. Enable text compression
5. Minimize layout shifts with size placeholders

### Issue: Duplicate content

**Solutions:**

1. Set canonical URLs properly
2. Use 301 redirects for old URLs
3. Implement proper URL structure
4. Avoid query parameter variations

### Issue: Slow page load

**Solutions:**

1. Enable standalone output in Next.js
2. Use CDN for static assets
3. Implement caching headers
4. Optimize database queries
5. Use ISR instead of SSR when possible

---

## Additional Resources

- Next.js SEO Documentation: https://nextjs.org/learn/seo
- Google Search Central: https://developers.google.com/search
- Web.dev (Core Web Vitals): https://web.dev/vitals/
- Schema.org: https://schema.org/
- Dokploy Documentation: https://docs.dokploy.com/

---

## Environment Variables Reference

Create `.env.local` for development:

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Other environment variables
NODE_ENV=development
```

Create `.env.production` for production:

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Other environment variables
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
```

---

**Document Version:** 1.0  
**Last Updated:** December 6, 2024  
**Compatible with:** Next.js 14+, TypeScript 5+, Dokploy

---

## Quick Start Commands

```bash
# Install dependencies
npm install next-sitemap

# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Generate sitemap (runs automatically after build)
npm run postbuild
```

---

_This guide provides a complete foundation for SEO-optimized Next.js applications. Customize configurations based on your specific requirements and regularly monitor performance metrics for continuous improvement._
