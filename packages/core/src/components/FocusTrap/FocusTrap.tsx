import { useEffect, useRef } from 'react'
import { getFocusable } from '@robin-ui/utils'
import { useKeyDown } from '@robin-ui/hooks'

export interface Props {
  focusOnMount?: boolean
  restoreFocus?: boolean
  disabled?: boolean
  children?: React.ReactNode
}

export const FocusTrap: React.FC<Props> = props => {
  const { focusOnMount, restoreFocus, disabled, children } = props
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const original = document.activeElement
    return () => {
      if (restoreFocus && original instanceof HTMLElement && !disabled) {
        original?.focus()
      }
    }
  }, [restoreFocus])

  useEffect(() => {
    if (focusOnMount && !disabled) {
      const focusable = getFocusable(ref.current)
      const item = focusable.at(0)
      item?.focus()
    }
  }, [focusOnMount])

  useKeyDown('Tab', event => {
    const focusable = getFocusable(ref.current)

    if (!focusable.length || disabled) {
      return
    }

    const first = focusable.at(0)
    const last = focusable.at(-1)

    const next = event.shiftKey ? last : first
    const leaving = event.shiftKey
      ? document.activeElement !== first
      : document.activeElement !== last

    if (leaving) {
      return
    }

    event.preventDefault()
    next?.focus()
  })

  return <div ref={ref}>{children}</div>
}

FocusTrap.displayName = 'FocusTrap'
