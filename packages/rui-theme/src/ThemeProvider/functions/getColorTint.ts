import type { AugumentedTheme, Modifier } from '../../types'
import tinycolor from '@ctrl/tinycolor'
import { memoize } from '@rui/utils'
import { getColor } from './getColor'
import { getColorAlpha } from './getColorAlpha'

export const getColorTint = (theme: AugumentedTheme) =>
	memoize((background: string, color: string, modifier: Modifier) => {
		const backgrounColor = getColor(theme)(background)
		const tint = getColorAlpha(theme)(color, theme.colorModifiers[modifier])
		return tinycolor(tint).onBackground(backgrounColor).toRgbString()
	})
