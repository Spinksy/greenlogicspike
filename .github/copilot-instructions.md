# AI Agent Instructions for Green Logic Solar Energy Website

## Project Overview
This is an Astro-based website for Green Logic Solar Energy, built on the Pinwheel template. It uses TypeScript, React components, TailwindCSS, and a content-driven architecture with structured markdown frontmatter.

## Architecture & Key Patterns

### Content-First Architecture
- **Content Collections**: Defined in `src/content.config.ts` with strict Zod schemas
- **Content Structure**: Each collection (homepage, about, blog, careers, etc.) has specific schema requirements
- **File Naming**: Special files use `-index.md` pattern for collection entries
- **Frontmatter-Driven**: All page content is controlled via YAML frontmatter with structured data

### Component Architecture
- **Astro Components**: Layout components in `src/layouts/components/` (e.g., `Banner.astro`, `KeyFeatures.astro`)
- **React Function Components**: Interactive components in `src/layouts/function-components/` 
- **Shortcodes**: Reusable components auto-imported via astro-auto-import in `src/layouts/shortcodes/`
- **Hybrid Rendering**: Astro components handle layout, React handles interactivity with `client:load`

### Icon System Pattern
Icons use React Feather with a specific convention:
```jsx
import * as Icon from "react-feather";
const FeatherIcon = Icon[humanize(item.icon)]; // Converts "battery-charging" → "BatteryCharging"
```
- Use lowercase kebab-case in markdown: `icon: "battery-charging"`
- The `humanize()` function converts to PascalCase for React Feather component names
- Available icons: https://feathericons.com/

### Configuration System
- **Site Config**: `src/config/config.json` for site metadata, contact info, and global settings
- **Theme Config**: `src/config/theme.json` for colors, fonts, and design tokens
- **Menu Config**: `src/config/menu.json` for navigation structure
- **Custom Tailwind Plugin**: `src/tailwind-plugin/tw-theme.js` generates CSS custom properties from theme.json

## Development Workflows

### Content Updates
1. Edit markdown files in `src/content/[collection]/`
2. Follow the Zod schema from `src/content.config.ts`
3. Use `-index.md` for main collection pages
4. Reference images from `public/images/` with `/images/` prefix

### Component Development
1. **Astro Components**: For layout and SSG content rendering
2. **React Components**: For client-side interactivity, placed in `function-components/`
3. **Shortcodes**: For reusable content blocks, auto-imported via astro.config.mjs

### Styling Approach
- **TailwindCSS**: Primary styling framework
- **Custom Properties**: Theme colors/fonts defined in `tw-theme.js` plugin
- **Component Classes**: Use semantic class combinations, not single-purpose utilities
- **Responsive Design**: Mobile-first with `md:` and `lg:` breakpoints

## Project-Specific Conventions

### File Organization
```
src/
├── content/           # Markdown content with frontmatter schemas
├── layouts/
│   ├── components/    # Astro layout components  
│   ├── function-components/ # React interactive components
│   └── shortcodes/    # Auto-imported reusable components
├── pages/            # Astro file-based routing
├── config/           # JSON configuration files
└── lib/utils/        # Utility functions (textConverter.ts)
```

### Content Schema Patterns
- All collections require `title`, `meta_title?`, `description?`
- Use `z.object()` for nested structures, `z.array()` for lists
- Icons referenced as strings, converted via `humanize()` function
- Images use relative paths from `public/` directory

### React Integration Points
- Components requiring client-side JS use `client:load` directive
- React components import from `@/` alias (src/ directory)
- Props passed from Astro frontmatter to React via component attributes

## Common Tasks

### Adding New Icons
1. Find icon name at https://feathericons.com/
2. Use kebab-case in markdown: `icon: "trending-up"`
3. Icon automatically resolves via `humanize()` to `TrendingUp` component

### Creating New Content Types
1. Add schema to `src/content.config.ts`
2. Create collection directory in `src/content/`
3. Add corresponding Astro page in `src/pages/`
4. Import and use data with `getEntry()` or `getCollection()`

### Theme Customization
1. Update colors/fonts in `src/config/theme.json`
2. Custom properties auto-generate via `tw-theme.js` plugin
3. Use theme colors with `bg-primary`, `text-secondary`, etc.

## Build & Development
- **Dev**: `npm run dev` - Astro dev server with hot reload
- **Build**: `npm run build` - Static site generation  
- **Preview**: `npm run preview` - Preview production build
- **Deployment**: Configured for Netlify (see netlify.toml)
