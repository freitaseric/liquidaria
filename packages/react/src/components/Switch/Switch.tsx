import React from 'react'

export interface SwitchProps extends Omit<React.HTMLAttributes<HTMLLabelElement>, 'onChange'> {
  checked: boolean
  onChange?: (checked: boolean) => void
  label?: string
  disabled?: boolean
}

export const Switch = React.forwardRef<HTMLLabelElement, SwitchProps>(
  ({ checked, onChange, label, disabled, style, ...rest }, ref) => (
    <label
      ref={ref}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        font: '500 14px var(--font-sans)',
        color: checked ? 'var(--fg)' : 'var(--fg-muted)',
        ...style,
      }}
      {...rest}
    >
      <span
        role="switch"
        aria-checked={checked}
        onClick={() => !disabled && onChange?.(!checked)}
        style={{
          width: 44,
          height: 26,
          borderRadius: 999,
          background: checked ? 'var(--brand-500)' : 'var(--ink-200)',
          position: 'relative',
          transition: 'background var(--dur-2) var(--ease-out)',
          flexShrink: 0,
        }}
      >
        <span
          style={{
            position: 'absolute',
            top: 2,
            left: checked ? 20 : 2,
            width: 22,
            height: 22,
            borderRadius: '50%',
            background: '#fff',
            boxShadow: '0 2px 4px rgba(7,7,11,.18)',
            transition: 'left var(--dur-2) var(--ease-spring)',
          }}
        />
      </span>
      {label}
    </label>
  )
)

Switch.displayName = 'Switch'
