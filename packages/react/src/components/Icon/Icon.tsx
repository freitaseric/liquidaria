import * as icons from 'lucide-react'
import type { LucideProps } from 'lucide-react'
import React from 'react'

export type LucideIconName = keyof typeof icons

export interface IconProps extends Omit<LucideProps, 'ref'> {
    name: LucideIconName
}

export const Icon = ({ name, size = 20, strokeWidth = 1.75, color = 'currentColor', ...rest }: IconProps) => {
    const LucideIcon = icons[name] as React.ComponentType<LucideProps>
    return <LucideIcon size={size} strokeWidth={strokeWidth} color={color} {...rest} />
}

Icon.displayName = 'Icon'