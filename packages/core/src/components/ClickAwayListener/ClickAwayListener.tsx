import type { DefaultProps } from '@robin-ui/types'
import { forwardRef, useRef } from 'react'
import { useClickOutside, useCombinedRef, useForceUpdate } from '@robin-ui/hooks'
import { sxc } from '@robin-ui/styles'

export interface Props extends DefaultProps<HTMLDivElement> {
  onClickAway: (event: MouseEvent) => void
}

export const ClickAwayListener = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { onClickAway, children, ...otherProps } = props
  const listenerRef = useRef<HTMLDivElement>(null)
  const combinedRef = useCombinedRef(ref, listenerRef)
  useForceUpdate(true)

  useClickOutside(listenerRef.current, onClickAway)

  return (
    <sxc.div ref={combinedRef} {...otherProps}>
      {children}
    </sxc.div>
  )
})

ClickAwayListener.displayName = 'ClickAwayListener'
