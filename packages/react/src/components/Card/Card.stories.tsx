import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  args: {
    children: 'Conteúdo do card',
    variant: 'elevated',
  },
}

export default meta
type Story = StoryObj<typeof Card>

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', padding: 32, background: 'var(--ink-100)' }}>
      {(['flat', 'elevated', 'high', 'glass'] as const).map((variant) => (
        <Card key={variant} {...args} variant={variant} style={{ minWidth: 160 }}>
          <div style={{ font: '600 13px var(--font-sans)', color: 'var(--fg)', marginBottom: 4 }}>{variant}</div>
          <div style={{ font: '400 12px var(--font-sans)', color: 'var(--fg-muted)' }}>Card variant</div>
        </Card>
      ))}
    </div>
  ),
}
