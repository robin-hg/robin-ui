import { styled } from '@robin-ui/styles'

export const Content = styled.div({
  display: 'inline-flex',
  alignItems: 'baseline'
})

export const Marker = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginRight: theme.spacing.sm,
  userSelect: 'none',
  '&::before': {
    content: '"\\200b"'
  }
}))
