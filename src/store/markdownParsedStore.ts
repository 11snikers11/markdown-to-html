import { makeAutoObservable, runInAction } from 'mobx'
import type { Root as HASTRoot } from 'hast'
import type { Root as MDASTRoot } from 'mdast'
import MarkdownProcessor from '../utils/markdownProcessor'
import HeadingsStore from './headingsStore'
import { mdExtracHeaders } from '../utils/mdHeaderService'

class MarkdownParsedStore {
  hast: HASTRoot | null = null
  mdast: MDASTRoot | null = null
  reactParsed: JSX.Element | null = null
  headingsStore: HeadingsStore

  constructor(headingsStore: HeadingsStore) {
    makeAutoObservable(this)
    this.headingsStore = headingsStore
  }

  async render(markdown: string) {
    const markdownProcessor = new MarkdownProcessor()
    const { hast, mdast, result } = await markdownProcessor.render(markdown)
    runInAction(() => {
      this.setMarkdownData(hast, mdast, result)
    })
  }

  setMarkdownData(hast: HASTRoot, mdast: MDASTRoot, reactParsed: JSX.Element) {
    this.hast = hast
    this.mdast = mdast
    this.reactParsed = reactParsed

    const headers = mdExtracHeaders(mdast, 4)
    this.headingsStore.setHeaders(headers)
  }
}

export default MarkdownParsedStore
