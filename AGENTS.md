# Repository Guidelines

## Project Structure & Module Organization
This repo is a `pnpm` workspace (`apps/*`, `packages/*`).
- `apps/web`: Next.js app (App Router). Main source is in `apps/web/src`.
- `apps/web/src/app`: route entrypoints (`layout.tsx`, `page.tsx`).
- `apps/web/src/components` and `apps/web/src/components/ui`: feature and shared UI components.
- `apps/web/src/lib`: small shared utilities (for example, `cn` helpers).
- `packages/db/src`: Drizzle ORM schema and DB access code.
- `packages/env/src`: shared environment validation/types.
- `packages/config`: shared TypeScript base config.

## Build, Test, and Development Commands
- `pnpm install`: install workspace dependencies.
- `pnpm run dev`: run all workspace `dev` scripts.
- `pnpm run dev:web`: run only the web app (`apps/web`).
- `pnpm run build`: build all packages/apps.
- `pnpm run check-types`: run TypeScript checks across the workspace.
- `pnpm run check`: run `oxlint` and apply `oxfmt --write`.
- `pnpm run db:local | db:push | db:generate | db:migrate | db:studio`: local DB and Drizzle workflows (via `@blog/db`).

## Coding Style & Naming Conventions
Use TypeScript with strict settings from `@blog/config/tsconfig.base.json`.
- Formatting/linting: Oxfmt + Oxlint (`pnpm run check`).
- Match existing style: 2-space indentation, semicolons, double quotes.
- React component names: `PascalCase`; file names in `apps/web/src/components` are typically kebab-case (for example, `mode-toggle.tsx`).
- Prefer path aliases like `@/components/...` inside `apps/web`.

## Testing Guidelines
There is currently no dedicated `test` script or framework configured.
- Minimum validation for every change: `pnpm run check-types` and `pnpm run check`.
- For UI changes, also verify manually in `pnpm run dev:web` (default: `http://localhost:3001`).
- If you add tests, place them near source files using `*.test.ts`/`*.test.tsx` and add a package script.

## Commit & Pull Request Guidelines
Current history follows a Conventional Commit style (example: `chore: add skills`).
- Commit format: `<type>: <short summary>` (for example, `feat: add post card skeleton`).
- Keep commits scoped and atomic.
- PRs should include: what changed, why, commands run locally, and screenshots for UI changes.
- Call out DB schema/env changes explicitly in the PR description.

## Security & Configuration Tips
- Keep secrets in local env files (for example, `apps/web/.env`); do not commit credentials.
- Prefer `pnpm run db:local` for local development instead of pointing at shared production data.
