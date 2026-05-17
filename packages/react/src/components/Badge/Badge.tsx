import React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/cn'

const badgeVariants = cva(
  [
    'inline-flex items-center gap-1.5 rounded-pill border px-2.5 py-1',
    'text-xs font-semibold whitespace-nowrap',
    'transition-colors duration-1 ease-out',
    "[&_svg]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        default:     'bg-accent text-accent-foreground border-brand-200',
        secondary:   'bg-secondary text-secondary-foreground border-border',
        outline:     'bg-transparent text-foreground border-border',
        success:     'bg-success-50 text-success-700 border-transparent',
        warning:     'bg-warning-50 text-warning-700 border-transparent',
        destructive: 'bg-danger-50 text-danger-700 border-transparent',
        info:        'bg-info-50 text-info-700 border-transparent',
        solid:       'bg-foreground text-background border-transparent',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export type BadgeVariant = NonNullable<VariantProps<typeof badgeVariants>['variant']>

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean
  dot?: boolean
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, asChild = false, dot, children, ...rest }, ref) => {
    const Comp = asChild ? Slot : 'span'
    return (
      <Comp
        ref={ref}
        data-slot="badge"
        className={cn(badgeVariants({ variant }), className)}
        {...rest}
      >
        {dot && <span aria-hidden className="size-1.5 rounded-full bg-current opacity-70" />}
        {children}
      </Comp>
    )
  },
)

Badge.displayName = 'Badge'

export { badgeVariants }
