import type { RUIThemeExtended } from '@rui/theme'
export { css, keyframes, jsx, Global, useTheme } from '@emotion/react'
export { default, sxc } from './styled'

declare module '@emotion/react' {
	export interface Theme extends RUIThemeExtended {}
}

export * from './types'
