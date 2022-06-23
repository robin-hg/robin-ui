import type { DefaultProps } from '@robin-ui/types'
import React, { useRef } from 'react'
import { m } from 'framer-motion'
import { useSize } from '@robin-ui/hooks'
import { camelCase } from '@robin-ui/utils'

import { Content } from './DynamicResizer.style'

export interface Props extends DefaultProps<HTMLDivElement> {
  duration?: string | number
  ease?: 'ease-in' | 'ease-in-out' | 'ease-out' | 'linear'
  disableResizeHeight?: boolean
  disableResizeWidth?: boolean
}

export const DynamicResizer = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { duration, ease, disableResizeHeight, disableResizeWidth, children, ...otherProps } = props
  const contentRef = useRef<HTMLDivElement>(null)
  const size = useSize(contentRef.current)

  return (
    <m.div
      ref={ref}
      animate={{
        height: disableResizeHeight ? 'auto' : size?.height,
        width: disableResizeWidth ? 'auto' : size?.width
      }}
      transition={{
        duration: typeof duration === 'number' ? duration / 1000 : duration,
        ease: ease ? camelCase(ease) : undefined
      }}>
      <Content ref={contentRef} {...otherProps}>
        {children}
      </Content>
    </m.div>
  )
})

DynamicResizer.displayName = 'DynamicResizer'
