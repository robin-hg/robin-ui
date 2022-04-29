import styled from '@rui/styles'
import { Label as _Label, Text } from '../Typography'

export const Label = styled(_Label)(({ theme }) => ({
	display: 'block',
	marginBottom: theme.spacing.sm,
	'& > span': {
		marginLeft: theme.spacing.xs
	}
}))

export const Description = styled(Text)(({ theme }) => ({
	marginTop: `-${theme.spacing.sm}`,
	marginBottom: theme.spacing.sm
}))

export const ErrorMessage = styled(Text)(({ theme }) => ({
	marginTop: theme.spacing.sm
}))
