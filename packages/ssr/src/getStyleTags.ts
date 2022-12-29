import type { EmotionServer } from '@emotion/server/types/create-instance'

export const getStyleTags = (html: string, server: EmotionServer) => {
  return server.constructStyleTagsFromChunks(server.extractCriticalToChunks(html))
}
