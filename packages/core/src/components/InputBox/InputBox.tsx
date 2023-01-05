import { forwardRef, useRef } from 'react'

import { useSize } from '@robin-ui/hooks'
import type { DefaultProps } from '@robin-ui/types'

import { Adornment, Box } from './InputBox.style'

export interface Props extends DefaultProps<HTMLDivElement> {
  variant?: 'flat' | 'outlined'
  leftAdornment?: React.ReactNode
  rightAdornment?: React.ReactNode

  // state props
  active?: boolean
  error?: boolean
  disabled?: boolean
}

export const InputBox = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    variant = 'flat',
    active,
    error,
    disabled,
    leftAdornment,
    rightAdornment,
    children,
    ...otherProps
  } = props
  const leftAdornmentRef = useRef<HTMLSpanElement>(null)
  const rightAdornmentRef = useRef<HTMLSpanElement>(null)
  const leftAdornmentSize = useSize(leftAdornmentRef.current)
  const rightAdornmentSize = useSize(rightAdornmentRef.current)

  const state = disabled ? 'disabled' : error ? 'error' : active ? 'active' : 'none'

  return (
    <Box
      ref={ref}
      $variant={variant}
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
