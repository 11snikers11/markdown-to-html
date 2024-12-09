import GithubSlugger from 'github-slugger'
import type { Root as MDASTRoot } from 'mdast'
import { visit } from 'unist-util-visit'
import { toString } from 'mdast-util-to-string'
import { Header } from '../store/headingsStore'

export const mdExtracHeaders = (mdast: MDASTRoot, minLevel: number) => {
  const headers: Header[] = []

  visit(mdast, 'heading', (node) => {
    if (node.depth > minLevel) return
    const title = toString(node)
    const slugger = new GithubSlugger()
    const id = slugger.slug(title)

    headers.push(new Header(title, id, node.depth))
  })

  return headers
}
