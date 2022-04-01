import { css, keyframes, jsx, Global } from '@emotion/react'
import styled, { Styled } from './styled'
import { RUIThemeProvider, type RUIThemeWithUtils } from './ThemeProvider'

declare module '@emotion/react' {
	export interface Theme extends RUIThemeWithUtils {}
}

export { css, keyframes, jsx, Global, RUIThemeProvider, Styled }
export default styled
