import type { ColorToken, DefaultProps, SizeValue } from '@robin-ui/types'
import { cloneElement, forwardRef } from 'react'
import { useTheme } from '@robin-ui/styles'

const defaultSizes = {
  xs: '1.6rem',
  sm: '2rem',
  md: '2.4rem',
  lg: '3.2rem',
  xl: '4.4rem'
}

export interface Props extends DefaultProps<SVGElement, 'children' | 'size'> {
  color?: ColorToken
  size?: SizeValue
  strokeWidth?: number
}

export default (icon: JSX.Element, name: string) => {
  const Icon = forwardRef<SVGElement, Props>((props, ref) => {
    const { color = 'inherit', size = 'md', strokeWidth = 2, sx, ...otherProps } = props

    const theme = useTheme()
    const colorStr = color !== 'inherit' && theme.fn.getColor(color)

    return cloneElement(icon, {
      ref,
      sx: [{ color: colorStr }, sx],
      width: theme.fn.getSize(size, defaultSizes),
      height: theme.fn.getSize(size, defaultSizes),
      strokeWidth,
      ...otherProps
    })
  })
  Icon.displayName = name

  return Icon
}
