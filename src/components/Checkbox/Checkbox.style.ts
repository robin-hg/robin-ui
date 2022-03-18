import styled, { css } from 'style'
import { getColor, getContrastColor } from 'utils/color'

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

	@media (hover: hover) {
		&:hover {
			box-shadow: ${props => props.theme.generateShadow(2, props.theme.colors.shadow, false)};
		}
	}

	&:active {
		box-shadow: ${props => props.theme.generateShadow(3, props.theme.colors.shadow, false)};
	}

	&:focus-visible {
		box-shadow: ${props => props.theme.generateShadow(2, props.theme.colors.shadow, false)};
	}

	${props => {
		const borderColor = props.$error ? 'error' : props.$checked ? props.$color : 'grey'

		const background = props.$checked ? borderColor : 'rgba(0, 0, 0, 0)'

		return css`
			color: ${getContrastColor(props.theme, background)};
			background: ${getColor(props.theme, background)};
			border-color: ${getColor(props.theme, borderColor)};
		`
	}}

	${props =>
		props.$disabled &&
		css`
			color: ${props.theme.colors.grey.base} !important;
			background: ${props.theme.colors.grey.light} !important;
			border-color: ${props.theme.colors.grey.base} !important;
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
