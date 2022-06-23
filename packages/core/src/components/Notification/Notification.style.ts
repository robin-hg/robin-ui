import styled from '@robin-ui/styles'
import { Paper } from '../Paper'

export const NotificationContainer = styled(Paper)(({ theme }) => ({
  display: 'flex',
  alignItems: 'baseline',
  gap: theme.spacing.sm,
  '& > div': {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.sm
  }
}))
