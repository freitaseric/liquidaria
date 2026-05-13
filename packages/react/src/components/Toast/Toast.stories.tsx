import type { Meta, StoryObj } from '@storybook/react'
import { Toast } from './Toast'
import { Button } from '../Button'

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  args: {
    tone: 'neutral',
    title: 'Operação concluída',
    body: 'Suas alterações foram salvas com sucesso.',
  },
}

export default meta
type Story = StoryObj<typeof Toast>

export const Tones: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 480 }}>
      {(['neutral', 'success', 'dark'] as const).map((tone) => (
        <Toast key={tone} {...args} tone={tone} onDismiss={() => {}} />
      ))}
    </div>
  ),
}

export const WithAction: Story = {
  args: {
    tone: 'neutral',
    title: 'Arquivo excluído',
    body: undefined,
    action: <Button variant="ghost" size="sm">Desfazer</Button>,
    onDismiss: () => {},
  },
}
