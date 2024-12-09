import { useCallback } from 'react'
import { useSound } from './useSound'

export const useSwitchTheme = () => {
  const [play] = useSound('/click.wav')
  const [playOut] = useSound('/click-out.wav')
  const currentTheme = document.body.getAttribute('data-theme')

  const toggleTheme = useCallback(() => {
    if (currentTheme === 'dark') {
      playOut()
      document.body.setAttribute('data-theme', 'light')
      window.localStorage.setItem('theme', 'light')
    } else {
      play()
      document.body.setAttribute('data-theme', 'dark')
      window.localStorage.setItem('theme', 'dark')
    }
  }, [currentTheme, play, playOut])

  return [toggleTheme, currentTheme] as const
}
