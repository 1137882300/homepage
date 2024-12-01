# Homepage Project

A modern static website built with Astro framework.

## Technology Stack

- Framework: Astro v4.8.2
- Language: TypeScript
- Styling: Tailwind CSS
- Package Manager: pnpm v9.12.2

## Project Structure

```
/src
├── assets/       # Static assets
├── collections/  # Data collections
├── components/   # Reusable components
├── content/      # Content files
├── layouts/      # Page layouts
└── pages/        # Page components
```

## Development Tools

- Code Quality: Biome
- IDE: VS Code
- CSS Enhancement: Tailwind Typography

## Getting Started

1. Install dependencies:
```bash
pnpm install
```

2. Available commands:
```bash
pnpm dev      # Start development server
pnpm build    # Build for production
pnpm preview  # Preview production build
pnpm check    # Run code checks
```

## Development

The project uses Astro's recommended project structure with TypeScript support. All source code is located in the `/src` directory.

## Analytics

The website uses multiple analytics solutions:

1. Google Analytics 4 for tracking visitor data. The tracking code is automatically injected into all pages during build time through the `astro.config.mjs` configuration:

```javascript
// astro.config.mjs
export default defineConfig({
  vite: {
    define: {
      'import.meta.env.HEADER_INJECT': JSON.stringify(`
        <!-- Google Analytics code -->
      `)
    }
  }
})
```

2. Vercel Analytics for privacy-focused web analytics. It's integrated using the `@vercel/analytics` package:

```astro
// src/layouts/main.astro
---
import Analytics from '@vercel/analytics/astro';
---
<Analytics />
```

git remote set-url origin https://github.com/airobus/homepage.git

```bash
pnpm install
pnpm run dev