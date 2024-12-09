import { useSwitchTheme } from '@/hooks/useSwitchTheme'
import { useTheme } from '@/hooks/useTheme'
import { motion } from 'motion/react'

const ThemeSwitcher = () => {
  useTheme()
  const [toggleTheme, currentTheme] = useSwitchTheme()

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
