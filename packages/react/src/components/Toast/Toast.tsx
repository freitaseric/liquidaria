import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/cn'
import { Icon } from '../Icon'
import type { LucideIconName } from '../Icon'

const toastVariants = cva(
  'flex max-w-120 items-center gap-3 rounded-lg p-4 shadow-4',
  {
    variants: {
      variant: {
        default:     'bg-card text-card-foreground border border-border',
        success:     'bg-card text-card-foreground border border-border',
        warning:     'bg-card text-card-foreground border border-border',
        destructive: 'bg-card text-card-foreground border border-border',
        info:        'bg-card text-card-foreground border border-border',
        solid:       'bg-foreground text-background border-transparent',
        glass:       'glass text-foreground rounded-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

const iconWrapVariants = cva(
  'inline-flex size-8 items-center justify-center rounded-full shrink-0',
  {
    variants: {
      variant: {
        default:     'bg-accent text-accent-foreground',
        success:     'bg-success-50 text-success-700',
        warning:     'bg-warning-50 text-warning-700',
        destructive: 'bg-danger-50 text-danger-700',
        info:        'bg-info-50 text-info-700',
        solid:       'bg-white/10 text-current',
        glass:       'bg-accent text-accent-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

const defaultIcon: Record<NonNullable<VariantProps<typeof toastVariants>['variant']>, LucideIconName> = {
  default:     'Bell',
  success:     'Check',
  warning:     'TriangleAlert',
  destructive: 'CircleX',
  info:        'Info',
  solid:       'Bell',
  glass:       'Bell',
}

export type ToastVariant = NonNullable<VariantProps<typeof toastVariants>['variant']>

export interface ToastProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof toastVariants> {
  title: string
  description?: string
  icon?: LucideIconName | null
  action?: React.ReactNode
  onDismiss?: () => void
}

export const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  ({ className, variant, title, description, icon, action, onDismiss, ...rest }, ref) => {
    const resolvedVariant = variant ?? 'default'
    const iconName = icon === null ? null : icon ?? defaultIcon[resolvedVariant]

    return (
      <div
        ref={ref}
        role="status"
        aria-live="polite"
        data-slot="toast"
        className={cn(toastVariants({ variant }), className)}
        {...rest}
      >
        {iconName && (
          <div className={cn(iconWrapVariants({ variant }))}>
            <Icon name={iconName} className="size-4" />
          </div>
        )}
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold leading-snug">{title}</p>
          {description && (
            <p className="mt-0.5 text-[13px] text-muted-foreground leading-snug">
              {description}
            </p>
          )}
        </div>
        {action}
        {onDismiss && (
          <button
            type="button"
            onClick={onDismiss}
            aria-label="Fechar"
            className="inline-flex size-7 shrink-0 items-center justify-center rounded-md text-current opacity-60 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35"
          >
            <Icon name="X" className="size-4" />
          </button>
        )}
      </div>
    )
  },
)

Toast.displayName = 'Toast'

export { toastVariants }
