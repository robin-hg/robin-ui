import type { AugumentedTheme, ColorToken, Modifier } from '../../types'
import tinycolor, { mostReadable } from '@ctrl/tinycolor'
import { get, memoize } from '@rui/utils'

const DEFAULT_SHADE = 500

export const getColorFunctions = (theme: AugumentedTheme) => ({
	getColor: memoize((color: ColorToken) => {
		const [base, shade] = color.split('.')
		return get(
			theme.palette,
			[base, shade || 'base'],
			get(theme.palette, [base], get(theme.colors, [base, shade || DEFAULT_SHADE], color))
		)
	}),
	getAlphaColor(color: ColorToken, modifier: Modifier | number) {
		const c = this.getColor(color)
		const colorObj = tinycolor(c)
		return colorObj.setAlpha(typeof modifier === 'number' ? modifier : theme.colorModifiers[modifier]).toRgbString()
	},
	getOnColor(background: ColorToken) {
		const [base, variant = 'base'] = background.split('.')
		const v = variant === 'base' ? 'onBase' : 'onVariant'
		const onColor = get<string | undefined>(theme.palette, [base, v])

		if (onColor) {
			return onColor
		}

		const backgroundColor = this.getColor(background)
		return (
			mostReadable(backgroundColor, [theme.palette.surface.base, theme.palette.surface.onBase], {
				includeFallbackColors: true
			})?.toRgbString() || ''
		)
	},
	getModifiedColor(background: ColorToken, color: ColorToken, modifier: Modifier | number) {
		const backgrounColor = this.getColor(background)
		const layerColor = this.getAlphaColor(color, modifier)
		return tinycolor(layerColor).onBackground(backgrounColor).toRgbString()
	}
})
