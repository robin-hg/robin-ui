import type { Sizes } from '@rui/types'
import styled from '@rui/styles'

interface DividerLineProps {
	$orientation: 'horizontal' | 'vertical'
	$thickness: string
	$spacing: Sizes | number | string
}

export const DividerLine = styled.hr<DividerLineProps>(
	{
		border: 'none'
	},
	({ theme, $orientation, $spacing, $thickness }) =>
		theme.fn.getVariant(
			{
				horizontal: {
					width: '100%',
					margin: `${theme.fn.getSpacing($spacing)} 0`,
					borderTop: `solid ${$thickness} ${theme.palette.outline}`
				},
				vertical: {
					display: 'inline',
					height: '100%',
					margin: `0 ${$spacing}`,
					borderRight: `solid ${$thickness} ${theme.palette.outline}`
				}
			},
			$orientation
		)
)
