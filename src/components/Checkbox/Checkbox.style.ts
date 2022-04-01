import styled, { css } from '@rui/style'

interface BoxProps {
	$color: string
	$checked: boolean
	$error: boolean
	$disabled: boolean
}

export const Box = styled.span<BoxProps>`
	position: relative;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 2.4rem;
	height: 2.4rem;
	overflow: hidden;
	border: solid 0.1rem transparent;
	border-radius: ${props => props.theme.borderRadius};
	outline: none;
	transition: all 200ms ease-out;

	${props => {
		const borderColor = props.$error ? 'error' : props.$checked ? props.$color : 'gray'
		const hoverColor = props.$error ? 'error' : props.$color
		const background = props.$checked ? borderColor : 'rgba(0, 0, 0, 0)'

		return css`
			color: ${props.theme.utils.getTextColor(props.$color, [
				props.theme.typography.colors.contrast,
				props.theme.utils.getColorVariant(props.$color, 4)
			])};
			background: ${props.theme.utils.getColor(background)};
			border-color: ${props.theme.utils.getColor(borderColor)};

			@media (hover: hover) {
				&:hover {
					background: ${props.$checked
						? props.theme.utils.getColorVariant(background, 1)
						: props.theme.utils.getColorAlpha(hoverColor, 0.1)};
					border-color: ${props.theme.utils.getColor(hoverColor)};
				}
			}

			&:focus-visible {
				background: ${props.$checked
					? props.theme.utils.getColorVariant(background, 1)
					: props.theme.utils.getColorAlpha(hoverColor, 0.1)};
				border-color: ${props.theme.utils.getColor(hoverColor)};
			}

			&:active {
				background: ${props.$checked
					? props.theme.utils.getColorVariant(background, 2)
					: props.theme.utils.getColorAlpha(hoverColor, 0.2)};
				border-color: ${props.theme.utils.getColor(hoverColor)};
			}
		`
	}}

	${props =>
		props.$disabled &&
		css`
			color: ${props.theme.colors.gray[5]} !important;
			background: ${props.theme.colors.gray[3]} !important;
			border-color: ${props.theme.colors.gray[5]} !important;
			box-shadow: none !important;
		`}

	& > input {
		position: absolute !important;
		width: 1px;
		height: 1px;
		overflow: hidden;
		opacity: 0;
	}
`
