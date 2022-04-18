import type { AugumentedTheme, ColorToken } from '../../types'
import { get, memoize } from '@rui/utils'

const DEFAULT_SHADE = 500

export const getColor = (theme: AugumentedTheme) =>
	memoize((color: ColorToken) => {
		const [base, shade] = color.split('.')

		return get(theme.palette, [base, shade || 'base'], get(theme.colors, [base, shade || DEFAULT_SHADE], color))
	})
