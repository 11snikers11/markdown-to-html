import { observer } from 'mobx-react-lite'
import { MainContainer } from '@/components/Container'
import Markdown from '@/components/Markdown'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import TableOfContent from '@/components/tableOfContent/TableOfContent'

import mdExample from '@/assets/mdexample.md?raw'

const App = observer(() => (
  <MainContainer>
    <ThemeSwitcher />
    <div style={{ display: 'flex' }}>
      <Markdown md={mdExample} />
      <TableOfContent />
    </div>
  </MainContainer>
))

App.displayName = 'App'
export default App
