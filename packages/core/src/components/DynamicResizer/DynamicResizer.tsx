import { forwardRef, useRef } from 'react'

import { type Easing, m } from 'framer-motion'

import { useSize, useTransition } from '@robin-ui/hooks'
import type { DefaultProps } from '@robin-ui/types'

import { Content } from './DynamicResizer.style'

export interface Props extends DefaultProps<HTMLDivElement> {
  duration?: number
  ease?: Easing
  disableResizeHeight?: boolean
  disableResizeWidth?: boolean
}

export const DynamicResizer = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { duration, ease, disableResizeHeight, disableResizeWidth, children, ...otherProps } = props
  const contentRef = useRef<HTMLDivElement>(null)
  const size = useSize(contentRef.current)
  const transition = useTransition(duration, ease)

  return (
    <m.div
      ref={ref}
      animate={{
        height: disableResizeHeight ? 'auto' : size?.height,
        width: disableResizeWidth ? 'auto' : size?.width
      }}
      transition={transition}>
      <Content ref={contentRef} {...otherProps}>
        {children}
      </Content>
    </m.div>
  )
})

DynamicResizer.displayName = 'DynamicResizer'
