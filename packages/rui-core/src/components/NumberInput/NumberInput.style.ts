import styled from '@rui/styles'

export const StepButtons = styled.div(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	marginRight: `-${theme.spacing.sm}`,
	padding: theme.fn.getSpacing([0, 'xs']),
	height: '100%',
	'& > button': {
		paddingTop: 0,
		paddingBottom: 0,
		height: '50%',
		minHeight: 0
	}
}))

interface BigStepButtonProps {
	position: 'left' | 'right'
}

export const BigStepButton = styled.div<BigStepButtonProps>(({ theme, position }) => ({
	display: 'flex',
	alignItems: 'center',
	marginRight: position === 'right' ? `-${theme.spacing.sm}` : 0,
	marginLeft: position === 'left' ? `-${theme.spacing.sm}` : 0,
	padding: theme.spacing.xs,
	height: '100%',
	'& > button': {
		minHeight: 0
	}
}))
