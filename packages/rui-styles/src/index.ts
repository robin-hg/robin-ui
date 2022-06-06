import type { RUITheme } from '@robin-ui/theme'
export { css, keyframes, jsx, Global, useTheme } from '@emotion/react'
export { default, sxc } from './styled'

declare module '@emotion/react' {
	export interface Theme extends RUITheme {}
}

export * from './types'
