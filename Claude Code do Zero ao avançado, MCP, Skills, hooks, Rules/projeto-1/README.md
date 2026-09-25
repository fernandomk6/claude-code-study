# Estudando Claude Code

Projeto de estudo usando Next.js, criado para explorar recursos do Claude Code (CLAUDE.md, MCP, Skills, hooks e rules).

## Tech Stack

- Next.js 16 (App Router), React 19, TypeScript
- TailwindCSS 4, shadcn/ui
- React Hook Form + Zod (validação)
- Server Component First

## Getting Started

Copie o arquivo de variáveis de ambiente:

```bash
cp .env.example .env.local
```

Rode o servidor de desenvolvimento:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para ver o resultado.

## Scripts

- `npm run dev` — servidor local (porta 3000)
- `npm run build` — build de produção
- `npm run start` — inicia o build de produção
- `npm run lint` — roda o ESLint

## Estrutura do Projeto

- `app/` — rotas (App Router), agrupadas por `(grupo)/`
- `components/ui/` — primitivos reutilizáveis (shadcn)
- `components/` — componentes de feature
- `actions/` — Server Actions (mutações)
- `lib/` — helpers e clients (supabase, stripe, etc.)
- `types/` — tipos globais e schemas Zod compartilhados

## Convenções de Código

- Server Components por padrão — `'use client'` só quando necessário (hooks/eventos/browser APIs)
- Mutações via Server Actions — nunca acessar o banco direto em Client Components
- Sem `any` explícito — usar `unknown` + type guard
- Tailwind only, sem CSS inline ou styled-components
- Nomes de arquivo em kebab-case; componentes em PascalCase

Mais detalhes em [CLAUDE.md](./CLAUDE.md).

## Learn More

Para aprender mais sobre Next.js, veja:

- [Next.js Documentation](https://nextjs.org/docs) — recursos e API do Next.js.
- [Learn Next.js](https://nextjs.org/learn) — tutorial interativo.

## Deploy

A forma mais simples de fazer deploy é usando a [Vercel Platform](https://vercel.com/new), dos criadores do Next.js. Veja a [documentação de deploy](https://nextjs.org/docs/app/building-your-application/deploying) para mais detalhes.
