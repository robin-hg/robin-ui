import styled from '@rui/styles'

interface DynamicResizeContainerProps {
	$width?: string | number
	$height?: string | number
	$duration: number
}

export const DynamicResizeContainer = styled.div<DynamicResizeContainerProps>(
	({ theme, $width, $height, $duration }) => ({
		width: $width,
		height: $height,
		overflow: 'hidden',
		transition: theme.fn.getTransition(['width', 'height'], $duration),
		'& > div': {
			width: 'fit-content'
		}
	})
)
