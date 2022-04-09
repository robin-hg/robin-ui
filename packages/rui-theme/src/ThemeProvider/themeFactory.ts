import { createMedia, getColor, getColorAlpha, getTransition, getVariant } from './functions'
import type { RUITheme, DerrivedColorMode, Palette } from '../types'

export type ThemeWithPalette = RUITheme & { palette: Palette }

export const themeFactory = (theme: RUITheme, colorMode: DerrivedColorMode, reducedMotion = false) => {
	const palette = colorMode === 'light' ? theme.lightPalette : theme.darkPalette

	const modifiedTheme: ThemeWithPalette = {
		...theme,
		palette,
		transition: reducedMotion ? { ...theme.transition, duration: '0ms' } : theme.transition
	}

	const fn = {
		getTransition: getTransition(modifiedTheme),
		getColor: getColor(modifiedTheme),
		getColorAlpha: getColorAlpha(modifiedTheme),
		getVariant
	}

	const media = {
		sm: createMedia(theme, 'sm'),
		md: createMedia(theme, 'md'),
		lg: createMedia(theme, 'lg'),
		xl: createMedia(theme, 'xl')
	}

	return {
		colorMode,
		...modifiedTheme,
		media,
		fn
	}
}
