import styled, { css } from 'style'
import { getColor, getColorAlpha, getColorVariant, getContrastColor } from 'utils/color'

import { AutoResizer } from 'index'

interface StyledButtonProps {
	$variant: 'contained' | 'outlined' | 'text'
	$size: 'sm' | 'md' | 'lg'
	$color: string
}

export const StyledButton = styled.button<StyledButtonProps>`
	box-sizing: border-box;
	display: inline-flex;
	align-items: center;
	overflow: hidden;
	font-family: ${props => props.theme.typography.fontFamily};
	font-weight: ${props => props.theme.typography.fontWeights.button};
	text-decoration: none;
	text-overflow: ellipsis;
	white-space: nowrap;
	cursor: ${props => (props.disabled ? 'default' : 'pointer')};
	user-select: none;
	border: solid 0.1rem transparent;
	border-radius: ${props => props.theme.borderRadius};
	outline: none;
	transition: all 200ms ease-out;

	${props => {
		switch (props.$variant) {
			case 'contained':
				return css`
					color: ${getContrastColor(props.theme, props.$color)};
					background: ${getColor(props.theme, props.$color)};

					@media (hover: hover) {
						&:hover {
							background: ${getColorVariant(props.theme, props.$color, 'dark')};
						}
					}

					&:focus-visible {
						background: ${getColorVariant(props.theme, props.$color, 'dark')};
					}

					&:active {
						background: ${getColorVariant(props.theme, props.$color, 'extraDark')};
					}

					${props.disabled &&
					css`
						color: ${props.theme.colors.grey.extraLight} !important;
						background: ${props.theme.colors.text.disabled} !important;
					`}
				`
			case 'outlined':
				return css`
					color: ${getColor(props.theme, props.$color)};
					background: transparent;
					border-color: ${getColor(props.theme, props.$color)};

					@media (hover: hover) {
						&:hover {
							background: ${getColorAlpha(props.theme, props.$color, 0.15)};
						}
					}

					&:focus-visible {
						background: ${getColorAlpha(props.theme, props.$color, 0.15)};
					}

					&:active {
						background: ${getColorAlpha(props.theme, props.$color, 0.3)};
					}

					${props.disabled &&
					css`
						color: ${props.theme.colors.text.disabled} !important;
						background: ${props.theme.colors.grey.extraLight} !important;
						border-color: ${props.theme.colors.text.disabled} !important;
					`}
				`
			case 'text':
				return css`
					color: ${getColor(props.theme, props.$color)};
					background: transparent;

					@media (hover: hover) {
						&:hover {
							color: ${getColorVariant(props.theme, props.$color, 'light')};
							background: ${getColorAlpha(props.theme, props.$color, 0.15)};
						}
					}

					&:focus-visible {
						background: ${getColorAlpha(props.theme, props.$color, 0.15)};
					}

					&:active {
						background: ${getColorAlpha(props.theme, props.$color, 0.3)};
					}

					${props.disabled &&
					css`
						color: ${props.theme.colors.text.disabled} !important;
						background: transparent !important;
					`}
				`
			default:
				return css``
		}
	}}

	${props => {
		switch (props.$size) {
			case 'sm':
				return css`
					height: 3rem;
					padding: 0.5rem 1rem;
					font-size: ${props.theme.typography.fontSizes.buttonSm};
				`
			case 'md':
				return css`
					height: 3.6rem;
					padding: 0.5rem 1.5rem;
					font-size: ${props.theme.typography.fontSizes.buttonMd};
				`
			case 'lg':
				return css`
					height: 4.4rem;
					padding: 1.5rem 2rem;
					font-size: ${props.theme.typography.fontSizes.buttonLg};
				`
			default:
				return css``
		}
	}}
`

export const Content = styled(AutoResizer)`
	display: inline-flex;
	align-items: center;
	justify-content: center;

	&::before {
		content: '\\200b';
	}
`

interface AdornmentProps {
	$position?: 'start' | 'end'
}

export const Adornment = styled.span<AdornmentProps>`
	display: flex;
	align-items: center;
	margin-right: ${props => (props.$position === 'start' ? 0.5 : 0)}em;
	margin-left: ${props => (props.$position === 'end' ? 0.5 : 0)}em;

	&::before {
		content: '\\200b';
	}
`
