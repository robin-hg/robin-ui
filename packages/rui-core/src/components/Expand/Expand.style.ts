import styled from '@rui/styles'

interface ExpandProps {
	$open: boolean
	$height: string
	$timeout: number
}

export const ExpandContainer = styled.div<ExpandProps>(({ theme, $open, $height, $timeout }) => ({
	height: $open ? $height : 0,
	overflow: 'hidden',
	transition: theme.fn.getTransition({ timeout: $timeout })
}))
