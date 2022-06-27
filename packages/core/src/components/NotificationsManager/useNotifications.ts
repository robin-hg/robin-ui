import { useContext } from 'react'
import { type Notification, NotificationsManagerContext } from './NotificationsManager'

const generateId = () =>
  Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, '')

export const useNotifications = () => {
  const { addNotification: _addNotification, removeNotification } = useContext(
    NotificationsManagerContext
  )

  const addNotification = (notification: Omit<Notification, 'id'>) => {
    const id = generateId()
    _addNotification?.({ ...notification, id })
    return id
  }

  return { addNotification, removeNotification }
}
