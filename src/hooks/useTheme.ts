import { useEffect } from 'react'

export const useTheme = () => {
  const currentTheme =
    window.localStorage.getItem('theme') ?? document.body.getAttribute('data-theme') ?? 'light'

  useEffect(() => {
    document.body.setAttribute('data-theme', currentTheme)
  }, [currentTheme])
}
