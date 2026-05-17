import React from 'react'
import { cn } from '../../lib/cn'

export type FieldProps = React.HTMLAttributes<HTMLDivElement>

export const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  ({ className, ...rest }, ref) => (
    <div ref={ref} className={cn('flex flex-col gap-1.5', className)} {...rest} />
  ),
)
Field.displayName = 'Field'

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...rest }, ref) => (
    <label
      ref={ref}
      className={cn(
        'text-sm font-medium text-foreground',
        'peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
        className,
      )}
      {...rest}
    />
  ),
)
Label.displayName = 'Label'

export type FieldDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>

export const FieldDescription = React.forwardRef<HTMLParagraphElement, FieldDescriptionProps>(
  ({ className, ...rest }, ref) => (
    <p ref={ref} className={cn('text-xs text-muted-foreground', className)} {...rest} />
  ),
)
FieldDescription.displayName = 'FieldDescription'

export type FieldErrorProps = React.HTMLAttributes<HTMLParagraphElement>

export const FieldError = React.forwardRef<HTMLParagraphElement, FieldErrorProps>(
  ({ className, children, ...rest }, ref) =>
    children ? (
      <p
        ref={ref}
        role="alert"
        className={cn('text-xs font-medium text-destructive', className)}
        {...rest}
      >
        {children}
      </p>
    ) : null,
)
FieldError.displayName = 'FieldError'
