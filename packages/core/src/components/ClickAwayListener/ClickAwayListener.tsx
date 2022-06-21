import type { DefaultProps } from '@robin-ui/types'
import React, { useRef } from 'react'
import { useClickOutside, useCombinedRef } from '@robin-ui/hooks'
import { sxc } from '@robin-ui/styles'

export interface Props extends DefaultProps<HTMLDivElement> {
  onClickAway: (event: PointerEvent) => void
}

export const ClickAwayListener = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { onClickAway, children, ...otherProps } = props
  const listenerRef = useRef<HTMLDivElement>(null)
  const combinedRef = useCombinedRef(ref, listenerRef)

  useClickOutside(listenerRef.current, onClickAway)

  return (
    <sxc.div ref={combinedRef} {...otherProps}>
      {children}
    </sxc.div>
  )
})

ClickAwayListener.displayName = 'ClickAwayListener'
