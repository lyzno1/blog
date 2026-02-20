// Needed when TypeScript `noUncheckedSideEffectImports` is enabled.
// Next.js already handles CSS at runtime; this only satisfies TS module resolution for side-effect CSS imports.
declare module "*.css" {}
