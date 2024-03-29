import { m } from 'framer-motion'

import { styled } from '@robin-ui/styles'

export const TabGroup = styled.div({
  display: 'flex',
  width: '100%'
})

export const TabIndicator = styled(m.div)(({ theme }) => ({
  width: '100%',
  height: '0.2rem',
  background: theme.palette.primary.base,
  marginBottom: '-0.2rem'
}))
