import styled, { css } from 'style'
import { getColor, getColorVariant } from 'utils/color'

interface StyledLinkProps {
	$color: string
	$underline: 'always' | 'hover' | 'none'
	disabled?: boolean
}

export const StyledLink = styled.a<StyledLinkProps>`
	font-family: ${props => props.theme.typography.fontFamily};
	font-size: ${props => props.theme.typography.fontSizes.link};
	font-weight: ${props => props.theme.typography.fontWeights.link};
	color: ${props => getColor(props.theme, props.$color)};
	text-decoration: underline;
	text-decoration-thickness: 0.1rem;
	text-decoration-color: ${props => (props.$underline === 'always' ? 'inherit' : 'transparent')};
	text-underline-offset: 0.1rem;
	cursor: pointer;
	outline: none;
	transition: all 200ms ease-out;

	@media (hover: hover) {
		&:hover {
			color: ${props => getColorVariant(props.theme, props.$color, 'dark')};
			text-decoration-color: ${props =>
				props.$underline === 'hover' || props.$underline === 'always' ? 'inherit' : 'transparent'};
		}
	}

	&:focus-visible {
		color: ${props => getColorVariant(props.theme, props.$color, 'dark')};
		outline: auto;
		outline-offset: 0.2rem;
	}

	&:active {
		color: ${props => getColorVariant(props.theme, props.$color, 'extraDark')};
	}

	${props =>
		props.disabled &&
		css`
			color: ${props.theme.colors.text.disabled} !important;
			text-decoration-color: transparent !important;
			cursor: default;
		`}

	&::before {
		content: '\\200b';
	}
`
