import { useEffect, useRef } from 'react'
import { getFocusable } from '@robin-ui/utils'
import { useKeyDown } from '@robin-ui/hooks'

export interface Props {
  autoFocus?: boolean
  restoreFocus?: boolean
  disabled?: boolean
  children?: React.ReactNode
}

export const FocusTrap: React.FC<Props> = props => {
  const { autoFocus, restoreFocus, disabled, children } = props
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const original = document.activeElement as HTMLElement
    return () => {
      if (restoreFocus && !disabled) {
        original?.focus()
      }
    }
  }, [restoreFocus])

  useEffect(() => {
    if (autoFocus && !disabled) {
      const focusable = getFocusable(ref.current)
      focusable.at(0)?.focus()
    }
  }, [autoFocus])

  useKeyDown('Tab', event => {
    const focusable = getFocusable(ref.current)

    if (!focusable.length || disabled) {
      return
    }

    const first = focusable.at(0) as HTMLElement
    const last = focusable.at(-1) as HTMLElement

    const next = event.shiftKey ? last : first
    const leaving = event.shiftKey
      ? document.activeElement !== first
      : document.activeElement !== last

    if (leaving) {
      return
    }

    event.preventDefault()
    next.focus()
  })

  return <div ref={ref}>{children}</div>
}

FocusTrap.displayName = 'FocusTrap'
