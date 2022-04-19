import type { AugumentedTheme, Modifier, ColorToken } from '../../types'
import tinycolor from '@ctrl/tinycolor'
import { memoize } from '@rui/utils'
import { getColor } from './getColor'

export const getColorAlpha = (theme: AugumentedTheme) =>
	memoize((color: ColorToken, modifier: Modifier | number) => {
		const c = getColor(theme)(color)
		const colorObj = tinycolor(c)
		return colorObj.setAlpha(typeof modifier === 'number' ? modifier : theme.colorModifiers[modifier]).toRgbString()
	})
