import styled, { css } from 'style'
import { getColor, getColorVariant } from 'utils/color'

import { BaseContainer } from 'index'

interface PaperContainerProps {
	$elevation: number
	$color: string
}

export const PaperContainer = styled(BaseContainer)<PaperContainerProps>`
	box-sizing: border-box;
	overflow: hidden;
	background: ${props => getColor(props.theme, props.$color)};
	border-radius: ${props => props.theme.borderRadius};
	transition: all 200ms ease-out;

	${props =>
		props.$elevation === 0
			? css`
					border: solid 0.1rem
						${props.$color === 'paper'
							? props.theme.colors.grey.light
							: getColorVariant(props.theme, props.$color, 'dark')};
			  `
			: css`
					box-shadow: ${props.theme.generateShadow(props.$elevation, props.theme.colors.shadow)};
			  `}
`
