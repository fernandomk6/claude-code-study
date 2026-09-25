# Estudando Claude Code

Projeto de teste criado para o curso **Claude Code do Zero ao Avançado** (MCP, Skills, hooks e rules). É uma landing page simples em Next.js usada como sandbox para explorar, na prática, como o Claude Code se comporta em um projeto real: como ele lê e segue `CLAUDE.md`, como aplica `rules`, como consome `skills` e `agents`, e como usa servidores MCP durante o desenvolvimento.

> Não é um produto — o objetivo é o processo de desenvolvimento assistido, não a página em si.

## Tech Stack

- Next.js 16 (App Router), React 19, TypeScript
- TailwindCSS 4, shadcn/ui
- React Hook Form + Zod (validação)
- Server Component First

## Getting Started

Instale as dependências e rode o servidor de desenvolvimento:

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para ver o resultado.

## Scripts

- `npm run dev` — servidor local (porta 3000)
- `npm run build` — build de produção
- `npm run start` — inicia o build de produção
- `npm run lint` — roda o ESLint

## Estrutura do Projeto

- `app/` — rotas (App Router); hoje contém a landing page (`page.tsx`, `layout.tsx`)
- `components/` — seções da landing page (`hero`, `about`, `services`, `contact`, `site-footer`)
- `components/ui/` — primitivos reutilizáveis (shadcn), conforme forem adicionados
- `actions/` — Server Actions (mutações), conforme forem adicionadas
- `lib/` — helpers e clients (supabase, stripe, etc.), conforme forem adicionados
- `types/` — tipos globais e schemas Zod compartilhados

## Convenções de Código

- Server Components por padrão — `'use client'` só quando necessário (hooks/eventos/browser APIs)
- Mutações via Server Actions — nunca acessar o banco direto em Client Components
- Sem `any` explícito — usar `unknown` + type guard
- Tailwind only, sem CSS inline ou styled-components
- Nomes de arquivo em kebab-case; componentes em PascalCase

Mais detalhes em [CLAUDE.md](./CLAUDE.md).

## Configuração do Claude Code

Este repositório é o próprio material de estudo. Os pontos de entrada usados pelo Claude Code durante o curso são:

- [`CLAUDE.md`](./CLAUDE.md) — contexto do projeto, stack, comandos e convenções lidos automaticamente pelo Claude Code
- [`.claude/rules/`](./.claude/rules/) — regras adicionais de projeto (estrutura de páginas, padrões de UI, DAL/actions)
- [`.claude/skills/`](./.claude/skills/) e [`.agents/skills/`](./.agents/skills/) — skills instaladas para apoiar tarefas específicas (design de UI, boas práticas de performance React/Next.js)
- [`AGENTS.md`](./AGENTS.md) — instruções específicas para agentes (ex.: avisos sobre breaking changes do Next.js usado no curso)

## Learn More

Para aprender mais sobre Next.js, veja:

- [Next.js Documentation](https://nextjs.org/docs) — recursos e API do Next.js.
- [Learn Next.js](https://nextjs.org/learn) — tutorial interativo.

## Deploy

A forma mais simples de fazer deploy é usando a [Vercel Platform](https://vercel.com/new), dos criadores do Next.js. Veja a [documentação de deploy](https://nextjs.org/docs/app/building-your-application/deploying) para mais detalhes.
