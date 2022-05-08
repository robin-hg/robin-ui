import type { ColorToken, Size } from '@rui/types'
import styled from '@rui/styles'

interface TagContainerProps {
	$variant: 'filled' | 'outlined'
	$color: ColorToken
	$size: Size
}

export const TagContainer = styled.span<TagContainerProps>(
	({ theme, $size, $color }) => ({
		display: 'inline-flex',
		alignItems: 'center',
		padding: theme.fn.getSpacing(['xs', 'sm']),
		overflow: 'hidden',
		fontFamily: theme.typography.label.fontFamily,
		fontSize: theme.typography.label.fontSize[$size],
		fontWeight: theme.typography.label.fontWeight,
		lineHeight: theme.typography.label.lineHeight[$size],
		color: theme.fn.getOnColor($color),
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
		borderRadius: '1em',
		'&::before': {
			content: '"\\200b"'
		},
		'& svg': {
			width: 'auto',
			height: '1.2em'
		}
	}),
	({ theme, $variant, $color }) =>
		({
			filled: {
				background: theme.fn.getColor($color),
				color: theme.fn.getOnColor($color)
			},
			outlined: {
				background: 'transparent',
				color: theme.fn.getColor($color),
				border: `0.1rem solid ${theme.fn.getColor($color)}`
			}
		}[$variant])
)
