import { useEffect, useState } from 'react'

export const useElementTopAndBottom = (
  element?: HTMLElement | null,
  parent?: HTMLElement | null
) => {
  const [topAndBottom, setTopAndBottom] = useState<{ top: number; bottom: number } | null>(null)

  useEffect(() => {
    if (!element || !parent) return

    if (element && parent) {
      const activeHeaderRect = element.getBoundingClientRect()
      const sidebarRect = parent.getBoundingClientRect()

      if (activeHeaderRect) {
        setTopAndBottom({
          top: activeHeaderRect.top - sidebarRect.top,
          bottom: sidebarRect.bottom - activeHeaderRect.bottom,
        })
      }
    }
  }, [element, parent])

  return topAndBottom
}
