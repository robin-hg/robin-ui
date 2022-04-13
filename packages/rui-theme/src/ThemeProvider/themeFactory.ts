import {
	createMedia,
	getColor,
	getColorAlpha,
	getColorTint,
	getSize,
	getSpacing,
	getTransition,
	getVariant
} from './functions'
import type { BaseTheme, AugumentedTheme, DerrivedColorMode } from '../types'

export const themeFactory = (theme: BaseTheme, colorMode: DerrivedColorMode, reducedMotion = false) => {
	const palette = colorMode === 'light' ? theme.lightPalette : theme.darkPalette

	const augumentedTheme: AugumentedTheme = {
		colorMode,
		reducedMotion,
		...theme,
		palette,
		media: {
			xs: createMedia(theme, 'xs'),
			sm: createMedia(theme, 'sm'),
			md: createMedia(theme, 'md'),
			lg: createMedia(theme, 'lg'),
			xl: createMedia(theme, 'xl')
		},
		transition: reducedMotion ? { ...theme.transition, duration: '0ms' } : theme.transition
	}

	const fn = {
		getColor: getColor(augumentedTheme),
		getColorAlpha: getColorAlpha(augumentedTheme),
		getColorTint: getColorTint(augumentedTheme),
		getSize,
		getSpacing: getSpacing(augumentedTheme),
		getTransition: getTransition(augumentedTheme),
		getVariant
	}

	return {
		...augumentedTheme,
		fn
	}
}
