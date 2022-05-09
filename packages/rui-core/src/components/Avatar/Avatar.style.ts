import type { ColorToken, SizeValue } from '@rui/types'
import styled from '@rui/styles'

import { BaseContainer } from '../BaseContainer'

interface AvatarContainerProps {
	$color: ColorToken
	$size: SizeValue
	$radius: SizeValue
}

export const AvatarContainer = styled(BaseContainer)<AvatarContainerProps>(({ theme, $color, $size, $radius }) => ({
	position: 'relative',
	display: 'inline-flex',
	alignItems: 'center',
	justifyContent: 'center',
	width: theme.fn.getSize($size, theme.size),
	height: theme.fn.getSize($size, theme.size),
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
		height: '100%'
	}
}))
