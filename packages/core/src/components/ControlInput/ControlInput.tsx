import type { DefaultProps } from '@robin-ui/types'
import { forwardRef } from 'react'

import { Text } from '../Typography'

import { Control, ControlInputContainer } from './ControlInput.style'

export interface Props extends DefaultProps<HTMLDivElement, 'label'> {
  label?: number | string
  labelFor?: string
  labelPosition?: 'left' | 'right'
}

export const ControlInput = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { label, labelFor, labelPosition = 'right', children, disabled, ...otherProps } = props

  return (
    <ControlInputContainer
      ref={ref}
      $labelPosition={labelPosition}
      disabled={disabled}
      {...otherProps}>
      <Control>{children}</Control>
      {label && (
        <Text as="label" size="sm" htmlFor={labelFor}>
          {label}
        </Text>
      )}
    </ControlInputContainer>
  )
})

ControlInput.displayName = 'ControlInput'
