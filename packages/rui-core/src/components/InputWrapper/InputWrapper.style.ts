import styled from '@rui/styles'
import { Stack } from '../Stack'

export const InputContainer = styled(Stack)(({ theme }) => ({
	'& > label > span': {
		marginLeft: theme.spacing.xs
	}
}))

export const Content = styled.div(({ theme }) => ({
	'&:not(:first-child)': {
		paddingTop: theme.spacing.xs
	}
}))
