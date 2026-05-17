import React from 'react'
import { Toaster as SonnerToaster, type ToasterProps } from 'sonner'
import { cn } from '../../lib/cn'

export type LiquidariaToasterProps = ToasterProps

export const Toaster = ({ className, toastOptions, ...rest }: LiquidariaToasterProps) => {
  const [theme, setTheme] = React.useState<ToasterProps['theme']>('light')

  React.useEffect(() => {
    if (typeof document === 'undefined') return
    const update = () => {
      setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light')
    }
    update()
    const observer = new MutationObserver(update)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  return (
    <SonnerToaster
      theme={theme}
      className={cn('toaster group', className)}
      toastOptions={{
        ...toastOptions,
        classNames: {
          toast: cn(
            'group toast pointer-events-auto flex w-full max-w-120 items-center gap-3 rounded-lg p-4 shadow-4',
            'bg-card text-card-foreground border border-border',
            toastOptions?.classNames?.toast,
          ),
          title: cn('text-sm font-semibold leading-snug', toastOptions?.classNames?.title),
          description: cn(
            'text-[13px] leading-snug text-muted-foreground',
            toastOptions?.classNames?.description,
          ),
          actionButton: cn(
            'inline-flex h-8 items-center justify-center rounded-pill bg-primary px-3 text-xs font-semibold text-primary-foreground',
            toastOptions?.classNames?.actionButton,
          ),
          cancelButton: cn(
            'inline-flex h-8 items-center justify-center rounded-pill bg-secondary px-3 text-xs font-semibold text-secondary-foreground',
            toastOptions?.classNames?.cancelButton,
          ),
          closeButton: cn(
            'absolute right-2 top-2 inline-flex size-7 items-center justify-center rounded-md text-current opacity-60 hover:opacity-100',
            toastOptions?.classNames?.closeButton,
          ),
          icon: cn('text-current', toastOptions?.classNames?.icon),
          success: cn(
            'group-data-[type=success]:bg-card group-data-[type=success]:[&_[data-icon]]:text-success-700',
            toastOptions?.classNames?.success,
          ),
          error: cn(
            'group-data-[type=error]:bg-card group-data-[type=error]:[&_[data-icon]]:text-destructive',
            toastOptions?.classNames?.error,
          ),
          warning: cn(
            'group-data-[type=warning]:bg-card group-data-[type=warning]:[&_[data-icon]]:text-warning-700',
            toastOptions?.classNames?.warning,
          ),
          info: cn(
            'group-data-[type=info]:bg-card group-data-[type=info]:[&_[data-icon]]:text-info-700',
            toastOptions?.classNames?.info,
          ),
        },
      }}
      {...rest}
    />
  )
}

Toaster.displayName = 'Toaster'

export { toast } from 'sonner'
export type { ExternalToast } from 'sonner'
