import styled, { css } from 'style'
import { getColor } from 'utils/color'

interface DividerLineProps {
	$orientation: 'horizontal' | 'vertical'
	$color: string
	$thickness: string
	$margin: string
}

export const DividerLine = styled.hr<DividerLineProps>`
	${props => {
		switch (props.$orientation) {
			case 'horizontal':
				return css`
					width: 100%;
					margin: ${props.$margin} 0;
					border-top: solid ${props.$thickness} ${getColor(props.theme, props.$color)};
				`
			case 'vertical':
				return css`
					display: inline;
					height: 100%;
					margin: 0 ${props.$margin};
					border-right: solid ${props.$thickness} ${getColor(props.theme, props.$color)};
				`
			default:
				return css``
		}
	}}
`
