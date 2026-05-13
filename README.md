# Liquidaria

Monorepo for the **Liquidaria Design System** component library.

## Packages

| Package | Version | Description |
|---------|---------|-------------|
| [`@liquidaria/tokens`](packages/tokens) | [![npm](https://img.shields.io/npm/v/@liquidaria/tokens)](https://www.npmjs.com/package/@liquidaria/tokens) | CSS design tokens |
| [`@liquidaria/react`](packages/react) | [![npm](https://img.shields.io/npm/v/@liquidaria/react)](https://www.npmjs.com/package/@liquidaria/react) | React component library |

## Apps

| App | Description |
|-----|-------------|
| [`apps/docs`](apps/docs) | Storybook — component playground and documentation |

## Development

Requires **Node ≥ 20** and **pnpm ≥ 9**.

```bash
pnpm install       # install all dependencies
pnpm dev           # build packages in watch mode + start Storybook
pnpm build         # build all packages
pnpm test          # run all tests
```

To work on a specific package:

```bash
pnpm --filter @liquidaria/react dev
pnpm --filter @liquidaria/docs dev
```

## Publishing

Releases use [Changesets](https://github.com/changesets/changesets).

```bash
pnpm changeset          # describe what changed
pnpm version-packages   # bump versions + generate changelogs
pnpm release            # build + publish to npm
```

## Design constraints

- Colors: only tokens defined in `packages/tokens/src/colors_and_type.css`
- Contrast: WCAG AA everywhere; 16px body floor; 44px touch-target floor
- Icons: Lucide outline, stroke 1.75, `currentColor`
- `.glass` variant: floating surfaces only — never static body cards
- Focus rings are never removed
