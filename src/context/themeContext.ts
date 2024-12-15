import { createContext } from 'react'

interface ThemeContextProps {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextProps | null>(null)

ThemeContext.displayName = 'StoreContext'
export default ThemeContext
