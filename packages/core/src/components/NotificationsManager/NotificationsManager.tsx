import type { DefaultProps } from '@robin-ui/types'
import { AnimatePresence } from 'framer-motion'
import React, { useMemo, useRef, useState } from 'react'

import { Notification } from '../Notification'
import { Portal } from '../Portal'

import { NotificationsContainer } from './NotificationsManager.style'

export type Notification = {
  id: string
  icon?: React.ReactNode
  title?: React.ReactNode
  content?: React.ReactNode
  duration?: number
  dismissable?: boolean
  onClose?: () => void
}

export const NotificationsManagerContext = React.createContext<{
  managerEl?: HTMLElement | null
  addNotification?: (notification: Notification) => void
  removeNotification?: (id: string) => void
}>({})

export interface Props extends DefaultProps<HTMLDivElement> {
  placement?: 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right'
  limit?: number
}

export const NotificationsManager: React.FC<Props> = props => {
  const { placement = 'top-right', limit = 5, children, ...otherProps } = props
  const [queue, setQueue] = useState<Notification[]>([])
  const managerRef = useRef<HTMLDivElement>(null)

  const addNotification = (notification: Notification) => {
    setQueue(q => [...q, notification].slice(-limit))
  }

  const removeNotification = (id: string) => {
    setQueue(q => q.filter(n => n.id !== id))
  }

  const ctxValue = useMemo(
    () => ({ managerEl: managerRef.current, addNotification, removeNotification }),
    [managerRef]
  )

  return (
    <>
      <Portal>
        <NotificationsContainer ref={managerRef} $placement={placement} {...otherProps}>
          <AnimatePresence>
            {queue.map(notification => {
              const { content, onClose, ...notificationProps } = notification
              return (
                <Notification
                  key={notification.id}
                  {...notificationProps}
                  onClose={() => {
                    onClose?.()
                    removeNotification(notification.id)
                  }}
                  managed>
                  {content}
                </Notification>
              )
            })}
          </AnimatePresence>
        </NotificationsContainer>
      </Portal>
      <NotificationsManagerContext.Provider value={ctxValue}>
        {children}
      </NotificationsManagerContext.Provider>
    </>
  )
}

NotificationsManager.displayName = 'NotificationsManager'
