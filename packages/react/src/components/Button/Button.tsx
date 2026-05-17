import React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/cn'
import { Icon } from '../Icon'

const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-pill font-semibold',
    'transition-[transform,box-shadow,background-color,color] duration-1 ease-out',
    'active:scale-[0.97]',
    'focus-visible:outline-none',
    'disabled:pointer-events-none disabled:opacity-50',
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-[1.1em] [&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow-2 hover:bg-brand-600',
        destructive:
          'bg-destructive text-destructive-foreground shadow-2 hover:bg-danger-700',
        outline:
          'bg-card text-brand-700 border border-brand-200 hover:bg-accent',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-muted',
        ghost:
          'bg-transparent text-foreground hover:bg-muted',
        link:
          'bg-transparent text-primary underline-offset-4 hover:underline',
        glass:
          'glass text-foreground rounded-pill border-white/80 hover:bg-glass-clear',
      },
      size: {
        sm:   'h-9  px-3.5 text-[13px]',
        md:   'h-10 px-4.5 text-sm',
        lg:   'h-12 px-5.5 text-[15px]',
        icon: 'size-10 p-0',
      },
      fullWidth: {
        true: 'w-full',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      fullWidth: false,
    },
  },
)

export type ButtonVariant = NonNullable<VariantProps<typeof buttonVariants>['variant']>
export type ButtonSize = NonNullable<VariantProps<typeof buttonVariants>['size']>

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, fullWidth, asChild = false, loading = false, disabled, children, ...rest },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, fullWidth }), className)}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        {...rest}
      >
        {loading && <Icon name="LoaderCircle" className="animate-spin" />}
        {children}
      </Comp>
    )
  },
)

Button.displayName = 'Button'

export { buttonVariants }
