import createEmotionServer from '@emotion/server/create-instance'
import type { EmotionCache } from '@emotion/react'
import createCache from '@emotion/cache'

const defaultCache = createCache({ key: 'robin-ui', prepend: true })

export const createStyleServer = (cache?: EmotionCache) =>
  createEmotionServer(cache ?? defaultCache)
