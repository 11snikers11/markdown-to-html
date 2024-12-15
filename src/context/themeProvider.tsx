import { useCallback, useLayoutEffect, useState } from "react"
import ThemeContext from "./themeContext"
import { getLocalStorageTheme, setLocalStorageTheme, setThemeDataAttribute } from "@/utils/themeService"
import { Theme } from "@/@types/theme"

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => getLocalStorageTheme() ?? 'light')

  useLayoutEffect(() => {
    setThemeDataAttribute(theme)
  }, [theme])

  const toggleTheme = useCallback(() => {
    const resultTheme: Theme = theme === 'light' ? 'dark' : 'light'

    setThemeDataAttribute(resultTheme)
    setLocalStorageTheme(resultTheme)
    setTheme(resultTheme)

  }, [theme])

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
