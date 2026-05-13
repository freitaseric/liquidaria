import React from 'react'
import { Icon } from '../Icon'

export type ToastTone = 'neutral' | 'success' | 'dark'

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: ToastTone
  title: string
  body?: string
  onDismiss?: () => void
  action?: React.ReactNode
}

const tones: Record<ToastTone, { bg: string; color: string; border?: string; iconBg: string; iconColor: string }> = {
  neutral: { bg: '#fff',              color: 'var(--fg)', border: '1px solid var(--border)', iconBg: 'var(--brand-50)',   iconColor: 'var(--brand-600)'   },
  success: { bg: '#fff',              color: 'var(--fg)', border: '1px solid var(--border)', iconBg: 'var(--success-50)', iconColor: 'var(--success-700)' },
  dark:    { bg: 'var(--ink-900)',    color: '#fff',                                          iconBg: 'rgba(255,255,255,.1)', iconColor: '#fff'            },
}

export const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  ({ tone = 'neutral', title, body, onDismiss, action, style, ...rest }, ref) => {
    const t = tones[tone]

    return (
      <div
        ref={ref}
        role="status"
        aria-live="polite"
        style={{
          display: 'flex',
          gap: 12,
          alignItems: 'center',
          padding: '12px 16px',
          borderRadius: 14,
          maxWidth: 480,
          background: t.bg,
          color: t.color,
          border: t.border,
          boxShadow: 'var(--shadow-4)',
          ...style,
        }}
        {...rest}
      >
        <div style={{ width: 32, height: 32, borderRadius: '50%', background: t.iconBg, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <Icon name={tone === 'success' ? 'Check' : 'Bell'} size={16} color={t.iconColor} />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ font: '600 14px var(--font-sans)' }}>{title}</div>
          {body && (
            <div style={{ font: '400 13px var(--font-sans)', color: tone === 'dark' ? 'rgba(255,255,255,.6)' : 'var(--fg-muted)' }}>
              {body}
            </div>
          )}
        </div>
        {action}
        {onDismiss && (
          <button
            onClick={onDismiss}
            aria-label="Fechar"
            style={{ background: 'none', border: 0, color: 'currentColor', opacity: 0.6, cursor: 'pointer', padding: 4, display: 'flex' }}
          >
            <Icon name="X" size={16} />
          </button>
        )}
      </div>
    )
  }
)

Toast.displayName = 'Toast'
