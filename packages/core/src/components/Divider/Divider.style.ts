import type { SizeValue } from '@robin-ui/types'
import styled from '@robin-ui/styles'

interface DividerLineProps {
	$orientation: 'horizontal' | 'vertical'
	$thickness: string | number
	$spacing: SizeValue
	$alignLabel: 'start' | 'center' | 'end'
	$hasChildren: boolean
}

export const DividerLine = styled.div<DividerLineProps>(
	({ theme, $orientation, $spacing, $thickness, $alignLabel, $hasChildren }) =>
		({
			horizontal: {
				display: 'flex',
				alignItems: 'center',
				gap: $hasChildren ? theme.spacing.md : 0,
				width: '100%',
				margin: theme.fn.getSpacing([$spacing, 0]),
				'&:before, &:after': {
					content: '""',
					flex: 1,
					borderTopStyle: 'solid' as React.CSSProperties['borderTopStyle'],
					borderWidth: $thickness,
					borderColor: theme.palette.outline
				},
				'&:before': $alignLabel === 'start' && {
					flex: 'unset',
					width: '5%'
				},
				'&:after': $alignLabel === 'end' && {
					flex: 'unset',
					width: '5%'
				}
			},
			vertical: {
				display: 'inline-flex',
				flexDirection: 'column' as React.CSSProperties['flexDirection'],
				alignItems: 'center',
				gap: $hasChildren ? theme.spacing.xs : 0,
				verticalAlign: 'top',
				height: '100%',
				margin: theme.fn.getSpacing([0, $spacing]),
				'&:before, &:after': {
					content: '""',
					flex: 1,
					borderRightStyle: 'solid' as React.CSSProperties['borderRightStyle'],
					borderWidth: $thickness,
					borderColor: theme.palette.outline
				},
				'&:before': $alignLabel === 'start' && {
					flex: 'unset',
					height: '5%'
				},
				'&:after': $alignLabel === 'end' && {
					flex: 'unset',
					height: '5%'
				}
			}
		}[$orientation])
)
