import type { RUITheme } from 'style'
import tinycolor from 'tinycolor2'
import { get } from './'

export const getColorObj = (theme: RUITheme, color: string) => {
	const keys = color.split('.')
	const colorStr = get(
		theme.colors,
		[keys[0], keys[1] || (['text', 'paper'].includes(keys[0]) ? 'primary' : 'base')],
		color
	)
	const obj = tinycolor(colorStr)
	return obj.isValid() ? obj : null
}

export const getColor = (theme: RUITheme, color: string) => {
	const colorObj = getColorObj(theme, color)
	return colorObj?.toRgbString() || color
}

export const getContrastColor = (theme: RUITheme, background: string) => {
	const colorObj = getColorObj(theme, background)
	if (theme.darkMode) {
		return colorObj?.isDark() ? theme.colors.text.primary : theme.colors.text.contrast
	} else {
		return colorObj?.isDark() ? theme.colors.text.contrast : theme.colors.text.primary
	}
}

export const getColorAlpha = (theme: RUITheme, color: string, alpha: number) => {
	const colorObj = getColorObj(theme, color)
	return colorObj?.setAlpha(alpha).toRgbString() || color
}

export const getColorVariant = (
	theme: RUITheme,
	color: string,
	variant: 'extraLight' | 'light' | 'base' | 'dark' | 'extraDark' | number
) => {
	const keys = color.split('.')
	const colorVariant = get<string>(theme.colors, [keys[0], variant])

	if (colorVariant) {
		return colorVariant
	}

	// Fallback to color manipulation
	const colorObj = tinycolor(color)
	switch (variant) {
		case 'extraLight':
			return colorObj.brighten(80).toRgbString()
		case 'light':
			return colorObj.brighten(40).toRgbString()
		case 'base':
			return colorObj.toRgbString()
		case 'dark':
			return colorObj.darken(40).toRgbString()
		case 'extraDark':
			return colorObj.darken(40).toRgbString()
		default:
			// can't handle numbered variant
			return null
	}
}
