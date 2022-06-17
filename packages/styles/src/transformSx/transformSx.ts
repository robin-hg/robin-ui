import type { Theme, CSSObject, Interpolation } from '@emotion/react'
import type { StyleProps, SX } from '../types'
import { colorProperties, spacingProperties } from './properties'
import { runIfFn } from '@robin-ui/utils'

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

type ValueOf<T> = T[keyof T]
const replaceValue = (key: string, value: ValueOf<CSSObject>, theme: Theme) => {
	if (!value) {
		return value
	}
	if (typeof value === 'object') {
		return traverse(value, theme)
	}
	if (colorProperties.has(key) && typeof value === 'string') {
		return theme.fn.getColor(value)
	}
	if (spacingProperties.has(key) && typeof value === 'string') {
		return theme.fn.getSpacing(value)
	}
	return value
}

const replaceKey = (key: string, theme: Theme) => {
	switch (key) {
		case '_xs':
		case '_sm':
		case '_md':
		case '_lg':
		case '_xl': {
			const breakpoint = key.slice(1) as Size
			return theme.media[breakpoint]
		}
		default:
			return key
	}
}

const traverse = <P extends StyleProps>(style: Interpolation<P>, theme: Theme): CSSObject => {
	if (!style) {
		return {}
	}
	return Object.fromEntries(
		Object.entries(style).map(([key, value]) => [
			replaceKey(key, theme),
			replaceValue(key, value as ValueOf<CSSObject>, theme)
		])
	)
}

export const transformSx = (style?: SX) => (props: StyleProps) => {
	return traverse(runIfFn(style, props.theme), props.theme)
}
