import React from 'react'
import { cn } from '../../lib/cn'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', ...rest }, ref) => (
    <input
      ref={ref}
      type={type}
      data-slot="input"
      className={cn(
        'flex h-11 w-full rounded-md border border-border-strong bg-card px-3.5 py-2.5',
        'text-base text-foreground placeholder:text-muted-foreground',
        'shadow-1 transition-[border-color,box-shadow] duration-1 ease-out',
        'focus-visible:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring/35',
        'aria-invalid:border-destructive aria-invalid:text-destructive aria-invalid:focus-visible:ring-destructive/30',
        'file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...rest}
    />
  ),
)

Input.displayName = 'Input'
