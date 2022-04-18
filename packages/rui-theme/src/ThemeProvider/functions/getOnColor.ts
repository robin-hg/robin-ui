import type { AugumentedTheme, ColorToken } from '../../types'
import { mostReadable } from '@ctrl/tinycolor'
import { getColor as _getColor } from './getColor'
import { get, memoize } from '@rui/utils'

export const getOnColor = (theme: AugumentedTheme) =>
	memoize((background: ColorToken) => {
		const [base, variant = 'base'] = background.split('.')
		const v = variant === 'base' ? 'onBase' : 'onVariant'
		const onColor = get<string | undefined>(theme.palette, [base, v])

		if (onColor) {
			return onColor
		}

		const getColor = _getColor(theme)
		const backgroundColor = getColor(background)
		return mostReadable(backgroundColor, [theme.palette.surface.base, theme.palette.surface.onBase])?.toRgbString()
	})
