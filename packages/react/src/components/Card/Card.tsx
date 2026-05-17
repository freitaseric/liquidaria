import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/cn'

const cardVariants = cva(
  'rounded-lg border border-transparent text-card-foreground',
  {
    variants: {
      variant: {
        flat:     'bg-card border-border',
        elevated: 'bg-card shadow-2',
        high:     'bg-card shadow-4',
        glass:    'glass rounded-lg',
      },
    },
    defaultVariants: {
      variant: 'elevated',
    },
  },
)

export type CardVariant = NonNullable<VariantProps<typeof cardVariants>['variant']>

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, ...rest }, ref) => (
    <div
      ref={ref}
      data-slot="card"
      className={cn(cardVariants({ variant }), 'flex flex-col gap-4 p-6', className)}
      {...rest}
    />
  ),
)
Card.displayName = 'Card'

export const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...rest }, ref) => (
    <div ref={ref} data-slot="card-header" className={cn('flex flex-col gap-1.5', className)} {...rest} />
  ),
)
CardHeader.displayName = 'CardHeader'

export const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...rest }, ref) => (
    <h3
      ref={ref}
      data-slot="card-title"
      className={cn('text-lg font-semibold leading-snug text-foreground', className)}
      {...rest}
    />
  ),
)
CardTitle.displayName = 'CardTitle'

export const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...rest }, ref) => (
    <p
      ref={ref}
      data-slot="card-description"
      className={cn('text-sm text-muted-foreground', className)}
      {...rest}
    />
  ),
)
CardDescription.displayName = 'CardDescription'

export const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...rest }, ref) => (
    <div ref={ref} data-slot="card-content" className={cn('', className)} {...rest} />
  ),
)
CardContent.displayName = 'CardContent'

export const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...rest }, ref) => (
    <div
      ref={ref}
      data-slot="card-footer"
      className={cn('flex items-center gap-3 pt-2', className)}
      {...rest}
    />
  ),
)
CardFooter.displayName = 'CardFooter'

export { cardVariants }
