import type { AugumentedTheme } from '../../types'
import tinycolor from '@ctrl/tinycolor'
import { getColor } from './getColor'

export const getColorAlpha = (theme: AugumentedTheme) => (color: string, alpha: number) => {
	const c = getColor(theme)(color)
	const colorObj = tinycolor(c)
	return colorObj?.setAlpha(alpha).toRgbString()
}
