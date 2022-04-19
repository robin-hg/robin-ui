import type { AugumentedTheme, Modifier, ColorToken } from '../../types'
import tinycolor from '@ctrl/tinycolor'
import { memoize } from '@rui/utils'
import { getColor } from './getColor'
import { getColorAlpha } from './getColorAlpha'

export const getColorTint = (theme: AugumentedTheme) =>
	memoize((background: ColorToken, color: ColorToken, modifier: Modifier) => {
		const backgrounColor = getColor(theme)(background)
		const tint = getColorAlpha(theme)(color, modifier)
		return tinycolor(tint).onBackground(backgrounColor).toRgbString()
	})
