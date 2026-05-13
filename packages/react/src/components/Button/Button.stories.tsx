import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Label',
    variant: 'primary',
    size: 'md',
    disabled: false,
    full: false,
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
      {(['primary', 'ink', 'secondary', 'ghost', 'danger'] as const).map((variant) => (
        <Button key={variant} {...args} variant={variant}>{variant}</Button>
      ))}
    </div>
  ),
}

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <Button key={size} {...args} size={size}>{size}</Button>
      ))}
    </div>
  ),
}

export const WithIcon: Story = {
  args: { icon: 'Search', children: 'Buscar' },
}

export const Disabled: Story = {
  args: { disabled: true },
}
