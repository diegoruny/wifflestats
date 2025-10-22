🥎 Haynies Corner Wiffleball League Stats

⚠️ Project Archived - Disclaimer

This project is now archived and is no longer under active development.

This is an educational portfolio project. The brands, logos, and team names are property of their respective owners and have been used for educational purposes only. This is not an official project of the Haynies Corner Wiffleball League.

A modern, fast, and accessible statistics website for the Haynies Corner Wiffleball League in Evansville, IN. Built with the latest web technologies for optimal performance and developer experience.

✨ Features

📊 Comprehensive Stats: Player and team hitting/pitching statistics

🌙 Dark Mode: System-aware theme switching

📱 Responsive Design: Mobile-first, works on all devices

⚡ Fast Loading: Optimized with Next.js 15 and React 19

🔍 Type Safety: Full TypeScript coverage

♿ Accessibility: Built with Radix UI components

🧪 Testing Ready: Vitest setup with React Testing Library

🔧 Developer Experience: Modern tooling with Biome and ESLint v9

🚀 Technology Stack (2025)

Core Framework

Next.js 15.1 - Latest React framework with Turbopack

React 19 - Latest React with new features

TypeScript 5.7 - Strict type safety

Data & State Management

TanStack Query v5 - Server state management with React 19 support

TanStack React Table v8 - Powerful table component

Zod - Runtime type validation

UI & Styling

Tailwind CSS 3.4 - Utility-first CSS framework

Radix UI - Accessible headless components

Lucide React - Modern icon library

Framer Motion - Animation library

Development & Quality

Biome - Fast linter and formatter

ESLint v9 - Modern linting with flat config

Vitest - Fast unit testing

React Testing Library - Component testing

Prettier - Code formatting

Performance & Security

Sharp - Image optimization

Security Headers - XSS and CSRF protection

Bundle Analysis - Optimized imports

🛠️ Getting Started

Prerequisites

Node.js 20+ (LTS recommended)

npm 10+ or pnpm 8+

Installation

# Clone the repository
git clone [https://github.com/diegoruny/wifflestats.git](https://github.com/diegoruny/wifflestats.git)
cd wifflestats

# Install dependencies
npm install

# Start development server with Turbopack
npm run dev

# Or with pnpm (recommended for speed)
pnpm install
pnpm dev


Development Scripts

# Development with Turbopack (faster)
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Type checking
npm run typecheck

# Linting and formatting
npm run check          # Biome check
npm run check:fix      # Biome fix
npm run lint           # ESLint check
npm run lint:fix       # ESLint fix

# Testing
npm run test           # Run tests
npm run test:ui        # Run tests with UI

# Code formatting
npm run format:check   # Check formatting
npm run format:write   # Fix formatting


🏗️ Project Structure

wifflestats/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page
│   ├── players/           # Player stats page
│   └── teams/             # Team stats page
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   ├── providers/        # React context providers
│   └── ...               # Feature components
├── lib/                  # Utilities and configurations
├── types/                # TypeScript type definitions
├── tests/                # Test setup and utilities
├── mock*.json            # Mock data files
└── ...config files


🧪 Testing

This project uses Vitest for fast unit testing and React Testing Library for component testing:

# Run all tests
npm run test

# Run tests with UI (interactive)
npm run test:ui

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage


Example Test

import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { QueryProvider } from '@/components/providers/query-provider'
import Players from '@/app/players/page'

describe('Players Page', () => {
  it('renders player statistics', () => {
    render(
      <QueryProvider>
        <Players />
      </QueryProvider>
    )

    expect(screen.getByText('Stats by Players')).toBeInTheDocument()
  })
})


🔧 Configuration

TypeScript

Strict TypeScript configuration with latest features:

{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noUncheckedIndexedAccess": true,
    "moduleResolution": "bundler",
    "target": "es2022"
  }
}


Next.js 15

Modern configuration with performance optimizations:

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['@radix-ui/react-icons', 'lucide-react'],
    turbo: { /* Turbopack rules */ }
  }
}


📝 API Integration

The app supports both mock data and live API integration:

// Mock data (development)
import mockPlayerHitting from './mockPlayerHitting.json'

// Live API (production)
const response = await fetch('/api/players/hitting')
const data = await response.json()


Google Sheets Integration

For live data, configure Google Sheets API:

Create a Google Cloud project

Enable Google Sheets API

Create service account credentials

Share your sheet with the service account email

Add credentials to environment variables

🚦 Performance

This modernized stack provides:

Fast Development: Turbopack dev server

Type Safety: 100% TypeScript coverage

Bundle Optimization: Tree-shaking and code splitting

Image Optimization: Next.js Image component with WebP/AVIF

Caching: Smart query caching with TanStack Query

Security: Modern security headers

🤝 Contributing

Fork the repository

Create your feature branch (git checkout -b feature/amazing-feature)

Make your changes with proper TypeScript types

Add tests for new features

Run the full check: npm run check && npm run test && npm run build

Commit your changes (git commit -m 'Add amazing feature')

Push to the branch (git push origin feature/amazing-feature)

Open a Pull Request

📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

🙏 Acknowledgments

Haynies Corner Wiffleball League - For the inspiration and data

Vercel - For hosting and deployment

Next.js Team - For the amazing framework

TanStack - For excellent data fetching tools

Radix UI - For accessible components

Built with ❤️ by Diego using the latest 2025 web technologies.

Clone the repository:

git clone [https://github.com/diegoruny/wifflestats.git](https://github.com/diegoruny/wifflestats.git)
cd wifflestats


Install dependencies:

npm install


Development

Run the development server:

npm run dev


Open http://localhost:3000 in your browser to see the application.

Build

Create a production build:

npm run build


Start the production server:

npm start


Available Scripts

npm run dev - Start development server

npm run build - Create production build

npm start - Start production server

npm run lint - Run ESLint

npm run lint:fix - Fix linting issues

npm run typecheck - Run TypeScript type checking

npm run format:write - Format code with Prettier

npm run format:check - Check code formatting

Project Structure

wifflestats/
├── app/                         # Next.js App Router pages
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page with standings
│   ├── players/                # Player statistics page
│   └── teams/                  # Team statistics page
├── components/                  # React components
│   ├── ui/                     # UI components (shadcn/ui)
│   ├── site-header.tsx         # Site header with navigation
│   └── ...
├── config/                      # Configuration files
│   └── site.ts                 # Site configuration
├── lib/                         # Utility functions
├── types/                       # TypeScript type definitions
├── public/                      # Static assets
├── db.json                      # Standings data (2022 Season)
├── mockPlayerHitting.json       # Player hitting statistics (fictional data)
├── mockPlayerPitching.json      # Player pitching statistics (fictional data)
├── mockTeamHitting.json         # Team hitting statistics (fictional data)
└── mockTeamPitching.json        # Team pitching statistics (fictional data)


Data Structure

This project uses fictional mockup data for all statistics to ensure privacy and make the project self-contained:

League Standings (db.json) - Team win/loss records for the 2022 season

Player Statistics - Individual hitting and pitching stats with fictional player names

Team Statistics - Aggregated hitting and pitching stats by team

All player names and statistics are fictional and generated for demonstration purposes. The team names are preserved from the original league structure.

Known Issues

Sharp Dependency: The sharp image optimization package may fail to install in certain environments due to proxy restrictions. This is a known issue with the sharp binary download and does not affect core functionality.

License

This project is for portfolio demonstration purposes.

Contact

Diego Delgado - Portfolio - GitHub

Acknowledgments

Haynies Corner Wiffleball League community

Haynies Corner Arts District

All players and supporters of the league
