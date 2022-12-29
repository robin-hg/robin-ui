import type { DefaultProps } from '@robin-ui/types'
import { forwardRef } from 'react'

import { StyledDiv } from './ScrollContainer.style'

export interface Props extends DefaultProps<HTMLDivElement> {}

export const ScrollContainer = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { children, ...otherProps } = props

  return (
    <StyledDiv ref={ref} {...otherProps}>
      {children}
    </StyledDiv>
  )
})

ScrollContainer.displayName = 'ScrollContainer'
