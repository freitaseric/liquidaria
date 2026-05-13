import React from 'react'
import { Icon } from '../Icon'
import type { LucideIconName } from '../Icon'

export type ButtonVariant = 'primary' | 'ink' | 'secondary' | 'ghost' | 'danger' | 'glass'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: LucideIconName
  iconRight?: LucideIconName
  full?: boolean
}

const sizes: Record<ButtonSize, { padding: string; fontSize: number }> = {
  sm: { padding: '8px 14px',  fontSize: 13 },
  md: { padding: '10px 18px', fontSize: 14 },
  lg: { padding: '13px 22px', fontSize: 15 },
}

const variants: Record<ButtonVariant, React.CSSProperties> = {
  primary:   { background: 'var(--brand-500)', color: '#fff', border: '0', boxShadow: '0 2px 4px -1px rgba(7,7,11,.06), 0 4px 8px -2px rgba(7,7,11,.06)' },
  ink:       { background: 'var(--ink-900)',   color: '#fff', border: '0', boxShadow: '0 2px 4px -1px rgba(7,7,11,.06)' },
  secondary: { background: '#fff', color: 'var(--brand-700)', border: '1px solid var(--brand-200)' },
  ghost:     { background: 'transparent', color: 'var(--fg)', border: '0' },
  danger:    { background: 'var(--danger-500)', color: '#fff', border: '0' },
  glass:     { background: 'color-mix(in oklab, white 72%, transparent)', color: 'var(--fg)', border: '1px solid rgba(255,255,255,.8)', boxShadow: 'var(--shadow-glass)', backdropFilter: 'blur(28px) saturate(160%)' },
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', size = 'md', icon, iconRight, disabled, full, style, ...rest }, ref) => {
    const [pressed, setPressed] = React.useState(false)
    const s = sizes[size]
    const v = variants[variant]

    return (
      <button
        ref={ref}
        disabled={disabled}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        onMouseLeave={() => setPressed(false)}
        style={{
          font: `600 ${s.fontSize}px/1 var(--font-sans)`,
          padding: s.padding,
          borderRadius: 999,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          width: full ? '100%' : 'auto',
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.5 : 1,
          transform: pressed && !disabled ? 'scale(0.97)' : 'scale(1)',
          transition: 'transform var(--dur-1) var(--ease-out), box-shadow var(--dur-2) var(--ease-out)',
          ...v,
          ...style,
        }}
        {...rest}
      >
        {icon && <Icon name={icon} size={s.fontSize + 2} />}
        {children}
        {iconRight && <Icon name={iconRight} size={s.fontSize + 2} />}
      </button>
    )
  }
)

Button.displayName = 'Button'
