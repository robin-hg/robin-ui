import { forwardRef, useRef } from 'react'
import { getFocusable } from '@robin-ui/utils'
import { useCombinedRef } from '@robin-ui/hooks'

import type { Popover } from '../Popover'
import { ScrollContainer } from '../ScrollContainer'

import { StyledMenu } from './Menu.style'

export interface Props extends React.ComponentProps<typeof Popover> {
  role?: 'menu' | 'listbox'
  /**
   * Min menu width.
   * @default 20rem
   */
  minWidth?: string | number
  /**
   * Max menu height.
   * @default 30rem
   */
  maxHeight?: string | number
  onClose?: () => void
}

export const Menu = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    role = 'menu',
    minWidth = '20rem',
    maxHeight = '30rem',
    onClose,
    onKeyDown,
    children,
    ...otherProps
  } = props
  const menuRef = useRef<HTMLDivElement>(null)
  const combinedRef = useCombinedRef(ref, menuRef)

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    onKeyDown?.(event)
    const handleArrow = (direction: 'up' | 'down') => {
      const focusable = getFocusable(menuRef.current)
      const itemIndex = focusable.findIndex(element => element === document.activeElement)
      const nextIndex = itemIndex + (direction === 'up' ? -1 : 1)
      const nextTarget = focusable[nextIndex]

      nextTarget?.focus()
    }

    switch (event.key) {
      case 'ArrowUp':
        event.preventDefault()
        handleArrow('up')
        break
      case 'ArrowDown':
        event.preventDefault()
        handleArrow('down')
        break
      case 'Tab':
      case 'Escape':
        event.preventDefault()
        onClose?.()
        break
    }
  }

  return (
    <StyledMenu
      ref={combinedRef}
      role={role}
      aria-orientation="vertical"
      onKeyDown={handleKeyDown}
      onClose={onClose}
      padding={0}
      $minWidth={minWidth}
      $maxHeight={maxHeight}
      {...otherProps}>
      <ScrollContainer>{children}</ScrollContainer>
    </StyledMenu>
  )
})

Menu.displayName = 'Menu'
