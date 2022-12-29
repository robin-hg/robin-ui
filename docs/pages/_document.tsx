import Document, { Head, Html, Main, NextScript } from 'next/document'
import { createGetInitialProps } from '@robin-ui/next'

const getInitialProps = createGetInitialProps()

export default class AppDocument extends Document {
  static getInitialProps = getInitialProps

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
