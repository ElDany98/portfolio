# Portfolio Profesional — Guía para Agentes IA

## Stack
- Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
- Neon PostgreSQL serverless + Drizzle ORM
- Cloudflare Pages (deploy)

## Convenciones
- Componentes en `src/components/` (ui/, sections/, layout/, shared/)
- Datos estáticos en `src/lib/data/` (skills, projects, experience)
- DB schema en `src/lib/db/schema.ts`
- API routes en `src/app/api/`
- Paleta de colores personalizada en `globals.css` con @theme
- Sin shadcn/ui instalado (componentes propios)
