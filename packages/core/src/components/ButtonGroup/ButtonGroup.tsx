import { createContext, forwardRef, useMemo } from 'react'

import type { ColorToken, DefaultProps, Size, SizeValue } from '@robin-ui/types'

import { ButtonGroupContainer } from './ButtonGroup.style'

export const ButtonGroupContext = createContext<{
  groupVariant?: 'flat' | 'faded' | 'outlined' | 'text'
  groupColor?: string
  groupSize?: Size
}>({})

export interface Props extends DefaultProps<HTMLDivElement, 'size'> {
  variant?: 'flat' | 'faded' | 'outlined' | 'text'
  color?: ColorToken
  size?: Size
  radius?: SizeValue
}

export const ButtonGroup = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    variant = 'flat',
    color = 'primary',
    size = 'md',
    radius = 'sm',
    children,
    ...otherProps
  } = props

  const ctxValue = useMemo(
    () => ({ groupVariant: variant, groupColor: color, groupSize: size }),
    [variant, color, size]
  )

  return (
    <ButtonGroupContainer ref={ref} $radius={radius} {...otherProps}>
      <ButtonGroupContext.Provider value={ctxValue}>{children}</ButtonGroupContext.Provider>
    </ButtonGroupContainer>
  )
})

ButtonGroup.displayName = 'ButtonGroup'
