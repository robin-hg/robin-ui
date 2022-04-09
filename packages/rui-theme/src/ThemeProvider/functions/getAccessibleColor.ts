import { mostReadable } from '@ctrl/tinycolor'
import { getColor as _getColor } from './getColor'
import type { ThemeWithPalette } from '../themeFactory'

export const getAccessibleColor =
	(theme: ThemeWithPalette) =>
	(background?: string, colors = ['text', 'text.contrast']) => {
		const getColor = _getColor(theme)
		const backgroundColor = getColor(background || 'background')
		const list = colors.map(getColor)
		mostReadable(backgroundColor, list)
	}
