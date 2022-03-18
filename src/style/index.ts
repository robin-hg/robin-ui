import styled from '@emotion/styled'
import { css, keyframes, jsx, Global } from '@emotion/react'
import { RUIThemeProvider, type RUITheme } from './theme'
import media from './breakpoints'

declare module '@emotion/react' {
	export interface Theme extends RUITheme {}
}

// const shouldForwardProp = (prop: string) => !prop.startsWith('$') && prop !== 'as'
// const extendedStyled = new Proxy(styled, {
// 	get:
// 		(_, tag: keyof JSX.IntrinsicElements) =>
// 		(getStyle = () => css``) =>
// 			styled(tag, { shouldForwardProp })(getStyle)
// })

export { media, css, keyframes, jsx, Global, RUIThemeProvider, type RUITheme }
export default styled
