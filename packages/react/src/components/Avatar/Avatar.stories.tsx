import type { StoryDefault } from '@ladle/react'
import { Avatar, AvatarFallback, AvatarImage } from './Avatar'

export default {
  title: 'Components/Avatar',
} satisfies StoryDefault

export const Tones = () => (
  <div className="flex items-center gap-3">
    {(['brand', 'warm', 'green', 'plum'] as const).map((tone) => (
      <Avatar key={tone} tone={tone}>
        <AvatarFallback>EF</AvatarFallback>
      </Avatar>
    ))}
  </div>
)

export const Sizes = () => (
  <div className="flex items-center gap-3">
    {(['sm', 'md', 'lg', 'xl'] as const).map((size) => (
      <Avatar key={size} size={size}>
        <AvatarFallback>EF</AvatarFallback>
      </Avatar>
    ))}
  </div>
)

export const WithImage = () => (
  <div className="flex items-center gap-3">
    <Avatar size="lg">
      <AvatarImage src="https://i.pravatar.cc/120?img=12" alt="Eric" />
    </Avatar>
    <Avatar size="lg">
      <AvatarFallback>EF</AvatarFallback>
    </Avatar>
  </div>
)
