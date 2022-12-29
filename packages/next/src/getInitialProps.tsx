import type { EmotionCache } from '@emotion/cache'
import htmlReactParser from 'html-react-parser'
import Document, { type DocumentContext, type DocumentInitialProps } from 'next/document'

import { createStyleServer, getStyleTags } from '@robin-ui/ssr'

export const createGetInitialProps = (cache?: EmotionCache) => {
  const styleServer = createStyleServer(cache)

  return async (ctx: DocumentContext): Promise<DocumentInitialProps> => {
    const initialProps = await Document.getInitialProps(ctx)
    const styleTags = getStyleTags(initialProps.html, styleServer)
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {htmlReactParser(styleTags)}
        </>
      )
    }
  }
}
