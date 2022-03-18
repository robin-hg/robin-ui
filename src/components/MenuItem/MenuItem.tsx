import React from 'react'

import { Button } from 'index'
import { MenuItemContainer } from './MenuItem.style'

export interface Props extends React.ComponentProps<typeof Button> {
	active?: boolean
	focused?: boolean
	disabled?: boolean
}

const MenuItem = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
	const { active, focused, disabled, children, ...otherProps } = props

	return (
		<MenuItemContainer
			ref={ref}
			tabIndex={0}
			$active={!!active}
			$focused={!!focused}
			disabled={!!disabled}
			variant="text"
			{...otherProps}>
			{children}
		</MenuItemContainer>
	)
})

MenuItem.displayName = 'MenuItem'
export default MenuItem
