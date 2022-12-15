import type { Meta, StoryFn } from '@storybook/react'

import { Button } from '../Button'

import { NotificationsManager, type Props } from './NotificationsManager'
import { useNotifications } from './useNotifications'

export default {
  title: 'Feedback/Notifications',
  component: NotificationsManager,
  args: {
    placement: 'top-right',
    limit: 5
  }
} satisfies Meta<Props>

const Add: React.FC = () => {
  const { addNotification } = useNotifications()
  return (
    <Button
      onClick={() =>
        addNotification({ content: `I am a notification ${new Date().toLocaleTimeString()}` })
      }>
      Add Notification
    </Button>
  )
}

export const Default: StoryFn<Props> = args => (
  <NotificationsManager {...args}>
    <Add />
  </NotificationsManager>
)
