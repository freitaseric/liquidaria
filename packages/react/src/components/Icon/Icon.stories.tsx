import type { Story, StoryDefault } from '@ladle/react'
import { Icon, type IconProps } from './Icon'

export default {
  title: 'Components/Icon',
} satisfies StoryDefault

export const Sizes = () => (
  <div className="flex items-center gap-4">
    {([16, 20, 24, 32] as const).map((size) => (
      <Icon key={size} name="Search" size={size} />
    ))}
  </div>
)

export const Sampler = () => (
  <div className="flex flex-wrap gap-4">
    {(
      ['Search', 'Bell', 'Settings', 'User', 'ArrowRight', 'Check', 'X', 'Eye', 'Plus', 'Moon', 'Sun'] as const
    ).map((name) => (
      <Icon key={name} name={name} />
    ))}
  </div>
)

export const Colored = () => (
  <div className="flex items-center gap-4">
    <Icon name="Heart" className="text-primary" />
    <Icon name="Heart" className="text-success-700" />
    <Icon name="Heart" className="text-warning-700" />
    <Icon name="Heart" className="text-destructive" />
    <Icon name="Heart" className="text-muted-foreground" />
  </div>
)

export const Playground: Story<IconProps> = (args) => <Icon {...args} />
Playground.args = {
  name: 'Search',
  size: 20,
  strokeWidth: 1.75,
}
