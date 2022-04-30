import styled from '@rui/styles'
import { Label as _Label, Text } from '../Typography'

export const Label = styled(_Label)(({ theme }) => ({
	display: 'inline-block',
	marginBottom: theme.spacing.sm,
	'& > span': {
		marginLeft: theme.spacing.xs
	}
}))

export const Description = styled(Text)(({ theme }) => ({
	marginTop: `-${theme.spacing.xs}`,
	marginBottom: theme.spacing.sm
}))

export const ErrorMessage = styled(Text)(({ theme }) => ({
	marginTop: theme.spacing.sm
}))
