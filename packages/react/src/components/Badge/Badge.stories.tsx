import type { StoryDefault } from '@ladle/react'
import { Badge } from './Badge'

export default {
  title: 'Components/Badge',
} satisfies StoryDefault

export const Variants = () => (
  <div className="flex flex-wrap items-center gap-2">
    {(
      ['default', 'secondary', 'outline', 'success', 'warning', 'destructive', 'info', 'solid'] as const
    ).map((variant) => (
      <Badge key={variant} variant={variant}>
        {variant}
      </Badge>
    ))}
  </div>
)

export const WithDot = () => (
  <div className="flex flex-wrap gap-2">
    {(['success', 'warning', 'destructive'] as const).map((variant) => (
      <Badge key={variant} variant={variant} dot>
        {variant}
      </Badge>
    ))}
  </div>
)
