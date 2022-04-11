import type { AugumentedTheme } from '../../types'
import { mostReadable } from '@ctrl/tinycolor'
import { getColor as _getColor } from './getColor'

export const getAccessibleColor =
	(theme: AugumentedTheme) =>
	(background?: string, colors = ['text', 'text.contrast']) => {
		const getColor = _getColor(theme)
		const backgroundColor = getColor(background || 'background')
		const list = colors.map(getColor)
		mostReadable(backgroundColor, list)
	}
