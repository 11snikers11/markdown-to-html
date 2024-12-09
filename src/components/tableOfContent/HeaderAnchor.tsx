import { useStores } from '@/hooks/useStores'
import { Header } from '@/store/headingsStore'
import { observer } from 'mobx-react-lite'
import { useRef, useEffect } from 'react'

const HeaderAnchor = observer(({ header }: { header: Header }) => {
  const { headingsStore } = useStores()
  const locationHash = window.location.hash
  const anchorRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (locationHash === `#${header.id}`) {
      header.setActive(true)
    }
  }, [locationHash, header.id, header])

  useEffect(() => {
    if (anchorRef.current) {
      headingsStore.getHeaderById(header.id)?.setRef(anchorRef.current)
    }
  }, [header.id, headingsStore])

  return (
    <a
      ref={anchorRef}
      href={`#${header.id}`}
      className="toc-anchor"
      style={{
        cursor: 'pointer',
        paddingLeft: `${header.level * 10}px`,
        color: header.isActive ? 'var(--accent)' : 'inherit',
        display: 'block',
      }}
      onClick={() => {
        headingsStore.unsetActiveHeaders()
        header.setActive(true)
      }}
    >
      {header.title}
    </a>
  )
})

HeaderAnchor.displayName = 'HeaderAnchor'
export default HeaderAnchor
