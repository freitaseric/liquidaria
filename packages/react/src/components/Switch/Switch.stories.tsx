import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from './Switch'

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  args: {
    label: 'Notificações',
    checked: false,
  },
}

export default meta
type Story = StoryObj<typeof Switch>

export const Playground: Story = {
  render: (args) => {
    const [checked, setChecked] = React.useState(args.checked)
    return <Switch {...args} checked={checked} onChange={setChecked} />
  },
}

export const States: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Switch {...args} checked={false} label="Desativado" />
      <Switch {...args} checked={true} label="Ativado" />
      <Switch {...args} checked={false} disabled label="Desativado (disabled)" />
      <Switch {...args} checked={true} disabled label="Ativado (disabled)" />
    </div>
  ),
}
