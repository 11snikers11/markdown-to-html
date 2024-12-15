import { Theme } from "@/@types/theme";

const THEME_STORAGE_KEY = 'theme'
const THEME_DATA_ATTRIBUTE = 'data-theme'

export const setLocalStorageTheme = (theme: Theme) => {
  window.localStorage.setItem(THEME_STORAGE_KEY, theme)
}

export const getLocalStorageTheme = (): Theme | undefined => {
  const theme = window.localStorage.getItem(THEME_STORAGE_KEY)
  if (theme === 'light' || theme === 'dark') return theme
}

export const setThemeDataAttribute = (theme: Theme) => {
  document.body.setAttribute(THEME_DATA_ATTRIBUTE, theme)
}

export const getThemeDataAttribute = (): Theme | undefined => {
  const theme = document.body.getAttribute(THEME_DATA_ATTRIBUTE)
  if (theme === 'light' || theme === 'dark') return theme
}
