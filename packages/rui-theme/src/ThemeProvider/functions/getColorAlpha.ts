import type { AugumentedTheme, ColorToken } from '../../types'
import tinycolor from '@ctrl/tinycolor'
import { memoize } from '@rui/utils'
import { getColor } from './getColor'

export const getColorAlpha = (theme: AugumentedTheme) =>
	memoize((color: ColorToken, alpha: number) => {
		const c = getColor(theme)(color)
		const colorObj = tinycolor(c)
		return colorObj.setAlpha(alpha).toRgbString()
	})
