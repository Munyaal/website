# AGENTS.md

## Project Overview
Astro + Tailwind v4 static site for munyaal.com.mx (marketing website for Luums and iLogs products).

## Commands
- `npm run dev` - Start dev server at localhost:4321
- `npm run build` - Build to `./dist/`
- `npm run preview` - Preview production build locally

## Deployment
Push to `main` triggers CI/CD to DigitalOcean Kubernetes:
1. Builds `dockerfile.prod` → DigitalOcean Container Registry
2. Deploys to `munyaal` namespace, `munyaal-web` deployment

## Key Files
- `src/layouts/Layout.astro` - Base layout
- `src/pages/` - Route pages (index, about, contact, luums, ilogs)
- `src/components/` - Reusable components
- `src/utils/contants.ts` - Constants (note: typo in filename)

## Notes
- Uses Tailwind v4 via Vite plugin (no tailwind.config.js needed)
- No lint/typecheck/test scripts configured
- File `src/utils/contants.ts` has typo (should be "constants")