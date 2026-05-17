import * as icons from 'lucide-react'
import type { LucideProps } from 'lucide-react'
import React from 'react'
import { cn } from '../../lib/cn'

export type LucideIconName = keyof typeof icons

export interface IconProps extends Omit<LucideProps, 'ref'> {
  name: LucideIconName
}

export const Icon = ({ name, size = 20, strokeWidth = 1.75, className, ...rest }: IconProps) => {
  const LucideIcon = icons[name] as React.ComponentType<LucideProps>
  return (
    <LucideIcon
      size={size}
      strokeWidth={strokeWidth}
      className={cn('shrink-0', className)}
      {...rest}
    />
  )
}

Icon.displayName = 'Icon'
