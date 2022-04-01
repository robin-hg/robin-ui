import styled, { css } from '@rui/style'

interface CircleProps {
	$color: string
	$checked: boolean
	$error: boolean
	$disabled: boolean
}

export const Circle = styled.span<CircleProps>`
	position: relative;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 2.4rem;
	height: 2.4rem;
	overflow: hidden;
	border: solid 0.1rem transparent;
	border-radius: 100%;
	outline: none;
	transition: all 200ms ease-out;

	${props => {
		const borderColor = props.$error ? 'error' : props.$checked ? props.$color : 'gray'
		const hoverColor = props.$error ? 'error' : props.$color

		return css`
			border-color: ${props.theme.utils.getColor(borderColor)};

			@media (hover: hover) {
				&:hover {
					background: ${props.theme.utils.getColorAlpha(hoverColor, 0.1)};
					border-color: ${props.theme.utils.getColor(hoverColor)};
				}
			}

			&:focus-visible {
				background: ${props.theme.utils.getColorAlpha(hoverColor, 0.1)};
				border-color: ${props.theme.utils.getColor(hoverColor)};
			}

			&:active {
				background: ${props.theme.utils.getColorAlpha(hoverColor, 0.2)};
				border-color: ${props.theme.utils.getColor(hoverColor)};
			}

			&::before {
				position: absolute;
				top: 50%;
				left: 50%;
				width: 1rem;
				height: 1rem;
				content: '';
				background: ${props.theme.utils.getColor(borderColor)};
				border-radius: 100%;
				transform: translate(-50%, -50%) scale(${props.$checked ? 1 : 0});
				transition: all 200ms ease-out;
			}
		`
	}}

	${props =>
		props.$disabled &&
		css`
			border-color: ${props.theme.colors.gray[5]} !important;
			box-shadow: none !important;

			&::before {
				background: ${props.theme.colors.gray[5]} !important;
			}
		`}

	& > input {
		position: absolute !important;
		width: 1px;
		height: 1px;
		overflow: hidden;
		opacity: 0;
	}
`
