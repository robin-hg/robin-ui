import {
	createMediaBreakpoint,
	getColor,
	getColorAlpha,
	getColorTint,
	getOnColor,
	getSize,
	getSpacing,
	getTransition
} from './functions'
import type { BaseTheme, AugumentedTheme, DerrivedColorMode } from '../types'

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

	const fn = {
		getColor: getColor(augumentedTheme),
		getColorAlpha: getColorAlpha(augumentedTheme),
		getColorTint: getColorTint(augumentedTheme),
		getOnColor: getOnColor(augumentedTheme),
		getSize,
		getSpacing: getSpacing(augumentedTheme),
		getTransition: getTransition(augumentedTheme)
	}

	return {
		...augumentedTheme,
		fn
	}
}
