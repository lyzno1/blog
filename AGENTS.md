# AGENTS.md

Practical guide for working in this repo.

## Stack & Structure

- Monorepo: pnpm workspace + ESM (`"type": "module"`)
- App: `apps/web` (Next.js 16, App Router, React 19, Tailwind v4, shadcn/ui)
- Shared packages (bottom -> top):
  - `@blog/config` (tsconfig bases)
  - `@blog/env` (T3 Env + Zod validation)
  - `@blog/db` (Drizzle + SQLite/Turso)

## Daily Commands

```bash
pnpm dev
pnpm dev:web
pnpm build

pnpm check
pnpm lint
pnpm lint:strict
pnpm format
pnpm format:check
pnpm check-types

pnpm db:push
pnpm db:generate
pnpm db:migrate
pnpm db:studio
pnpm db:local
```

## Dependency Management

This repo uses a flat pnpm catalog.

```bash
pnpm add <pkg> --save-catalog
pnpm add -D <pkg> --save-catalog
```

Run in the target package directory.

## Must-Follow Conventions

- Formatter/linter: Oxfmt + Oxlint (not ESLint/Prettier/Biome)
- Format style: tabs, double quotes, 120 char line width
- Prefer named exports (avoid default exports)
- Use `import type` for type-only imports
- Prefer `type` over `interface` (unless declaration merging is needed)
- No `forEach`; use `for...of` or array methods
- No floating promises; always handle promises (`Promise.all` when independent)
- Conditional rendering in React: use ternary, not `&&`
- React Compiler is enabled: avoid manual `useMemo` / `useCallback`

## Env Rules

- Server env requires: `DATABASE_URL`, `DATABASE_AUTH_TOKEN`
- When adding env vars, update both:
  - `packages/env/src/server.ts` or `packages/env/src/web.ts`
  - corresponding `.env.example`

## Validation Before Finish

Minimum checks for every change:

```bash
pnpm run check-types
pnpm run check
```

For UI changes, also verify manually with:

```bash
pnpm run dev:web
```

Default URL: `http://localhost:3000`

## Commits & PRs

- Commit format: `<type>: <short summary>` (Conventional Commit style)
- Keep commits small and scoped
- PR should include:
  - what changed
  - why
  - commands run locally
  - screenshots for UI changes
- Call out DB schema or env changes explicitly

## Security

- Keep secrets in local env files (for example `apps/web/.env`)
- Do not commit credentials
- Prefer `pnpm run db:local` for local development data
