import { useStores } from '@/hooks/useStores'
import { observer } from 'mobx-react-lite'
import { useRef, useEffect } from 'react'
import { Container } from './Container'

interface MarkdownProps {
  md: string
}

const Markdown = observer(({ md }: MarkdownProps) => {
  const { markdownParsedStore } = useStores()
  const markdownContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    markdownParsedStore.render(md)
  }, [markdownParsedStore, md])

  return (
    <Container ref={markdownContainerRef} className="markdown-body">
      {markdownParsedStore.reactParsed ? markdownParsedStore.reactParsed : 'loading...'}
    </Container>
  )
})

Markdown.displayName = 'Markdown'
export default Markdown
