import type { Meta, StoryObj } from '@storybook/react'
import { Icon } from './Icon'

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  args: {
    name: 'Search',
    size: 20,
    strokeWidth: 1.75,
    color: 'currentColor',
  },
}

export default meta
type Story = StoryObj<typeof Icon>

export const Playground: Story = {}

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      {([16, 20, 24, 32] as const).map((size) => (
        <Icon key={size} {...args} size={size} />
      ))}
    </div>
  ),
}

export const Sampler: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      {(['Search', 'Bell', 'Settings', 'User', 'ArrowRight', 'Check', 'X', 'Eye', 'Plus', 'Moon', 'Sun'] as const).map((name) => (
        <Icon key={name} {...args} name={name} />
      ))}
    </div>
  ),
}
