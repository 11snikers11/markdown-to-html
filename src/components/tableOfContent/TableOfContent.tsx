import { useStores } from '@/hooks/useStores'
import { observer } from 'mobx-react-lite'
import { motion } from 'motion/react'
import HeaderAnchorsList from './HeadersAnchorsList'
import { useElementTopAndBottom } from '@/hooks/useElementTopAndBottom'
import { useRef } from 'react'
import { useSetHeadingsObserver } from '@/hooks/useSetHeadingsObserver'

const TableOfContent = observer(() => {
  const { headingsStore } = useStores()

  useSetHeadingsObserver({ elementsIds: headingsStore.getHeadersIds() })
  const activeHeader = headingsStore.getActiveHeader()
  const sidebarRef = useRef<HTMLDivElement>(null)
  const { top, bottom } = useElementTopAndBottom(activeHeader?.ref, sidebarRef.current) ?? {
    top: 0,
    bottom: 0,
  }

  return (
    <div>
      <nav
        style={{
          fontSize: '13px',
          position: 'sticky',
          top: 0,
          overflow: 'auto',
          padding: '0 1em',
        }}
      >
        <h1 style={{ fontSize: '14px' }}>Table of Contents</h1>
        <div style={{ display: 'flex' }}>
          <div
            style={{
              alignSelf: 'stretch',
              width: '2px',
              background: 'var(--border)',
              position: 'relative',
              borderRadius: 2,
              flexShrink: 0,
            }}
          >
            <motion.div
              style={{
                position: 'absolute',
                width: '2px',
                top: top,
                bottom: bottom,
                background: 'var(--accent)',
                boxShadow: 'var(--shadow)',
                borderRadius: 2,
              }}
              animate={{ top, bottom }}
              transition={{ duration: 0.5 }}
            ></motion.div>
          </div>

          <div ref={sidebarRef}>
            <HeaderAnchorsList />
          </div>
        </div>
      </nav>
    </div>
  )
})

TableOfContent.displayName = 'TableOfContent'
export default TableOfContent
