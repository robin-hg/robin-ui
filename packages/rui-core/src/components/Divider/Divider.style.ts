import type { SizeValue } from '@rui/types'
import styled from '@rui/styles'
import { parseSize } from '@rui/utils'

interface DividerLineProps {
	$orientation: 'horizontal' | 'vertical'
	$thickness: string | number
	$spacing: SizeValue
}

export const DividerLine = styled.div<DividerLineProps>(
	{
		border: 'none'
	},
	({ theme, $orientation, $spacing, $thickness }) =>
		({
			horizontal: {
				width: '100%',
				margin: theme.fn.getSpacing([$spacing, 0]),
				borderTop: `solid ${parseSize($thickness)} ${theme.palette.outline}`
			},
			vertical: {
				display: 'inline',
				height: '100%',
				margin: theme.fn.getSpacing([0, $spacing]),
				borderRight: `solid ${parseSize($thickness)} ${theme.palette.outline}`
			}
		}[$orientation])
)
