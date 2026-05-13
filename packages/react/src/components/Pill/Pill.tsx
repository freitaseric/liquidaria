import React from 'react'

export type PillTone = 'neutral' | 'brand' | 'success' | 'warning' | 'danger' | 'info'

export interface PillProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: PillTone
  dot?: boolean
  active?: boolean
}

const tones: Record<PillTone, React.CSSProperties> = {
  neutral: { background: '#fff',               color: 'var(--fg)',          border: '1px solid var(--border)' },
  brand:   { background: 'var(--brand-50)',    color: 'var(--brand-700)',   border: '1px solid var(--brand-200)' },
  success: { background: 'var(--success-50)',  color: 'var(--success-700)' },
  warning: { background: 'var(--warning-50)',  color: 'var(--warning-700)' },
  danger:  { background: 'var(--danger-50)',   color: 'var(--danger-700)'  },
  info:    { background: 'var(--info-50)',      color: 'var(--info-700)'    },
}

const activeStyle: React.CSSProperties = {
  background: 'var(--ink-900)',
  color: '#fff',
  border: '0',
}

export const Pill = React.forwardRef<HTMLSpanElement, PillProps>(
  ({ children, tone = 'neutral', dot, active, style, ...rest }, ref) => {
    const toneStyle = tone === 'neutral' && active ? activeStyle : tones[tone]

    return (
      <span
        ref={ref}
        style={{
          font: '600 12px var(--font-sans)',
          padding: '5px 11px',
          borderRadius: 999,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          cursor: rest.onClick ? 'pointer' : 'default',
          ...toneStyle,
          ...style,
        }}
        {...rest}
      >
        {dot && (
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor', opacity: 0.7, flexShrink: 0 }} />
        )}
        {children}
      </span>
    )
  }
)

Pill.displayName = 'Pill'
