import React from 'react'
import { cn } from '../../lib/cn'

export interface SwitchProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'onChange'> {
  checked: boolean
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
}

export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({ className, checked, onCheckedChange, disabled, ...rest }, ref) => (
    <button
      ref={ref}
      type="button"
      role="switch"
      aria-checked={checked}
      data-state={checked ? 'checked' : 'unchecked'}
      data-slot="switch"
      disabled={disabled}
      onClick={() => !disabled && onCheckedChange?.(!checked)}
      className={cn(
        'inline-flex h-6.5 w-11 shrink-0 cursor-pointer items-center rounded-pill',
        'transition-colors duration-2 ease-out',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35',
        'disabled:cursor-not-allowed disabled:opacity-50',
        checked ? 'bg-primary' : 'bg-ink-200 dark:bg-ink-700',
        className,
      )}
      {...rest}
    >
      <span
        aria-hidden
        className={cn(
          'pointer-events-none block size-5.5 rounded-full bg-card shadow-1',
          'transition-transform duration-2 ease-spring',
          checked ? 'translate-x-5' : 'translate-x-0.5',
        )}
      />
    </button>
  ),
)

Switch.displayName = 'Switch'
