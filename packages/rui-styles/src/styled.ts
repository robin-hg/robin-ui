import _styled, { type Interpolation } from '@emotion/styled'
import { runIfFn } from '@rui/utils'
import tags from './tags'
import type { StyledOptions, DefaultProps, BaseCreateStyled, StyledTags, CreateStyled, SXComponents } from './types'

const excludedProps = new Set(['sx', 'css', 'as'])

const shouldForwardProp = (prop: string) => !excludedProps.has(prop) && !prop.startsWith('$')

const augumentStyle = <P extends Record<string, any>>(props: P & DefaultProps, label?: string) => {
	const { sx, theme } = props
	const themeSx = (label && theme.componentStyles[label]) || {}
	const themeStyle = Array.isArray(themeSx) ? themeSx.map(s => runIfFn(s, theme)) : themeSx
	const sxStyle = Array.isArray(sx) ? sx.map(s => runIfFn(s, theme)) : sx

	return [themeStyle, sxStyle].flat()
}

const styled: BaseCreateStyled =
	(component: any, options?: StyledOptions) =>
	<P extends Record<string, any>>(...styles: Interpolation<P & DefaultProps>[]) => {
		if (options?.shouldForwardProp) {
			options.shouldForwardProp = shouldForwardProp
		}

		return _styled(component, options)(...styles, augumentStyle)
	}

const styledTags = tags.reduce((acc, tag) => ({ ...acc, [tag]: styled(tag) }), {}) as StyledTags
export const sxc = tags.reduce((acc, tag) => ({ ...acc, [tag]: styled(tag)({}) }), {}) as SXComponents

const newStyled: CreateStyled = Object.assign(styled, styledTags)
export default newStyled
