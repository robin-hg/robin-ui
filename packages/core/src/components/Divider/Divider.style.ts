import type { ColorToken, SizeValue } from '@robin-ui/types'
import styled from '@robin-ui/styles'

const defaultThickness = {
  xs: '0.1rem',
  sm: '0.2rem',
  md: '0.2rem',
  lg: '0.3rem',
  xl: '0.4rem'
}

interface DividerLineProps {
  $orientation: 'horizontal' | 'vertical'
  $color: ColorToken
  $thickness: SizeValue
  $spacing: SizeValue
  $alignLabel: 'start' | 'center' | 'end'
  $hasChildren: boolean
}

export const DividerLine = styled.div<DividerLineProps>(
  ({ theme, $orientation, $spacing, $thickness, $color, $alignLabel, $hasChildren }) =>
    ({
      horizontal: {
        display: 'flex',
        alignItems: 'center',
        gap: $hasChildren ? theme.spacing.md : 0,
        width: '100%',
        margin: theme.fn.getSpacing([$spacing, 0]),
        '&::before, &::after': {
          content: '""',
          flex: 1,
          borderTopStyle: 'solid' as React.CSSProperties['borderTopStyle'],
          borderWidth: theme.fn.getSize($thickness, defaultThickness),
          borderColor: theme.fn.getColor($color)
        },
        '&::before': $alignLabel === 'start' && {
          flex: 'unset',
          width: '5%'
        },
        '&::after': $alignLabel === 'end' && {
          flex: 'unset',
          width: '5%'
        }
      },
      vertical: {
        display: 'inline-flex',
        flexDirection: 'column' as React.CSSProperties['flexDirection'],
        alignItems: 'center',
        gap: $hasChildren ? theme.spacing.xs : 0,
        verticalAlign: 'top',
        height: '100%',
        margin: theme.fn.getSpacing([0, $spacing]),
        '&::before, &::after': {
          content: '""',
          flex: 1,
          borderRightStyle: 'solid' as React.CSSProperties['borderRightStyle'],
          borderWidth: $thickness,
          borderColor: theme.palette.outline
        },
        '&::before': $alignLabel === 'start' && {
          flex: 'unset',
          height: '5%'
        },
        '&::after': $alignLabel === 'end' && {
          flex: 'unset',
          height: '5%'
        }
      }
    }[$orientation])
)
