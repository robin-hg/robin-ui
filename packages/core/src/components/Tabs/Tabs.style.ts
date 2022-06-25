import styled from '@robin-ui/styles'

export const TabGroup = styled.div(({ theme }) => ({
  display: 'flex',
  width: '100%',
  borderBottom: `solid 0.2rem ${theme.palette.outline}`
}))

export const TabIndicator = styled.div(({ theme }) => ({
  width: '100%',
  height: '0.2rem',
  background: theme.palette.primary.base,
  marginBottom: '-0.2rem'
}))
