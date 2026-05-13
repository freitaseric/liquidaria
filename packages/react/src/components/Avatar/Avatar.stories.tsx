import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './Avatar'

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  args: {
    initials: 'EF',
    size: 40,
    tone: 'brand',
  },
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Tones: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      {(['brand', 'warm', 'green', 'plum'] as const).map((tone) => (
        <Avatar key={tone} {...args} tone={tone} />
      ))}
    </div>
  ),
}

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      {([24, 32, 40, 48, 56] as const).map((size) => (
        <Avatar key={size} {...args} size={size} />
      ))}
    </div>
  ),
}
