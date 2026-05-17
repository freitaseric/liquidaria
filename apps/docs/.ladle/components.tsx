import './preview.css'
import type { GlobalProvider } from '@ladle/react'

export const Provider: GlobalProvider = ({ children, globalState }) => (
  <div className={globalState.theme === 'dark' ? 'dark' : ''}>{children}</div>
)
