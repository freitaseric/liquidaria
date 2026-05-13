# @liquidaria/tokens

CSS design tokens for the [Liquidaria Design System](https://github.com/ericfreitas/liquidaria).

## Installation

```bash
npm install @liquidaria/tokens
# or
pnpm add @liquidaria/tokens
```

## Usage

Import once at your app entry point. All tokens are exposed as CSS custom properties on `:root`.

```ts
import '@liquidaria/tokens'
```

Or import the CSS file directly:

```css
@import '@liquidaria/tokens/css';
```

## Token reference

### Colors — Brand

```css
--brand-50  … --brand-900   /* blue scale */
--brand-ink                  /* deepest brand ink */
```

### Colors — Neutrals

```css
--ink-0  … --ink-1000   /* cool-leaning neutral scale */
```

### Colors — Semantic

```css
--success-50 … --success-700
--warning-50 … --warning-700
--danger-50  … --danger-700
--info-50    … --info-700
```

### Colors — Surface & Glass

```css
--bg          /* page background */
--bg-elev     /* elevated surface (cards) */
--fg          /* primary foreground */
--fg-muted    /* secondary foreground */
--fg-subtle   /* tertiary foreground */
--border      /* default border */
--border-strong

--glass-frost /* glass surface fill */
--glass-edge  /* glass border */
```

### Elevation

```css
--shadow-1 … --shadow-4
--shadow-glass
```

### Typography

```css
--font-sans   /* Geist */
--font-mono   /* Geist Mono */
--font-serif  /* Newsreader */
```

### Motion

```css
--dur-1  --dur-2  --dur-3
--ease-out  --ease-spring
```

## Token source of truth

`src/colors_and_type.css` is the authoritative copy. When tokens change here, the copy at `liquidaria-marketplace/plugins/liquidaria-ds/colors_and_type.css` must be updated manually.
