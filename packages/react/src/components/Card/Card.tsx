import React from 'react'

export type CardVariant = 'flat' | 'elevated' | 'high' | 'glass'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant
}

const variants: Record<CardVariant, React.CSSProperties> = {
  flat:     { background: 'var(--bg-elev)', border: '1px solid var(--border)' },
  elevated: { background: 'var(--bg-elev)', boxShadow: 'var(--shadow-2)' },
  high:     { background: 'var(--bg-elev)', boxShadow: 'var(--shadow-4)' },
  glass:    { background: 'var(--glass-frost)', border: '1px solid var(--glass-edge)', boxShadow: 'var(--shadow-glass)', backdropFilter: 'blur(28px) saturate(160%)' },
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, variant = 'elevated', style, ...rest }, ref) => (
    <div
      ref={ref}
      style={{ borderRadius: 16, padding: 16, ...variants[variant], ...style }}
      {...rest}
    >
      {children}
    </div>
  )
)

Card.displayName = 'Card'
