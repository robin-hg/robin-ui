import type { SizeValue } from '@robin-ui/types'
import styled from '@robin-ui/styles'
import { parseSize } from '@robin-ui/utils'

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
