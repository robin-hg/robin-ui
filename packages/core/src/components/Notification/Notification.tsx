import type { DefaultProps } from '@robin-ui/types'
import React, { useContext } from 'react'
import { useTimeout } from '@robin-ui/hooks'

import { NotificationsManagerContext } from '../NotificationsManager'
import { Portal } from '../Portal'

import { NotificationContainer } from './Notification.style'
import { Fade } from '../Transition'

export interface Props extends DefaultProps<HTMLDivElement, 'title'> {
  icon?: React.ReactNode
  title?: React.ReactNode
  duration?: number
  dismissible?: boolean
  managed?: boolean
  onClose?: () => void
}

export const Notification = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { icon, title, duration = 5000, managed, onClose, children, ...otherProps } = props
  const { managerEl } = useContext(NotificationsManagerContext)

  useTimeout(() => {
    if (duration) {
      onClose?.()
    }
  }, duration)

  const notification = (
    <Fade in unmountOnExit layout motionOnly>
      <NotificationContainer ref={ref} {...otherProps}>
        {icon}
        <div>
          {title}
          {children}
        </div>
      </NotificationContainer>
    </Fade>
  )

  if (!managed && managerEl) {
    return <Portal container={managerEl}>{notification}</Portal>
  }

  return notification
})

Notification.displayName = 'Notification'
