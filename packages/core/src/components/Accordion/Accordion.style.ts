import styled from '@robin-ui/styles'
import { BaseContainer } from '../BaseContainer'
import { Collapse } from '../Transition'

export const AccordionContainer = styled(BaseContainer)(({ theme }) => ({
  borderBottom: `solid 0.1rem ${theme.palette.outline}`
}))

interface AccordionSummaryProps {
  $open: boolean
  $expandable: boolean
}

export const AccordionSummary = styled.button<AccordionSummaryProps>(
  ({ theme, $expandable, $open }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    minHeight: '4rem',
    background: 'transparent',
    padding: theme.fn.getSpacing(['sm', 'md']),
    cursor: $expandable ? 'pointer' : 'default',
    userSelect: 'none',
    outline: '0.2rem solid transparent',
    border: 'none',
    color: 'inherit',
    transition: theme.fn.getTransition(),
    '&:hover': {
      background: theme.fn.getAlphaColor('surface.variant', 'hover')
    },
    '&:focus-visible': {
      background: theme.fn.getAlphaColor('surface.variant', 'focus'),
      outlineColor: theme.palette.primary.base
    },
    '&:active': {
      background: theme.fn.getAlphaColor('surface.variant', 'active')
    },
    '& > svg': {
      transition: theme.fn.getTransition(),
      transform: `rotate(${$open ? 180 : 0}deg)`
    }
  }),
  ({ theme }) => ({
    '&[disabled]': {
      background: `${theme.fn.getAlphaColor('surface.variant', 'disabled')} !important`,
      color: `${theme.fn.getMixedColor(
        'surface.variant',
        'surface.onVariant',
        'disabled'
      )} !important`
    }
  })
)

export const AccordionContent = styled(Collapse)(({ theme }) => ({
  padding: theme.spacing.md
}))
