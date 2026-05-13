import React from 'react'
import { Icon } from '../Icon'
import type { LucideIconName } from '../Icon'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  hint?: string
  error?: string
  icon?: LucideIconName
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, hint, error, icon, style, ...rest }, ref) => {
    const [focused, setFocused] = React.useState(false)

    return (
      <label style={{ font: '500 13px var(--font-sans)', color: error ? 'var(--danger-700)' : 'var(--fg)', display: 'flex', flexDirection: 'column', gap: 6 }}>
        {label && <span>{label}</span>}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          {icon && (
            <span style={{ position: 'absolute', left: 14, color: 'var(--fg-subtle)', display: 'flex', pointerEvents: 'none' }}>
              <Icon name={icon} size={18} />
            </span>
          )}
          <input
            ref={ref}
            onFocus={e => { setFocused(true); rest.onFocus?.(e) }}
            onBlur={e => { setFocused(false); rest.onBlur?.(e) }}
            style={{
              font: '400 15px var(--font-sans)',
              padding: icon ? '11px 14px 11px 42px' : '11px 14px',
              borderRadius: 12,
              background: '#fff',
              color: error ? 'var(--danger-700)' : 'var(--fg)',
              border: error
                ? '1px solid var(--danger-500)'
                : focused
                  ? '2px solid var(--brand-500)'
                  : '1px solid var(--border-strong)',
              boxShadow: focused && !error ? '0 0 0 3px color-mix(in oklab, var(--brand-400) 35%, transparent)' : 'none',
              outline: 'none',
              width: '100%',
              boxSizing: 'border-box',
              ...style,
            }}
            {...rest}
          />
        </div>
        {error
          ? <span style={{ font: '400 12px var(--font-sans)', color: 'var(--danger-700)' }}>{error}</span>
          : hint && <span style={{ font: '400 12px var(--font-sans)', color: 'var(--fg-muted)' }}>{hint}</span>
        }
      </label>
    )
  }
)

Input.displayName = 'Input'
