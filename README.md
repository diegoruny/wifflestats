# Haynies Corner Wiffleball League Stats

An unofficial statistics website for the Haynies Corner Wiffleball League, a local community league in Evansville, IN. This project showcases team standings, player statistics, and game results with a modern, responsive interface.

> **Note**: This is an archived portfolio project and is no longer in active development.

## Overview

This web application provides a comprehensive statistics tracking system for a local wiffleball league, featuring real-time standings, detailed player performance metrics, and team analytics. The project demonstrates modern web development practices with Next.js, TypeScript, and a component-based architecture.

## Features

- **League Standings**: Interactive table showing team rankings with win/loss records and win percentages
- **Player Statistics**: Detailed hitting and pitching stats for individual players
- **Team Analytics**: Comprehensive team-level hitting and pitching statistics
- **Dark Mode Support**: Toggle between light and dark themes
- **Responsive Design**: Mobile-first design that works on all devices
- **Modern UI**: Built with Radix UI and Tailwind CSS for a polished user experience

## Technology Stack

### Core
- **Next.js 14.2** - React framework with App Router and server components
- **React 18.2** - UI library
- **TypeScript 5.1** - Type-safe JavaScript

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible headless UI components
- **shadcn/ui** - High-quality React component library
- **Lucide React** - Icon library

### Data & State
- **TanStack React Query** - Data fetching and caching
- **TanStack React Table** - Table component for data display
- **Google Sheets API** - Data source integration

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript ESLint** - TypeScript-specific linting

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/diegoruny/wifflestats.git
cd wifflestats
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Build

Create a production build:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix linting issues
- `npm run typecheck` - Run TypeScript type checking
- `npm run format:write` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Project Structure

```
wifflestats/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page with standings
│   ├── players/           # Player statistics page
│   └── teams/             # Team statistics page
├── components/            # React components
│   ├── ui/               # UI components (shadcn/ui)
│   ├── site-header.tsx   # Site header with navigation
│   └── ...
├── config/               # Configuration files
│   └── site.ts          # Site configuration
├── lib/                 # Utility functions
├── types/               # TypeScript type definitions
├── public/              # Static assets
└── db.json             # Mock database (2022 Season data)
```

## Known Issues

- **Sharp Dependency**: The `sharp` image optimization package may fail to install in certain environments due to proxy restrictions. This is a known issue with the sharp binary download and does not affect core functionality.

## Disclaimer

This is an educational portfolio project. The brands, logos, and team names are property of their respective owners and have been used for educational purposes only. This is not an official project of the Haynies Corner Wiffleball League.

## License

This project is for portfolio demonstration purposes.

## Contact

Diego Delgado - [Portfolio](https://diegodelgado.dev/contact) - [GitHub](https://github.com/diegoruny)

## Acknowledgments

- Haynies Corner Wiffleball League community
- Haynies Corner Arts District
- All players and supporters of the league
