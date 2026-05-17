import type { Story, StoryDefault } from '@ladle/react'
import { Button, type ButtonProps } from './Button'
import { Icon } from '../Icon'

export default {
  title: 'Components/Button',
} satisfies StoryDefault

export const Variants = () => (
  <div className="flex flex-wrap items-center gap-3">
    {(['default', 'destructive', 'outline', 'secondary', 'ghost', 'link', 'glass'] as const).map(
      (variant) => (
        <Button key={variant} variant={variant}>
          {variant}
        </Button>
      ),
    )}
  </div>
)

export const Sizes = () => (
  <div className="flex items-center gap-3">
    {(['sm', 'md', 'lg'] as const).map((size) => (
      <Button key={size} size={size}>
        {size}
      </Button>
    ))}
    <Button size="icon" aria-label="Settings">
      <Icon name="Settings" />
    </Button>
  </div>
)

export const WithIcon = () => (
  <Button>
    <Icon name="Search" />
    Buscar
  </Button>
)

export const Loading = () => <Button loading>Salvando...</Button>

export const Disabled = () => <Button disabled>Indisponível</Button>

export const Playground: Story<ButtonProps> = (args) => <Button {...args} />
Playground.args = {
  children: 'Label',
  variant: 'default',
  size: 'md',
  disabled: false,
  loading: false,
  fullWidth: false,
}
Playground.argTypes = {
  variant: {
    options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link', 'glass'],
    control: { type: 'select' },
  },
  size: {
    options: ['sm', 'md', 'lg', 'icon'],
    control: { type: 'select' },
  },
}
