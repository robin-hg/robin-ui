import type { SizeValue } from '@rui/theme'
import styled from '@rui/styles'
import { Fade } from '../Transition'

interface ImageContainerProps {
	$radius: SizeValue
	$width: string | number
	$height: string | number
	$fit: React.CSSProperties['objectFit']
}

export const ImageContainer = styled.div<ImageContainerProps>(({ theme, $radius, $width, $height, $fit }) => ({
	position: 'relative',
	minHeight: theme.size.xl,
	'& > img': {
		display: 'block',
		objectFit: $fit,
		width: $width,
		height: $height,
		borderRadius: theme.fn.getSize($radius, theme.radius)
	}
}))

export const Placeholder = styled(Fade)(({ theme }) => ({
	position: 'absolute',
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	background: theme.palette.surface.variant
}))
