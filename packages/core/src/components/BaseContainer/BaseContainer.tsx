import type { DefaultProps } from '@robin-ui/types'
import React from 'react'

import { StyledBaseContainer } from './BaseContainer.style'

export interface Props extends DefaultProps<HTMLDivElement> {
  as?: React.ElementType
}

export const BaseContainer = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { as, children, ...otherProps } = props

  return (
    <StyledBaseContainer ref={ref} as={as} {...otherProps}>
      {children}
    </StyledBaseContainer>
  )
})

BaseContainer.displayName = 'BaseContainer'
