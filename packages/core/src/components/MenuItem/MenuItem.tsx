import React from 'react'

import type { Button } from '../Button'

import { MenuItemContainer } from './MenuItem.style'

export interface Props extends React.ComponentProps<typeof Button> {
  active?: boolean
  disabled?: boolean
}

export const MenuItem = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { active, disabled, children, ...otherProps } = props

  return (
    <MenuItemContainer
      ref={ref}
      $active={!!active}
      disabled={!!disabled}
      size="sm"
      variant="text"
      color={active ? 'primary' : 'surface.onBase'}
      {...otherProps}>
      {children}
    </MenuItemContainer>
  )
})

MenuItem.displayName = 'MenuItem'
