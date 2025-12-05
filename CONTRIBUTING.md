# Contributing to WiffleStats

Thank you for your interest in contributing to WiffleStats! This document provides guidelines and instructions for contributing to this project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Code Standards](#code-standards)
- [Testing](#testing)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)

## Code of Conduct

This project follows standard open-source community guidelines:

- Be respectful and inclusive
- Provide constructive feedback
- Focus on what is best for the community
- Show empathy towards other contributors

## Getting Started

### Prerequisites

- Node.js 20+ (LTS recommended)
- npm 10+ or pnpm 8+
- Git
- A code editor (VS Code recommended)

### Initial Setup

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/wifflestats.git
   cd wifflestats
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/diegoruny/wifflestats.git
   ```

4. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:3000`

## Development Workflow

### Creating a Feature Branch

```bash
# Ensure you're on main and up to date
git checkout main
git pull upstream main

# Create a new branch for your feature
git checkout -b feature/your-feature-name
# or for bug fixes
git checkout -b fix/bug-description
```

### Making Changes

1. Make your changes in your feature branch
2. Follow the [Code Standards](#code-standards)
3. Write or update tests as needed
4. Ensure all checks pass (see below)

### Running Checks

Before committing, run all quality checks:

```bash
# Type checking
npm run typecheck

# Linting
npm run check
npm run lint

# Formatting
npm run format:check

# Tests
npm run test

# Full check (recommended before committing)
npm run check && npm run test && npm run typecheck
```

### Fixing Issues

```bash
# Auto-fix linting issues
npm run check:fix
npm run lint:fix

# Auto-fix formatting
npm run format:write
```

## Code Standards

### TypeScript

- **Strict mode**: All code must pass strict TypeScript checks
- **No `any`**: Avoid using `any` type; use proper types or `unknown`
- **Type imports**: Use `import type` for type-only imports
- **Explicit return types**: Add return types to exported functions

Example:
```typescript
// Good
import type { NavItem } from "@/types/nav"

export function getNavItems(): NavItem[] {
  return siteConfig.mainNav
}

// Bad
import { NavItem } from "@/types/nav"

export function getNavItems() {  // Missing return type
  return siteConfig.mainNav
}
```

### React Components

- **Functional components**: Use function declarations, not arrow functions
- **Props interface**: Define props interface above component
- **Client components**: Mark with `"use client"` only when needed
- **Composition**: Prefer composition over props drilling

Example:
```typescript
"use client"  // Only if needed

interface ButtonProps {
  children: React.ReactNode
  variant?: "default" | "outline"
  onClick?: () => void
}

export function Button({ children, variant = "default", onClick }: ButtonProps) {
  return (
    <button className={buttonVariants({ variant })} onClick={onClick}>
      {children}
    </button>
  )
}
```

### Styling

- **Tailwind CSS**: Use Tailwind utility classes
- **cn() utility**: Use `cn()` from `lib/utils` to merge classes
- **Mobile-first**: Write mobile styles first, then use breakpoints
- **Dark mode**: Use `dark:` variants for dark mode styles

Example:
```typescript
import { cn } from "@/lib/utils"

<div className={cn(
  "flex items-center gap-2",  // Base styles
  "sm:gap-4",                  // Mobile-first responsive
  "dark:bg-slate-900",         // Dark mode support
  className                     // User overrides
)} />
```

### File Organization

```
component-name/
├── component-name.tsx      # Component
├── component-name.test.tsx # Tests
└── index.ts                # Re-export (optional)
```

### Naming Conventions

- **Components**: PascalCase (`Button`, `DataTable`)
- **Functions**: camelCase (`getNavItems`, `calculateWinPercentage`)
- **Files**: kebab-case for utilities, PascalCase for components
- **Types**: PascalCase (`NavItem`, `SponsorCardProps`)
- **Constants**: UPPER_SNAKE_CASE (`API_BASE_URL`)

### JSDoc Comments

Add JSDoc comments to complex functions and exported utilities:

```typescript
/**
 * Calculates win percentage from wins and losses
 * @param wins - Number of games won
 * @param losses - Number of games lost
 * @returns Win percentage as a decimal (0-1)
 */
export function calculateWinPercentage(wins: number, losses: number): number {
  const totalGames = wins + losses
  return totalGames === 0 ? 0 : wins / totalGames
}
```

## Testing

### Writing Tests

- **Unit tests**: For utilities and pure functions
- **Component tests**: For UI components
- **Integration tests**: For page components (when needed)

### Test File Location

Place test files next to the code they test:

```
lib/
├── utils.ts
└── utils.test.ts

components/
├── Button.tsx
└── Button.test.tsx
```

### Test Structure

```typescript
import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"

describe("ComponentName", () => {
  it("should render correctly", () => {
    render(<ComponentName />)
    expect(screen.getByRole("button")).toBeInTheDocument()
  })

  it("should handle user interaction", () => {
    // Test implementation
  })
})
```

### Running Tests

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test -- --watch

# Run tests with coverage
npm run test -- --coverage

# Run tests with UI
npm run test:ui
```

## Commit Guidelines

### Commit Message Format

Follow conventional commits:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples

```bash
# Good commit messages
git commit -m "feat(table): add sorting functionality to data table"
git commit -m "fix(nav): resolve mobile menu not closing on route change"
git commit -m "docs(readme): update installation instructions"
git commit -m "test(utils): add tests for cn utility function"

# Bad commit messages
git commit -m "fixed stuff"
git commit -m "wip"
git commit -m "updates"
```

### Commit Best Practices

- Keep commits atomic (one logical change per commit)
- Write clear, descriptive commit messages
- Reference issues when applicable (`fixes #123`)
- Don't commit generated files or dependencies

## Pull Request Process

### Before Submitting

1. **Ensure all checks pass**:
   ```bash
   npm run typecheck && npm run check && npm run test
   ```

2. **Update documentation** if needed:
   - README.md for user-facing changes
   - ARCHITECTURE.md for architectural changes
   - JSDoc comments for new functions

3. **Add tests** for new features or bug fixes

4. **Update CHANGELOG.md** (if applicable)

### Creating a Pull Request

1. **Push your branch**:
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create PR on GitHub**:
   - Use a clear, descriptive title
   - Fill out the PR template
   - Link related issues

3. **PR Title Format**:
   ```
   feat(component): add dark mode support
   fix(api): resolve CORS issue
   docs: update contributing guidelines
   ```

### PR Description Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tests pass locally
- [ ] Added new tests
- [ ] Manual testing completed

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-reviewed code
- [ ] Commented complex code
- [ ] Updated documentation
- [ ] No new warnings
- [ ] Added tests
- [ ] All tests pass
```

### Review Process

1. **Automated checks** must pass (TypeScript, linting, tests)
2. **Code review** by maintainer(s)
3. **Address feedback** in new commits (don't force push)
4. **Squash merge** after approval

### After Your PR is Merged

1. **Delete your branch**:
   ```bash
   git checkout main
   git pull upstream main
   git branch -d feature/your-feature-name
   ```

2. **Update your fork**:
   ```bash
   git push origin main
   ```

## Additional Resources

### Useful Commands

```bash
# Update from upstream
git fetch upstream
git rebase upstream/main

# Stash changes
git stash
git stash pop

# View changes
git diff
git status

# Reset changes
git checkout -- <file>
git reset --hard origin/main
```

### Project Documentation

- [README.md](./README.md) - Project overview and setup
- [ARCHITECTURE.md](./ARCHITECTURE.md) - Technical architecture
- [Next.js Docs](https://nextjs.org/docs) - Framework documentation
- [Tailwind CSS Docs](https://tailwindcss.com/docs) - Styling
- [Radix UI Docs](https://www.radix-ui.com/docs/primitives) - Components
- [TanStack Query Docs](https://tanstack.com/query) - Data fetching

### Getting Help

- **Issues**: Check existing issues or create a new one
- **Discussions**: Use GitHub Discussions for questions
- **Discord**: (Add if applicable)

## License

By contributing, you agree that your contributions will be licensed under the same license as the project (MIT License).

---

Thank you for contributing to WiffleStats! 🥎
