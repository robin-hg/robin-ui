import type { AppProps } from 'next/app'

import { RobinProvider } from '@robin-ui/core'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RobinProvider>
      <Component {...pageProps} />
    </RobinProvider>
  )
}

export default App
