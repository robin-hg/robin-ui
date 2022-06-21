import type { DefaultProps } from '@robin-ui/types'
import React, { useRef } from 'react'
import { useSize } from '@robin-ui/hooks'

import { Box, Adornment } from './InputBox.style'

export interface Props extends DefaultProps<HTMLDivElement> {
  leftAdornment?: React.ReactNode
  rightAdornment?: React.ReactNode

  // state props
  active?: boolean
  error?: boolean
  disabled?: boolean
}

export const InputBox = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { active, error, disabled, leftAdornment, rightAdornment, children, ...otherProps } = props
  const leftAdornmentRef = useRef<HTMLSpanElement>(null)
  const rightAdornmentRef = useRef<HTMLSpanElement>(null)
  const leftAdornmentSize = useSize(leftAdornmentRef.current)
  const rightAdornmentSize = useSize(rightAdornmentRef.current)

  const state = disabled ? 'disabled' : error ? 'error' : active ? 'active' : 'none'

  return (
    <Box
      ref={ref}
      $state={state}
      $leftPadding={leftAdornmentSize?.width}
      $rightPadding={rightAdornmentSize?.width}
      {...otherProps}>
      {leftAdornment && (
        <Adornment ref={leftAdornmentRef} $position="left">
          {leftAdornment}
        </Adornment>
      )}
      {children}
      {rightAdornment && (
        <Adornment ref={rightAdornmentRef} $position="right">
          {rightAdornment}
        </Adornment>
      )}
    </Box>
  )
})

InputBox.displayName = 'InputBox'
