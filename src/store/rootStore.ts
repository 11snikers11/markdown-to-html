import HeadingsStore from './headingsStore'
import MarkdownParsedStore from './markdownParsedStore'

class RootStore {
  headingsStore = new HeadingsStore()
  markdownParsedStore = new MarkdownParsedStore(this.headingsStore)
}

export default RootStore
