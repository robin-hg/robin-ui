import { forwardRef, useEffect } from 'react'

import { useId } from '@robin-ui/hooks'

import { Floating } from '../Floating'

export interface Props extends React.ComponentProps<typeof Floating> {}

export const Popover = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { role = 'dialog', trigger, open, children, ...otherProps } = props
  const _id = useId(trigger?.id)

  useEffect(() => {
    trigger?.setAttribute('aria-controls', _id)
    trigger?.setAttribute('aria-haspopup', role)
  }, [trigger])

  useEffect(() => {
    trigger?.setAttribute('aria-expanded', open ? 'true' : 'false')
  }, [open])

  return (
    <Floating
      ref={ref}
      id={_id}
      role={role}
      trigger={trigger}
      open={open}
      trapFocus
      {...otherProps}>
      {children}
    </Floating>
  )
})

Popover.displayName = 'Popover'
