import styled, { css } from '@rui/style'

interface TypographyProps {
	$color: string
	$highlight?: string
	$bold: boolean
	$italic: boolean
	$decoration: string
	$fontSize?: string
	$fontWeight?: number
}

const common = (props: { theme: RobinUI.ThemeWithUtils } & TypographyProps) => css`
	margin: 0;
	font-family: ${props.theme.typography.fontFamily};
	font-style: ${props.$italic ? 'italic' : 'normal'};
	line-height: normal;
	color: ${props.theme.utils.getColor(props.$color) || props.theme.utils.getTextColor(props.$highlight)};
	text-decoration: ${props.$decoration};
	letter-spacing: normal;
	background: ${props.$highlight ? props.theme.utils.getColor(props.$highlight) : 'none'};

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

const heading = (props: { theme: RobinUI.ThemeWithUtils } & TypographyProps) => css`
	font-family: ${props.theme.typography.headingFontFamily};
	font-weight: ${props.theme.typography.fontWeights.heading};
	line-height: ${props.theme.typography.lineHeight.heading};
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

export const Subtitle = styled.h6<TypographyProps>`
	${common}
	font-size: ${props => props.theme.typography.fontSizes.subtitle};
	font-weight: ${props => props.theme.typography.fontWeights.subtitle};
	line-height: ${props => props.theme.typography.lineHeight.subtitle};
`

export const Body = styled.p<TypographyProps>`
	${common}
	font-size: ${props => props.theme.typography.fontSizes.body};
	font-weight: ${props => props.theme.typography.fontWeights.body};
	line-height: ${props => props.theme.typography.lineHeight.body};
`

export const Caption = styled.p<TypographyProps>`
	${common}
	font-size: ${props => props.theme.typography.fontSizes.caption};
	font-weight: ${props => props.theme.typography.fontWeights.body};
	line-height: ${props => props.theme.typography.lineHeight.caption};
`
