# Architecture Documentation

## Table of Contents

1. [Overview](#overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Component Hierarchy](#component-hierarchy)
5. [Data Flow](#data-flow)
6. [State Management](#state-management)
7. [Routing & Navigation](#routing--navigation)
8. [Styling Architecture](#styling-architecture)
9. [Type System](#type-system)
10. [Performance Optimizations](#performance-optimizations)
11. [Key Technical Decisions](#key-technical-decisions)

## Overview

WiffleStats is a modern, portfolio-quality statistics website built with Next.js 15 App Router, React 19, and TypeScript. The project demonstrates best practices in modern web development including strict type safety, component composition, server-side rendering, and performance optimization.

### Core Principles

- **Type Safety First**: Strict TypeScript configuration with no implicit any
- **Component Composition**: Reusable, accessible components built on Radix UI
- **Performance**: Optimized bundle size, image loading, and data fetching
- **Developer Experience**: Modern tooling with fast feedback loops
- **Accessibility**: WCAG 2.1 AA compliance through Radix UI primitives

## Technology Stack

### Frontend Framework
- **Next.js 15.1**: React framework with App Router for server-side rendering
- **React 19**: Latest React with automatic batching and transitions
- **TypeScript 5.7**: Strict type checking and modern language features

### State Management
- **TanStack Query v5**: Server state management with automatic caching and refetching
- **React Context**: Client-side state (theme, query client)

### UI & Styling
- **Tailwind CSS 3.4**: Utility-first CSS with custom design system
- **Radix UI**: Unstyled, accessible component primitives
- **Lucide React**: Icon library with tree-shaking support
- **Framer Motion**: Animation library (minimal usage)

### Data Management
- **TanStack Table v8**: Headless table library with sorting and pagination
- **Zod**: Runtime type validation for API responses

### Development Tools
- **Biome**: Fast linter and formatter (primary)
- **ESLint 9**: Additional linting with flat config
- **Vitest**: Fast unit test runner
- **React Testing Library**: Component testing utilities

## Project Structure

```
wifflestats/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with providers
│   ├── page.tsx                 # Home page (standings)
│   ├── players/
│   │   └── page.tsx             # Player statistics
│   └── teams/
│       └── page.tsx             # Team statistics
│
├── components/                   # React components
│   ├── ui/                      # Base UI components (Radix + shadcn)
│   │   ├── button.tsx           # Button primitive
│   │   ├── card.tsx             # Card layout
│   │   ├── data-table.tsx       # Generic table component
│   │   ├── tabs.tsx             # Tab navigation
│   │   ├── table.tsx            # Table primitives
│   │   ├── select.tsx           # Select dropdown
│   │   ├── sheet.tsx            # Slide-out panel
│   │   └── ...                  # Other UI components
│   │
│   ├── providers/               # Context providers
│   │   └── query-provider.tsx  # TanStack Query setup
│   │
│   ├── site-header.tsx          # Global header
│   ├── main-nav.tsx             # Desktop navigation
│   ├── HamburgerNav.tsx         # Mobile navigation
│   ├── theme-provider.tsx       # Dark mode provider
│   ├── theme-toggle.tsx         # Theme switcher
│   ├── statsLinkCards.tsx       # Home page CTAs
│   ├── sponsorsSection.tsx      # Sponsor display
│   ├── sponsorCard.tsx          # Individual sponsor
│   ├── alertmsg.tsx             # Disclaimer alert
│   └── icons.tsx                # Icon definitions
│
├── lib/                          # Utilities
│   ├── utils.ts                 # cn() helper for classnames
│   ├── fonts.ts                 # Google Fonts config
│   └── sponsors.ts              # Sponsor data
│
├── types/                        # TypeScript types
│   ├── nav.ts                   # Navigation types
│   └── sponsors.ts              # Sponsor types
│
├── config/                       # Configuration
│   └── site.ts                  # Site metadata
│
├── pages/api/                    # API routes (Pages Router)
│   ├── [range].ts               # Google Sheets proxy
│   └── individualHitting.ts     # Specific data endpoint
│
├── tests/                        # Test setup
│   └── setup.ts                 # Vitest config
│
├── public/                       # Static assets
│   ├── images/                  # Sponsor logos
│   └── *.{ico,jpg,png}          # Site assets
│
├── mock*.json                    # Mock data files
├── db.json                       # Standings data
│
└── Configuration files
    ├── next.config.mjs          # Next.js config
    ├── tailwind.config.js       # Tailwind config
    ├── tsconfig.json            # TypeScript config
    ├── biome.json               # Biome linter config
    ├── eslint.config.js         # ESLint config
    ├── vitest.config.ts         # Vitest config
    └── components.json          # shadcn config
```

### Folder Structure Rationale

**`/app` directory**: Uses Next.js 15 App Router for:
- Automatic route generation from file structure
- Server Components by default (better performance)
- Layouts and nested routing
- Streaming and Suspense support

**`/components` directory**: Organized by type:
- `/ui`: Reusable, generic UI primitives (shadcn pattern)
- `/providers`: React Context providers for app-wide state
- Root level: Feature-specific components

**`/lib` directory**: Pure functions and utilities that are:
- Framework-agnostic
- Testable in isolation
- Reusable across the application

**`/types` directory**: TypeScript definitions:
- Separated by domain (nav, sponsors, etc.)
- Co-located with their usage
- Exported for reuse

**`/config` directory**: Application configuration:
- Site metadata
- Navigation structure
- External links
- Easy to modify without touching components

**Mixed routing** (`/app` + `/pages/api`):
- App Router for pages (modern, RSC support)
- Pages Router for API routes (simpler for API endpoints)

## Component Hierarchy

```
RootLayout (app/layout.tsx)
├── HTML Shell
│   ├── <head> with metadata
│   └── <body> with font classes
│
└── Provider Stack
    ├── QueryProvider (TanStack Query)
    │   └── QueryClientProvider
    │       └── ReactQueryDevtools
    │
    └── ThemeProvider (next-themes)
        │
        ├── SiteHeader (global)
        │   ├── MainNav (desktop, ≥640px)
        │   │   ├── Logo + Site Name
        │   │   └── Navigation Links
        │   │
        │   ├── HamburgerNav (mobile, <640px)
        │   │   └── Sheet (slide-out menu)
        │   │       └── Navigation Links
        │   │
        │   ├── Social Links
        │   │   ├── GitHub
        │   │   └── Facebook
        │   │
        │   └── ThemeToggle
        │       ├── Sun icon (dark mode)
        │       └── Moon icon (light mode)
        │
        ├── Main Content ({children})
        │   └── [Page Component]
        │
        ├── Alert (global disclaimer)
        │   └── Privacy notice
        │
        └── TailwindIndicator (dev only)
```

### Page-Specific Hierarchies

**Home Page (`app/page.tsx`)**
```
HomePage
├── AspectRatio
│   └── Image (tournament logo)
│
├── Card (Season CTA)
│   ├── CardHeader
│   │   └── CardTitle ("2022 Season")
│   └── CardContent
│       └── CardDescription
│
├── DataTable (Standings)
│   ├── Table
│   │   ├── TableHeader
│   │   └── TableBody
│   │       └── TableRow[] (team standings)
│   └── Pagination Controls
│
├── StatsLinkCards
│   ├── Card (Player Stats)
│   └── Card (Team Stats)
│
└── SponsorsSection
    └── SponsorCard[]
        ├── CardHeader
        │   └── Image (sponsor logo)
        └── CardContent
            └── Link (sponsor website)
```

**Player/Team Stats Pages**
```
StatsPage
└── Tabs
    ├── TabsList
    │   ├── TabsTrigger (Hitting)
    │   └── TabsTrigger (Pitching)
    │
    └── TabsContent[]
        └── DataTable
            ├── Table
            │   ├── TableHeader (column names)
            │   └── TableBody (stat rows)
            └── Pagination Controls
```

### Component Design Patterns

**Composition Over Inheritance**
```tsx
// Components compose through children prop
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>
    {/* Content */}
  </CardContent>
</Card>
```

**Compound Components**
- Tab system: `<Tabs>`, `<TabsList>`, `<TabsTrigger>`, `<TabsContent>`
- Table system: `<Table>`, `<TableHeader>`, `<TableRow>`, `<TableCell>`
- Card system: `<Card>`, `<CardHeader>`, `<CardTitle>`, `<CardContent>`

**Headless UI Pattern** (via Radix UI)
- Logic and accessibility handled by Radix
- Styling applied via Tailwind
- Full customization without losing a11y

## Data Flow

### Current Data Flow (Mock Data)

```
Static JSON Files
    ├── db.json (standings)
    ├── mockPlayerHitting.json
    ├── mockPlayerPitching.json
    ├── mockTeamHitting.json
    └── mockTeamPitching.json
         ↓
    Page Components (Server/Client)
         ├── Direct import (Server Components)
         └── useState/useEffect (Client Components)
         ↓
    DataTable Component
         ↓
    TanStack Table (useReactTable)
         ├── Column definitions
         ├── Data rows
         ├── Pagination state
         └── Sorting/filtering (future)
         ↓
    Table UI Components
         ├── TableHeader (column names)
         ├── TableBody (rows with data)
         └── Pagination Controls
         ↓
    Rendered Table
```

### Future Data Flow (API Integration)

```
User Navigation
    ↓
Page Component
    ↓
TanStack Query Hook
    ├── useQuery({
    │     queryKey: ['players', 'hitting'],
    │     queryFn: () => fetch('/api/players/hitting'),
    │     staleTime: 60000,
    │     cacheTime: 600000
    │   })
    ↓
Cache Check
    ├── [HIT] → Return cached data
    └── [MISS] → Fetch from API
         ↓
    API Route (/pages/api/)
         ├── Google Sheets API call
         ├── Data transformation
         └── Return JSON
         ↓
    TanStack Query
         ├── Update cache
         ├── Revalidate on window focus
         └── Retry failed requests (3x)
         ↓
    Component Re-render
         ↓
    DataTable with fresh data
```

### Data Transformation Pipeline

```
Raw Data Source
    ↓
API Route Handler
    ├── Fetch from Google Sheets
    ├── Parse CSV-like structure
    ├── Map to typed objects
    ├── Calculate derived values
    │   └── Example: Win % = wins / (wins + losses)
    └── Filter null/empty values
    ↓
Type-safe JSON Response
    ↓
TanStack Query
    ├── Optional: Zod validation
    └── Cache with typed interface
    ↓
Component State
    ↓
Table Rendering
```

## State Management

### State Architecture

**Server State** (managed by TanStack Query):
- Player statistics
- Team statistics
- League standings
- Google Sheets data (future)

**Client State** (managed by React):
- Theme preference (dark/light mode)
- Pagination state (table pages)
- Tab selection (hitting/pitching)
- Mobile menu open/closed

**URL State** (managed by Next.js router):
- Current page (/players, /teams, /)
- Future: filters, sorting, search params

### TanStack Query Configuration

```typescript
// components/providers/query-provider.tsx

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,              // 1 minute - data considered fresh
      gcTime: 10 * 60 * 1000,            // 10 minutes - cache retention
      retry: (failureCount, error) => {
        // Don't retry 4xx errors (client errors)
        if (error.status >= 400 && error.status < 500) {
          return false
        }
        return failureCount < 3           // Retry network errors up to 3 times
      },
      refetchOnWindowFocus: false         // Don't refetch when tab gains focus
    },
    mutations: {
      retry: false                        // Don't retry mutations
    }
  }
})
```

**Key Decisions**:
- 1-minute stale time: balances freshness with reduced requests
- 10-minute cache: keeps data available for quick navigation
- Smart retry: avoids retrying client errors (404, 403, etc.)
- Disabled refetch on focus: stats don't change frequently

### Theme State (next-themes)

```
System Theme Detection
    ↓
ThemeProvider
    ├── Local Storage ("theme" key)
    ├── Default: system preference
    ├── Options: "light" | "dark" | "system"
    └── Provides theme context
    ↓
ThemeToggle Component
    ├── Read current theme
    ├── Toggle between themes
    └── Update localStorage + context
    ↓
CSS Class Application
    ├── <html class="dark"> or <html class="light">
    └── Tailwind dark: variants activate
    ↓
Visual Update (no flicker)
```

## Routing & Navigation

### Next.js App Router

**File-based Routing**:
```
app/
├── layout.tsx         → Applied to all routes
├── page.tsx           → /
├── players/
│   └── page.tsx       → /players
└── teams/
    └── page.tsx       → /teams
```

**Navigation Configuration** (`config/site.ts`):
```typescript
export const siteConfig = {
  name: "HCWL Stats",
  mainNav: [
    { title: "Home", href: "/" },
    { title: "Teams", href: "/teams" },
    { title: "Players", href: "/players" }
  ],
  links: {
    github: "...",
    facebook: "...",
    portfolioContact: "..."
  }
}
```

**Navigation Components**:
- Desktop: `MainNav` (always visible ≥640px)
- Mobile: `HamburgerNav` (sheet overlay <640px)
- Both consume same `siteConfig.mainNav` array

## Styling Architecture

### Tailwind CSS Setup

**Design System** (`tailwind.config.js`):
```javascript
{
  darkMode: "class",          // Manual dark mode via class
  theme: {
    extend: {
      colors: {
        // CSS custom properties for theming
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "hsl(var(--primary))",
        // ... more semantic colors
      }
    }
  }
}
```

**Custom Properties** (`app/globals.css`):
```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    /* ... light mode colors */
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    /* ... dark mode colors */
  }
}
```

### Component Styling Pattern

**cn() Utility** (`lib/utils.ts`):
```typescript
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
```

**Usage**:
```tsx
// Merge Tailwind classes with conflict resolution
<button
  className={cn(
    "bg-primary text-white",  // Base styles
    disabled && "opacity-50",  // Conditional
    className                  // User override
  )}
/>
```

### Responsive Design

**Mobile-First Approach**:
```tsx
// Base styles apply to mobile
// sm:, md:, lg: apply at breakpoints
<nav className="flex-col sm:flex-row md:gap-6">
  {/* Vertical on mobile, horizontal on tablet+ */}
</nav>
```

**Breakpoints**:
- `sm`: 640px (tablet)
- `md`: 768px (small laptop)
- `lg`: 1024px (desktop)
- `xl`: 1280px (large desktop)

## Type System

### TypeScript Configuration

**Strict Mode** (`tsconfig.json`):
```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noUncheckedIndexedAccess": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

### Type Definitions

**Navigation Types** (`types/nav.ts`):
```typescript
export interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
}
```

**Sponsor Types** (`types/sponsors.ts`):
```typescript
export type Sponsor = {
  name: string
  image: string
  link: string
}

export type SponsorCardProps = {
  sponsor: Sponsor
}
```

**Data Types** (to be added):
```typescript
// Future: types for stats data
export interface PlayerHittingStats {
  Player: string
  Team: string
  G: number
  AB: number
  R: number
  H: number
  HR: number
  RBI: number
  AVG: number
  // ...
}
```

## Performance Optimizations

### Next.js Optimizations

**Image Optimization**:
```tsx
import Image from "next/image"

<Image
  src={logo}
  alt="Logo"
  width={40}
  height={40}
  // Automatic optimization:
  // - WebP/AVIF conversion
  // - Responsive sizing
  // - Lazy loading
/>
```

**Package Import Optimization** (`next.config.mjs`):
```javascript
experimental: {
  optimizePackageImports: [
    '@radix-ui/react-icons',
    'lucide-react',
    '@tanstack/react-table'
  ]
}
```
Reduces bundle size by tree-shaking unused exports.

**Font Optimization** (`lib/fonts.ts`):
```typescript
import { Inter, JetBrains_Mono } from "next/font/google"

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",  // Prevents flash of invisible text
  variable: "--font-inter"
})
```

### Component Optimizations

**Server Components** (default in App Router):
- Rendered on server
- Zero JavaScript sent to client
- Better initial load performance
- Used for: layouts, static content

**Client Components** (marked with `"use client"`):
- Interactive components only
- Used for: theme toggle, tables with state, navigation

**Code Splitting**:
- Automatic route-based splitting
- Each page loads only its dependencies
- Shared chunks for common code

### Caching Strategy

**TanStack Query**:
```typescript
queryClient.setQueryDefaults(['players'], {
  staleTime: 60000,      // Don't refetch for 1 minute
  gcTime: 600000         // Keep in cache for 10 minutes
})
```

**Next.js**:
- Static pages cached at build time
- API routes can use `revalidate` for ISR
- Image CDN caching via Vercel

## Key Technical Decisions

### Why Next.js 15 App Router?

**Pros**:
- Server Components by default (better performance)
- Streaming and Suspense support
- Simplified data fetching
- Built-in TypeScript support
- File-based routing

**Trade-offs**:
- Steeper learning curve (Server vs Client)
- API routes still in Pages Router (simpler for now)

### Why TanStack Query?

**Pros**:
- Automatic caching and refetching
- Built-in loading and error states
- Request deduplication
- Optimistic updates (future)
- DevTools for debugging

**Alternatives Considered**:
- SWR: Similar but less feature-rich
- Native fetch: No caching, more boilerplate
- Redux: Overkill for server state

### Why Radix UI + Tailwind?

**Pros**:
- Accessibility built-in (WCAG 2.1 AA)
- Headless: full style control
- Composable components
- Great TypeScript support

**Alternatives Considered**:
- Material UI: Too opinionated, large bundle
- Chakra UI: Good but larger bundle
- Headless UI: Similar but smaller ecosystem

### Why Biome over Prettier + ESLint?

**Pros**:
- Single tool for linting + formatting
- 10-100x faster than ESLint
- Zero config needed
- Great TypeScript support

**Trade-offs**:
- Newer tool, smaller ecosystem
- Still using ESLint for Next.js-specific rules

### Why Mock Data?

**Reasons**:
- Privacy: original data had real names
- Self-contained: works without external APIs
- Fast development: no API setup needed
- Demo-ready: works in any environment

**Future**: Google Sheets API integration is stubbed out in `/pages/api`.

### Why Vitest over Jest?

**Pros**:
- Much faster (uses Vite)
- ESM support out of the box
- Same API as Jest (easy migration)
- Better TypeScript support

**Trade-offs**:
- Smaller ecosystem than Jest
- Fewer resources/tutorials

## Future Architecture Improvements

### Planned Enhancements

**Data Layer**:
- [ ] Add Zod schemas for runtime validation
- [ ] Implement proper error boundaries
- [ ] Add loading skeletons (Suspense)
- [ ] Connect Google Sheets API

**State Management**:
- [ ] Add URL state for filters/sorting
- [ ] Persist table preferences (page size, etc.)
- [ ] Add optimistic updates for mutations

**Performance**:
- [ ] Add route prefetching
- [ ] Implement virtual scrolling for large tables
- [ ] Add service worker for offline support

**Testing**:
- [ ] Increase test coverage to 80%+
- [ ] Add E2E tests (Playwright)
- [ ] Add visual regression tests

**Accessibility**:
- [ ] Add keyboard shortcuts
- [ ] Improve screen reader support
- [ ] Add skip links

---

**Last Updated**: December 2025
**Maintainer**: Diego Delgado
**Version**: 1.0.0
