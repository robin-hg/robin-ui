import { forwardRef } from 'react'

import type { DefaultProps } from '@robin-ui/types'

import { StyledBaseContainer } from './BaseContainer.style'

export interface Props extends DefaultProps<HTMLDivElement> {
  as?: React.ElementType
}

export const BaseContainer = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { as, children, ...otherProps } = props

  return (
    <StyledBaseContainer ref={ref} as={as} {...otherProps}>
      {children}
    </StyledBaseContainer>
  )
})

BaseContainer.displayName = 'BaseContainer'
