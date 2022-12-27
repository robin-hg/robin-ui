import { styled } from '@robin-ui/styles'

interface NotificationsContainerProps {
  $placement: 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right'
}

export const NotificationsContainer = styled.div<NotificationsContainerProps>(
  ({ theme }) => ({
    position: 'fixed',
    zIndex: 999,
    display: 'flex',
    gap: theme.spacing.sm,
    padding: theme.spacing.md
  }),
  ({ $placement }) =>
    ({
      top: {
        flexDirection: 'column-reverse' as React.CSSProperties['flexDirection'],
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)'
      },
      'top-left': {
        flexDirection: 'column-reverse' as React.CSSProperties['flexDirection'],
        top: 0,
        left: 0
      },
      'top-right': {
        flexDirection: 'column-reverse' as React.CSSProperties['flexDirection'],
        top: 0,
        right: 0
      },
      bottom: {
        flexDirection: 'column' as React.CSSProperties['flexDirection'],
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)'
      },
      'bottom-left': {
        flexDirection: 'column' as React.CSSProperties['flexDirection'],
        bottom: 0,
        left: 0
      },
      'bottom-right': {
        flexDirection: 'column' as React.CSSProperties['flexDirection'],
        bottom: 0,
        right: 0
      }
    }[$placement])
)
