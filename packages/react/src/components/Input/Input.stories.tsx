import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  args: {
    placeholder: 'Digite aqui...',
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: { label: 'E-mail', hint: 'Você nunca receberá spam.' },
}

export const WithIcon: Story = {
  args: { label: 'Buscar', icon: 'Search', placeholder: 'Pesquisar...' },
}

export const Error: Story = {
  args: { label: 'Senha', error: 'Senha incorreta. Tente novamente.', type: 'password' },
}

export const States: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 360 }}>
      <Input {...args} label="Default" />
      <Input {...args} label="Com ícone" icon="Mail" />
      <Input {...args} label="Com hint" hint="Mínimo 8 caracteres." />
      <Input {...args} label="Com erro" error="Campo obrigatório." />
    </div>
  ),
}
