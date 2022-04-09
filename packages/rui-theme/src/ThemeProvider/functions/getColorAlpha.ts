import tinycolor from '@ctrl/tinycolor'
import type { ThemeWithPalette } from '../themeFactory'
import { getColor } from './getColor'

export const getColorAlpha = (theme: ThemeWithPalette) => (color: string, alpha: number) => {
	const c = getColor(theme)(color)
	const colorObj = tinycolor(c)
	return colorObj?.setAlpha(alpha).toRgbString()
}
