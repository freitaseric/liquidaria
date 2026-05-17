import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/cn'

const avatarVariants = cva(
  'relative inline-flex items-center justify-center overflow-hidden rounded-full text-primary-foreground font-semibold shrink-0 select-none',
  {
    variants: {
      tone: {
        brand: 'bg-gradient-to-br from-brand-400 to-brand-600',
        warm:  'bg-gradient-to-br from-warning-500 to-warning-700',
        green: 'bg-gradient-to-br from-success-500 to-success-700',
        plum:  'bg-gradient-to-br from-[#B07FF8] to-[#7140B4]',
      },
      size: {
        sm: 'size-8  text-xs',
        md: 'size-10 text-sm',
        lg: 'size-14 text-base',
        xl: 'size-20 text-xl',
      },
    },
    defaultVariants: {
      tone: 'brand',
      size: 'md',
    },
  },
)

export type AvatarTone = NonNullable<VariantProps<typeof avatarVariants>['tone']>
export type AvatarSize = NonNullable<VariantProps<typeof avatarVariants>['size']>

export interface AvatarProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof avatarVariants> {}

export const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
  ({ className, tone, size, ...rest }, ref) => (
    <span
      ref={ref}
      data-slot="avatar"
      className={cn(avatarVariants({ tone, size }), className)}
      {...rest}
    />
  ),
)
Avatar.displayName = 'Avatar'

export type AvatarImageProps = React.ImgHTMLAttributes<HTMLImageElement>

export const AvatarImage = React.forwardRef<HTMLImageElement, AvatarImageProps>(
  ({ className, alt = '', ...rest }, ref) => (
    <img
      ref={ref}
      alt={alt}
      data-slot="avatar-image"
      className={cn('size-full object-cover', className)}
      {...rest}
    />
  ),
)
AvatarImage.displayName = 'AvatarImage'

export type AvatarFallbackProps = React.HTMLAttributes<HTMLSpanElement>

export const AvatarFallback = React.forwardRef<HTMLSpanElement, AvatarFallbackProps>(
  ({ className, ...rest }, ref) => (
    <span
      ref={ref}
      data-slot="avatar-fallback"
      className={cn(
        'flex size-full items-center justify-center tracking-tighter',
        className,
      )}
      {...rest}
    />
  ),
)
AvatarFallback.displayName = 'AvatarFallback'

export { avatarVariants }
