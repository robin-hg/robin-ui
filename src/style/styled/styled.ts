import styled, { type Interpolation } from '@emotion/styled'
import type { Theme } from '@emotion/react'
import tags from './tags'
import type { ExtendedCreateStyled, StyledBaseComponents, SX } from './types'

const excludedProps = new Set(['sx', 'css', 'as'])

const shouldForwardProp = (prop: string) => !excludedProps.has(prop) && !prop.startsWith('$')

const augumentStyle = (
	baseStyle: TemplateStringsArray,
	expressions: Interpolation<{
		theme: Theme
		sx?: SX
	}>[]
) => {
	let transformedStyle = baseStyle
	const transformedExpressions = [...expressions]
	transformedExpressions.push(props => {
		const { sx, theme } = props
		if (!sx) {
			return null
		}
		return { '&&': typeof sx === 'function' ? sx(theme) : sx }
	})
	if (Array.isArray(baseStyle)) {
		transformedStyle = { raw: [...baseStyle.raw, ''], ...[...baseStyle, ''] }
	}
	return { transformedStyle, transformedExpressions }
}

const extendedStyled: ExtendedCreateStyled = new Proxy(styled, {
	apply:
		(_styled, _, args: Parameters<typeof styled>) =>
		(
			baseStyle: TemplateStringsArray,
			...expressions: Interpolation<{
				theme: Theme
			}>[]
		) => {
			const [component, options] = args
			const { transformedStyle, transformedExpressions } = augumentStyle(baseStyle, expressions)
			return _styled(component, { ...options, shouldForwardProp })(transformedStyle, ...transformedExpressions)
		},
	get:
		(_styled, tag: keyof JSX.IntrinsicElements) =>
		(
			baseStyle: TemplateStringsArray,
			...expressions: Interpolation<{
				theme: Theme
				sx?: SX
			}>[]
		) => {
			const { transformedStyle, transformedExpressions } = augumentStyle(baseStyle, expressions)
			return _styled(tag, { shouldForwardProp })(transformedStyle, ...transformedExpressions)
		}
})

export const Styled = (tags as (keyof JSX.IntrinsicElements)[]).reduce(
	(acc, tag) => ({ ...acc, [tag]: extendedStyled(tag)({}) }),
	{}
) as StyledBaseComponents

export default extendedStyled
