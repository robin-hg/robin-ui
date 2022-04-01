import styled, { css } from '@rui/style'

interface StyledLinkProps {
	$color: string
	$underline: 'always' | 'hover' | 'none'
	disabled?: boolean
}

export const StyledLink = styled.a<StyledLinkProps>`
	font-family: ${props => props.theme.typography.fontFamily};
	font-size: ${props => props.theme.typography.fontSizes.body};
	font-weight: ${props => props.theme.typography.fontWeights.bold};
	color: ${props => props.theme.utils.getColor(props.$color)};
	text-decoration: underline;
	text-decoration-thickness: 0.1rem;
	text-decoration-color: ${props => (props.$underline === 'always' ? 'inherit' : 'transparent')};
	text-underline-offset: 0.1rem;
	cursor: pointer;
	outline: none;
	transition: all 200ms ease-out;

	@media (hover: hover) {
		&:hover {
			color: ${props => props.theme.utils.getColorVariant(props.$color, 1)};
			text-decoration-color: ${props =>
				props.$underline === 'hover' || props.$underline === 'always' ? 'inherit' : 'transparent'};
		}
	}

	&:focus-visible {
		color: ${props => props.theme.utils.getColorVariant(props.$color, 1)};
		outline: auto;
		outline-offset: 0.2rem;
	}

	&:active {
		color: ${props => props.theme.utils.getColorVariant(props.$color, 2)};
	}

	${props =>
		props.disabled &&
		css`
			color: ${props.theme.typography.colors.disabled} !important;
			text-decoration-color: transparent !important;
			cursor: default;
		`}

	&::before {
		content: '\\200b';
	}
`
