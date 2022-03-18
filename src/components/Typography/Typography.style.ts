import styled, { css, type RUITheme } from 'style'
import { getColor, getContrastColor } from 'utils/color'

interface TypographyProps {
	$color: string
	$highlight?: string
	$bold: boolean
	$italic: boolean
	$decoration: 'underline' | 'line-through' | 'none'
	$fontSize?: string
	$fontWeight?: number
}

const common = (props: { theme: RUITheme } & TypographyProps) => css`
	margin: 0;
	font-family: ${props.theme.typography.fontFamily};
	font-style: ${props.$italic ? 'italic' : 'normal'};
	line-height: normal;
	color: ${props.$highlight ? getContrastColor(props.theme, props.$highlight) : getColor(props.theme, props.$color)};
	text-decoration: ${props.$decoration};
	letter-spacing: normal;
	background: ${props.$highlight ? getColor(props.theme, props.$highlight) : 'none'};

	&& {
		${props.$bold &&
		css`
			font-weight: ${props.theme.typography.fontWeights.bold};
		`}
		${props.$fontSize &&
		css`
			font-size: ${props.$fontSize} !important;
		`}
		${props.$fontWeight &&
		css`
			font-weight: ${props.$fontWeight} !important;
		`}
	}

	& > small {
		font-size: 0.7em;
	}
`

const heading = (props: { theme: RUITheme } & TypographyProps) => css`
	margin-bottom: 0.35em;
	font-weight: ${props.theme.typography.fontWeights.heading};
	line-height: 1.1em;
`

export const H1 = styled.h1<TypographyProps>`
	${common}
	${heading}
	font-size: ${props => props.theme.typography.fontSizes.h1};
`

export const H2 = styled.h2<TypographyProps>`
	${common}
	${heading}
	font-size: ${props => props.theme.typography.fontSizes.h2};
`

export const H3 = styled.h3<TypographyProps>`
	${common}
	${heading}
	font-size: ${props => props.theme.typography.fontSizes.h3};
`

export const H4 = styled.h4<TypographyProps>`
	${common}
	${heading}
	font-size: ${props => props.theme.typography.fontSizes.h4};
`

export const H5 = styled.h5<TypographyProps>`
	${common}
	${heading}
	font-size: ${props => props.theme.typography.fontSizes.h5};
`

export const H6 = styled.h6<TypographyProps>`
	${common}
	${heading}
	font-size: ${props => props.theme.typography.fontSizes.h6};
`

export const Subtitle1 = styled.h6<TypographyProps>`
	${common}
	font-size: ${props => props.theme.typography.fontSizes.subtitle1};
	font-weight: ${props => props.theme.typography.fontWeights.subtitle};
	line-height: 1.2;
`

export const Subtitle2 = styled.h6<TypographyProps>`
	${common}
	font-size: ${props => props.theme.typography.fontSizes.subtitle2};
	font-weight: ${props => props.theme.typography.fontWeights.subtitle};
	line-height: 1.2;
`

export const Body1 = styled.p<TypographyProps>`
	${common}
	font-size: ${props => props.theme.typography.fontSizes.body1};
	font-weight: ${props => props.theme.typography.fontWeights.body};
	line-height: 1.4;
`

export const Body2 = styled.p<TypographyProps>`
	${common}
	font-size: ${props => props.theme.typography.fontSizes.body2};
	font-weight: ${props => props.theme.typography.fontWeights.body};
	line-height: 1.4;
`

export const Caption = styled.p<TypographyProps>`
	${common}
	font-size: ${props => props.theme.typography.fontSizes.caption};
	font-weight: ${props => props.theme.typography.fontWeights.body};
	line-height: 1.5;
`
