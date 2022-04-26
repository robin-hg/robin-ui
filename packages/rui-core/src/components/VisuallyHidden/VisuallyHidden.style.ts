import styled from '@rui/styles'

export const HiddenContainer = styled.div({
	clip: 'rect(0, 0, 0, 0)',
	position: 'absolute',
	width: '0.1rem',
	height: '0.1rem',
	margin: '-0.1rem',
	overflow: 'hidden'
})
