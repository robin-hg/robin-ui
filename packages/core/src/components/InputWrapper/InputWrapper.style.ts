import styled from '@robin-ui/styles'
import { Text, Label as _Label } from '../Typography'

export const Label = styled(_Label)(({ theme }) => ({
  width: 'auto',
  '& > span': {
    marginLeft: theme.spacing.xs
  }
}))

export const Description = styled(Text)(({ theme }) => ({
  marginTop: `-${theme.spacing.xs}`
}))
