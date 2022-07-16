import type { DefaultProps, SizeValue } from '@robin-ui/types'
import React from 'react'
import { AlertCircle, AlertTriangle, CheckCircle, Info } from '@robin-ui/icons'

import { Label } from '../Typography'

import { AlertContainer, AlertTitle } from './Alert.style'

const statusIcon = {
  none: null,
  success: <CheckCircle />,
  info: <Info />,
  warning: <AlertTriangle />,
  critical: <AlertCircle />
}

export interface Props extends DefaultProps<HTMLDivElement, 'title'> {
  status?: 'none' | 'success' | 'info' | 'warning' | 'critical'
  variant?: 'flat' | 'outlined'
  icon?: React.ReactNode
  title?: React.ReactNode
  padding?: SizeValue | SizeValue[]
  radius?: SizeValue
}

export const Alert = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    status = 'critical',
    variant = 'flat',
    radius = 'md',
    icon: iconOverride,
    title,
    children,
    ...otherProps
  } = props

  const icon = iconOverride || statusIcon[status]

  return (
    <AlertContainer
      ref={ref}
      role="alert"
      variant="flat"
      radius={radius}
      $color={status}
      $variant={variant}
      {...otherProps}>
      {icon && title && (
        <AlertTitle>
          {icon}
          {title && <Label size="xl">{title}</Label>}
        </AlertTitle>
      )}
      {children}
    </AlertContainer>
  )
})

Alert.displayName = 'Alert'
