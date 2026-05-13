import type { Meta, StoryObj } from '@storybook/react'
import { Pill } from './Pill'

const meta: Meta<typeof Pill> = {
  title: 'Components/Pill',
  component: Pill,
  args: {
    children: 'Label',
    tone: 'neutral',
  },
}

export default meta
type Story = StoryObj<typeof Pill>

export const Tones: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
      {(['neutral', 'brand', 'success', 'warning', 'danger', 'info'] as const).map((tone) => (
        <Pill key={tone} {...args} tone={tone}>{tone}</Pill>
      ))}
    </div>
  ),
}

export const WithDot: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      {(['success', 'warning', 'danger'] as const).map((tone) => (
        <Pill key={tone} {...args} tone={tone} dot>{tone}</Pill>
      ))}
    </div>
  ),
}

export const Active: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 8 }}>
      <Pill {...args} tone="neutral">Inativo</Pill>
      <Pill {...args} tone="neutral" active>Ativo</Pill>
    </div>
  ),
}
