import React from 'react'

export type AvatarTone = 'brand' | 'warm' | 'green' | 'plum'

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  initials?: string
  src?: string
  size?: number
  tone?: AvatarTone
}

const gradients: Record<AvatarTone, [string, string]> = {
  brand: ['#4A85F0', '#0E3F8F'],
  warm:  ['#FF9F66', '#FF580A'],
  green: ['#5DC25E', '#168821'],
  plum:  ['#B07FF8', '#7140B4'],
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ initials, src, size = 40, tone = 'brand', style, ...rest }, ref) => {
    if (src) {
      return (
        <img
          src={src}
          alt={initials}
          width={size}
          height={size}
          style={{ borderRadius: '50%', objectFit: 'cover', display: 'block', ...style as React.CSSProperties }}
        />
      )
    }

    const [a, b] = gradients[tone]

    return (
      <div
        ref={ref}
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${a}, ${b})`,
          color: '#fff',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          font: `600 ${size * 0.4}px var(--font-sans)`,
          letterSpacing: '-0.02em',
          flexShrink: 0,
          ...style,
        }}
        {...rest}
      >
        {initials}
      </div>
    )
  }
)

Avatar.displayName = 'Avatar'
