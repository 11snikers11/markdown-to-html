import { useEffect } from 'react'
import { useStores } from './useStores'

export const useSetHeadingsObserver = ({ elementsIds }: { elementsIds: string[] }) => {
  const { headingsStore } = useStores()

  useEffect(() => {
    if (!elementsIds.length) return

    const elementsToObserve = document.querySelectorAll(`#${elementsIds.join(', #')}`)
    if (elementsToObserve.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            headingsStore.unsetActiveHeaders()
            headingsStore.getHeaderById(entry.target.id)?.setActive(true)
          }
        })
      },
      { root: null, threshold: 0, rootMargin: '0px 0px -99% 0px' }
    )

    elementsToObserve.forEach((element) => {
      observer.observe(element)
    })

    return () => {
      observer.disconnect()
    }
  }, [elementsIds, headingsStore])
}
