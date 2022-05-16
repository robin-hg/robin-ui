import styled from '@rui/styles'

export const StepButtons = styled.div({
	display: 'flex',
	flexDirection: 'column',
	height: '100%',
	padding: '0.2rem 0',
	'& > button': {
		paddingTop: 0,
		paddingBottom: 0,
		height: '50%',
		minHeight: 0
	}
})
