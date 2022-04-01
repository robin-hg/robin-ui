import styled, { css } from '@rui/style'

interface DividerLineProps {
	$orientation: 'horizontal' | 'vertical'
	$color: string
	$thickness: string
	$margin: string
}

export const DividerLine = styled.hr<DividerLineProps>`
	border: none;

	${props => {
		switch (props.$orientation) {
			case 'horizontal':
				return css`
					width: 100%;
					margin: ${props.$margin} 0;
					border-top: solid ${props.$thickness} ${props.theme.utils.getColor(props.$color)};
				`
			case 'vertical':
				return css`
					display: inline;
					height: 100%;
					margin: 0 ${props.$margin};
					border-right: solid ${props.$thickness} ${props.theme.utils.getColor(props.$color)};
				`
			default:
				return css``
		}
	}}
`
