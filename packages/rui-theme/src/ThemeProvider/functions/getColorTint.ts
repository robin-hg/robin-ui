import type { AugumentedTheme } from '../../types'
import tinycolor from '@ctrl/tinycolor'
import { memoize } from '@rui/utils'
import { getColor } from './getColor'
import { getColorAlpha } from './getColorAlpha'

export const getColorTint = (theme: AugumentedTheme) =>
	memoize((background: string, color: string, alpha: number) => {
		const backgrounColor = getColor(theme)(background)
		const tint = getColorAlpha(theme)(color, alpha)
		return tinycolor(tint).onBackground(backgrounColor).toRgbString()
	})
