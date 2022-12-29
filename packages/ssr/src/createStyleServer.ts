import createCache from '@emotion/cache'
import type { EmotionCache } from '@emotion/react'
import createEmotionServer from '@emotion/server/create-instance'

const defaultCache = createCache({ key: 'robin-ui', prepend: true })

export const createStyleServer = (cache?: EmotionCache) =>
  createEmotionServer(cache ?? defaultCache)
