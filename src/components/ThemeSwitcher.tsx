import ThemeContext from '@/context/themeContext'
import { motion } from 'motion/react'
import { useContext } from 'react'

const ThemeSwitcher = () => {
  const themeContext = useContext(ThemeContext)

  if (!themeContext) throw new Error('no theme context')

  const { theme: currentTheme, toggleTheme } = themeContext

  return (
    <motion.button
      style={{
        cursor: 'pointer',
        position: 'fixed',
        top: 10,
        right: -40,
        fontSize: '2em',
        width: 80,
      }}
      whileHover={{ scale: 1.1, right: 10 }}
      whileFocus={{ scale: 1.1, right: 10 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
    >
      {currentTheme === 'dark' ? '🌚' : '🌝'}
    </motion.button>
  )
}

ThemeSwitcher.displayName = 'ThemeSwitcher'
export default ThemeSwitcher
