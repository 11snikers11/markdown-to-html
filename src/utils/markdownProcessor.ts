import rehypeReact from 'rehype-react'
import remarkFrontmatter from 'remark-frontmatter'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import remarkToc from 'remark-toc'
import { unified } from 'unified'
import * as jsxRuntime from 'react/jsx-runtime'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'

const production = { Fragment: jsxRuntime.Fragment, jsx: jsxRuntime.jsx, jsxs: jsxRuntime.jsxs }

class MarkdownProcessor {
  processor: ReturnType<typeof this.createProcessor> | null = null

  createProcessor() {
    const remarkParser = unified()
      .use(remarkParse) // !
      .use(remarkToc, { maxDepth: 5 })
      .use(remarkFrontmatter)
      .use(remarkGfm) // !

    const rehypeParser = remarkParser
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeHighlight) // !
      .use(rehypeSlug) // !

    const renderer = rehypeParser.use(rehypeReact, production)

    this.processor = renderer
    return renderer
  }

  async getProcessor() {
    if (this.processor) return this.processor
    return this.createProcessor()
  }

  async render(markdown: string) {
    const processor = await this.getProcessor()
    const mdast = processor.parse(markdown)
    const hast = await processor.run(mdast)
    const result = processor.stringify(hast)

    return {
      result,
      hast,
      mdast,
    }
  }
}

export default MarkdownProcessor
