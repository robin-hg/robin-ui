import tinycolor from 'tinycolor2'
import { get } from './index'

const BASE_VARIANT = '5'

const getColorObj = (theme: RobinUI.Theme, color: string) => {
	const [base, variant = BASE_VARIANT] = color.split('.')
	const colorStr = (() => {
		switch (base) {
			case 'text': {
				return get(theme.typography.colors, variant, theme.typography.colors.base)
			}
			case 'paper': {
				return get(theme.paper, variant, theme.paper.base)
			}
			default: {
				return get(theme.colors, [base, variant], color)
			}
		}
	})()
	const obj = tinycolor(colorStr)
	return obj.isValid() ? obj : null
}

export const getColor = (theme: RobinUI.Theme, color: string) => {
	const colorObj = getColorObj(theme, color)
	return colorObj?.toRgbString() || color
}

export const getTextColor = (theme: RobinUI.Theme, background?: string, colors = ['text', 'text.contrast']) => {
	const colorList = colors.map(color => {
		const [base, variant] = color.split('.')
		if (base === 'text') {
			switch (variant) {
				case 'light':
					return theme.typography.colors.light
				case 'contrast':
					return theme.typography.colors.contrast
				case 'disabled':
					return theme.typography.colors.disabled
				default:
					return theme.typography.colors.base
			}
		} else {
			return getColor(theme, color)
		}
	})
	const backgroundObj = getColor(theme, background || theme.paper.base)
	return tinycolor.mostReadable(backgroundObj, colorList).toRgbString()
}

export const getColorAlpha = (theme: RobinUI.Theme, color: string, alpha: number) => {
	const colorObj = getColorObj(theme, color)
	return colorObj?.setAlpha(alpha).toRgbString() || color
}

export const getColorVariant = (theme: RobinUI.Theme, color: string, modifier: number) => {
	const [base, variant = BASE_VARIANT] = color.split('.')
	const result = getColorObj(theme, `${base}.${parseInt(variant) + modifier}`)

	if (result) {
		return result.toRgbString()
	}

	// fallback to color manipulation
	const colorObj = tinycolor(color)
	if (modifier < 0) {
		return colorObj.brighten(modifier * 5).toRgbString()
	} else {
		return colorObj.darken(Math.abs(modifier) * 5).toRgbString()
	}
}
