import type { ColorToken, SizeValue } from '@robin-ui/types'
import styled from '@robin-ui/styles'

import { BaseContainer } from '../BaseContainer'

const defaultSizes = {
	xs: '2rem',
	sm: '2.4rem',
	md: '2.8rem',
	lg: '3.2rem',
	xl: '4.4rem'
}

interface AvatarContainerProps {
	$color: ColorToken
	$size: SizeValue
	$radius: SizeValue
}

export const AvatarContainer = styled(BaseContainer)<AvatarContainerProps>(
	({ theme, $color, $size, $radius }) => ({
		position: 'relative',
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: theme.fn.getSize($size, defaultSizes),
		height: theme.fn.getSize($size, defaultSizes),
		fontSize: theme.fn.getSize($size, theme.typography.label.fontSize),
		lineHeight: '100%',
		color: theme.fn.getOnColor($color),
		background: theme.fn.getColor($color),
		borderRadius: theme.fn.getSize($radius, theme.radius),
		overflow: 'hidden',
		'&::before': {
			content: '"\\200b"'
		},
		'& > img': {
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			objectFit: 'cover'
		}
	})
)
