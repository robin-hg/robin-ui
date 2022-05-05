import styled from '@rui/styles'

import { Fade } from '../Transition'

export const FadeContainer = styled(Fade)({
	position: 'absolute',
	top: 0,
	left: 0,
	zIndex: 5,
	width: 0,
	height: 0
})

export const Arrow = styled.span(({ theme }) => ({
	position: 'absolute',
	zIndex: -1,
	width: '0.8rem',
	height: '0.8rem',
	'&::before': {
		display: 'block',
		margin: 'auto',
		content: '""',
		border: `solid 0.4rem ${theme.palette.surface.base}`,
		borderRadius: '0.1rem',
		transform: 'rotate(45deg)'
	}
}))
