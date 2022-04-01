import styled, { css } from '@rui/style'
import AutoResizer from '@rui/components/AutoResizer'

interface StyledButtonProps {
	$variant: 'contained' | 'outlined' | 'text'
	$size: 'sm' | 'md' | 'lg'
	$color: string
}

export const StyledButton = styled.button<StyledButtonProps>`
	box-sizing: border-box;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	min-width: 4rem;
	overflow: hidden;
	font-family: ${props => props.theme.typography.fontFamily};
	font-size: ${props => props.theme.typography.fontSizes.button};
	font-weight: ${props => props.theme.typography.fontWeights.bold};
	text-align: center;
	text-decoration: none;
	text-overflow: ellipsis;
	white-space: nowrap;
	cursor: ${props => (props.disabled ? 'default' : 'pointer')};
	user-select: none;
	border: solid 0.1rem transparent;
	border-radius: ${props => props.theme.borderRadius};
	outline: none;
	transition: all 200ms ease-out, outline 0ms;

	&:focus-visible {
		outline: solid 0.1rem ${props => props.theme.colors.primary[5]};
		outline-offset: 0.2rem;
	}

	${props => {
		switch (props.$variant) {
			case 'contained':
				return css`
					color: ${props.theme.utils.getTextColor(props.$color, [
						props.theme.typography.colors.contrast,
						props.theme.utils.getColorVariant(props.$color, 4)
					])};
					background: ${props.theme.utils.getColor(props.$color)};

					@media (hover: hover) {
						&:hover {
							background: ${props.theme.utils.getColorVariant(props.$color, 1)};
						}
					}

					&:focus-visible {
						background: ${props.theme.utils.getColorVariant(props.$color, 1)};
					}

					&:active {
						background: ${props.theme.utils.getColorVariant(props.$color, 2)};
					}

					${props.disabled &&
					css`
						color: ${props.theme.typography.colors.disabled} !important;
						background: ${props.theme.darkMode
							? props.theme.colors.dark[6]
							: props.theme.colors.gray[1]} !important;
					`}
				`
			case 'outlined':
				return css`
					color: ${props.theme.utils.getColor(props.$color)};
					background: transparent;
					border-color: ${props.theme.utils.getColor(props.$color)};

					@media (hover: hover) {
						&:hover {
							background: ${props.theme.utils.getColorAlpha(props.$color, 0.1)};
						}
					}

					&:focus-visible {
						background: ${props.theme.utils.getColorAlpha(props.$color, 0.1)};
					}

					&:active {
						background: ${props.theme.utils.getColorAlpha(props.$color, 0.2)};
					}

					${props.disabled &&
					css`
						color: ${props.theme.typography.colors.disabled} !important;
						background: ${props.theme.darkMode
							? props.theme.colors.dark[6]
							: props.theme.colors.gray[1]} !important;
						border-color: ${props.theme.typography.colors.disabled} !important;
					`}
				`
			case 'text':
				return css`
					color: ${props.theme.utils.getColor(props.$color)};
					background: transparent;

					@media (hover: hover) {
						&:hover {
							background: ${props.theme.utils.getColorAlpha(props.$color, 0.1)};
						}
					}

					&:focus-visible {
						background: ${props.theme.utils.getColorAlpha(props.$color, 0.1)};
					}

					&:active {
						background: ${props.theme.utils.getColorAlpha(props.$color, 0.2)};
					}

					${props.disabled &&
					css`
						color: ${props.theme.typography.colors.disabled} !important;
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
					height: 3.2rem;
					padding: 0.4rem 0.8rem;
				`
			case 'md':
				return css`
					height: 3.6rem;
					padding: 0.4rem 1.6rem;
				`
			case 'lg':
				return css`
					height: 4rem;
					padding: 1.2rem 2rem;
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
	margin-right: ${props => (props.$position === 'start' ? 0.8 : 0)}rem;
	margin-left: ${props => (props.$position === 'end' ? 0.8 : 0)}rem;

	&::before {
		content: '\\200b';
	}
`
