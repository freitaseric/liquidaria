# @liquidaria/react

React component library for the [Liquidaria Design System](https://github.com/ericfreitas/liquidaria).

## Installation

```bash
npm install @liquidaria/react lucide-react
# or
pnpm add @liquidaria/react lucide-react
```

Peer dependencies: `react >= 18`, `react-dom >= 18`, `lucide-react >= 0.400.0`.

## Usage

```tsx
import { Button, Input, Card } from '@liquidaria/react'
// CSS tokens are loaded automatically as a side effect

export default function App() {
  return (
    <Card variant="elevated">
      <Input label="Email" placeholder="you@example.com" />
      <Button variant="primary" icon="ArrowRight">Continue</Button>
    </Card>
  )
}
```

## Components

### `Icon`

Renders any [Lucide](https://lucide.dev) icon by PascalCase name.

```tsx
<Icon name="Search" size={20} strokeWidth={1.75} />
```

### `Button`

```tsx
<Button variant="primary" size="md" icon="Plus">New item</Button>
```

| Prop | Type | Default |
|------|------|---------|
| `variant` | `'primary' \| 'ink' \| 'secondary' \| 'ghost' \| 'danger' \| 'glass'` | `'primary'` |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` |
| `icon` | `LucideIconName` | — |
| `iconRight` | `LucideIconName` | — |
| `full` | `boolean` | `false` |

### `Input`

```tsx
<Input label="Password" type="password" error="Incorrect password." />
```

| Prop | Type |
|------|------|
| `label` | `string` |
| `hint` | `string` |
| `error` | `string` |
| `icon` | `LucideIconName` |

### `Card`

```tsx
<Card variant="glass">…</Card>
```

Variants: `flat` · `elevated` · `high` · `glass`

### `Pill`

```tsx
<Pill tone="success" dot>Active</Pill>
```

Tones: `neutral` · `brand` · `success` · `warning` · `danger` · `info`

### `Avatar`

```tsx
<Avatar initials="EF" tone="brand" size={40} />
<Avatar src="/photo.jpg" size={40} />
```

Tones: `brand` · `warm` · `green` · `plum`

### `Switch`

```tsx
<Switch checked={on} onChange={setOn} label="Notifications" />
```

### `Toast`

```tsx
<Toast tone="success" title="Saved" body="Your changes were saved." onDismiss={dismiss} />
```

Tones: `neutral` · `success` · `dark`

## TypeScript

All components are written in strict TypeScript, export their prop interfaces, and forward refs to the underlying DOM element.

```tsx
import type { ButtonProps, ButtonVariant } from '@liquidaria/react'
```
