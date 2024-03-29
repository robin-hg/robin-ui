import type { RobinTheme } from '@robin-ui/theme'
export { css, keyframes, jsx, Global, useTheme } from '@emotion/react'
export { styled, sxc } from './styled'

declare module '@emotion/react' {
  export interface Theme extends RobinTheme {}
}

export * from './types'
