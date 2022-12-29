import { forwardRef } from 'react'

import type { DefaultProps } from '@robin-ui/types'

import { HiddenContainer } from './VisuallyHidden.style'

export interface Props extends DefaultProps<HTMLDivElement> {}

export const VisuallyHidden = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { children, ...otherProps } = props

  return (
    <HiddenContainer ref={ref} {...otherProps}>
      {children}
    </HiddenContainer>
  )
})

VisuallyHidden.displayName = 'VisuallyHidden'
