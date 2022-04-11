import type { Sizes } from '@rui/types'
import styled from '@rui/styles'

interface DividerLineProps {
	$orientation: 'horizontal' | 'vertical'
	$thickness: string
	$margin: Sizes | number | string
}

export const DividerLine = styled.hr<DividerLineProps>(
	{
		border: 'none'
	},
	({ theme, $orientation, $margin, $thickness }) =>
		theme.fn.getVariant(
			{
				horizontal: {
					width: '100%',
					margin: `${theme.fn.getSpacing($margin)} 0`,
					borderTop: `solid ${$thickness} ${theme.palette.outline}`
				},
				vertical: {
					display: 'inline',
					height: '100%',
					margin: `0 ${$margin}`,
					borderRight: `solid ${$thickness} ${theme.palette.outline}`
				}
			},
			$orientation
		)
)
