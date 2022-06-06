import styled from '@robin-ui/styles'
import { Label as _Label, Text } from '../Typography'

export const Label = styled(_Label)(({ theme }) => ({
	width: 'auto',
	'& > span': {
		marginLeft: theme.spacing.xs
	}
}))

export const Description = styled(Text)(({ theme }) => ({
	marginTop: `-${theme.spacing.xs}`
}))
