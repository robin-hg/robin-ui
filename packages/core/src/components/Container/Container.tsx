import { forwardRef } from 'react'

import type { DefaultProps, SizeValue } from '@robin-ui/types'

import { StyledContainer } from './Container.style'

export interface Props extends DefaultProps<HTMLDivElement> {
  maxWidth?: SizeValue
}

export const Container = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { maxWidth = '80ch', children, ...otherProps } = props
  return (
    <StyledContainer ref={ref} $maxWidth={maxWidth} {...otherProps}>
      {children}
    </StyledContainer>
  )
})

Container.displayName = 'Container'
