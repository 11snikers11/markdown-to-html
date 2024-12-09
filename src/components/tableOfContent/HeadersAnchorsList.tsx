import { observer } from 'mobx-react-lite'
import HeaderAnchor from './HeaderAnchor'
import { useStores } from '@/hooks/useStores'

const HeaderAnchorsList = observer(() => {
  const { headingsStore } = useStores()
  const headings = headingsStore.getHeaders()

  return (
    Boolean(headings.length) &&
    headings.map((header) => <HeaderAnchor key={header.id} header={header} />)
  )
})

HeaderAnchorsList.displayName = 'HeaderAnchorsList'
export default HeaderAnchorsList
