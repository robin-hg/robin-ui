import type { BaseTheme, AugumentedTheme, DerrivedColorMode } from '../types'
import { createThemeFunctions } from './functions'
import { parseSize } from '@robin-ui/utils'

export const createMediaBreakpoint = (theme: BaseTheme, breakpoint: keyof BaseTheme['breakpoints']) =>
	`@media screen and (max-width: ${parseSize(theme.breakpoints[breakpoint])})`

export const themeFactory = (theme: BaseTheme, colorMode: DerrivedColorMode) => {
	const palette = colorMode === 'light' ? theme.lightPalette : theme.darkPalette

	const augumentedTheme: AugumentedTheme = {
		colorMode,
		...theme,
		palette,
		media: {
			xs: createMediaBreakpoint(theme, 'xs'),
			sm: createMediaBreakpoint(theme, 'sm'),
			md: createMediaBreakpoint(theme, 'md'),
			lg: createMediaBreakpoint(theme, 'lg'),
			xl: createMediaBreakpoint(theme, 'xl')
		}
	}

	return {
		...augumentedTheme,
		fn: createThemeFunctions(augumentedTheme)
	}
}
