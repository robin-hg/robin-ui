import type { SizeValue } from '@robin-ui/types'
import styled from '@robin-ui/styles'

interface DividerLineProps {
	$orientation: 'horizontal' | 'vertical'
	$thickness: string | number
	$spacing: SizeValue
}

export const DividerLine = styled.div<DividerLineProps>(
	({ theme, $orientation, $spacing, $thickness }) =>
		({
			horizontal: {
				width: '100%',
				margin: theme.fn.getSpacing([$spacing, 0]),
				borderStyle: 'solid',
				borderWidth: $thickness,
				borderColor: theme.palette.outline
			},
			vertical: {
				display: 'inline',
				height: '100%',
				margin: theme.fn.getSpacing([0, $spacing]),
				borderRight: 'solid',
				borderWidth: $thickness,
				borderColor: theme.palette.outline
			}
		}[$orientation])
)
