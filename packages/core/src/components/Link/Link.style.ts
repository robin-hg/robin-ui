import { styled } from '@robin-ui/styles'
import type { ColorToken, SizeValue } from '@robin-ui/theme'

interface StyledLinkProps {
  $size: SizeValue
  $color: ColorToken
  $underline: boolean
}

export const StyledLink = styled.a<StyledLinkProps>(({ theme, $size, $color, $underline }) => ({
  fontFamily: theme.typography.text.fontFamily,
  fontSize: theme.fn.getSize($size, theme.typography.text.fontSize),
  fontWeight: 'bold',
  color: theme.fn.getColor($color),
  background: 'none',
  border: 'none',
  textDecoration: $underline ? 'underline' : 'none',
  textDecorationThickness: '0.1rem',
  textUnderlineOffset: '0.2rem',
  textDecorationColor: 'transparent',
  borderRadius: theme.radius.sm,
  outline: '0.2rem solid transparent',
  outlineOffset: '0.2rem',
  cursor: 'pointer',
  transition: theme.fn.getTransition(),
  '&::before': {
    content: '"\\200b"'
  },
  '&:hover': {
    color: theme.fn.getMixedColor($color, theme.fn.getOnColor($color), 'hover'),
    textDecorationColor: 'currentColor'
  },
  '&:focus-visible': {
    color: theme.fn.getMixedColor($color, theme.fn.getOnColor($color), 'focus'),
    outlineColor: 'currentColor'
  },
  '&:active': {
    color: theme.fn.getMixedColor($color, theme.fn.getOnColor($color), 'active')
  },
  '&[disabled]': {
    color: `${theme.fn.getMixedColor('surface.base', 'surface.base', 'disabled')} !important`,
    textDecoration: 'none !important',
    cursor: 'default !important'
  }
}))
