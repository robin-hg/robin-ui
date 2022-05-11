import React, { useRef } from 'react'
import { parseSize, getFocusable } from '@rui/utils'
import { useCombinedRef } from '@rui/hooks'

import { Popover } from '../Popover'

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

export const Menu = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
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

	const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
		onKeyDown?.(event)

		const handleArrow = (direction: 'up' | 'down') => {
			const focusable = getFocusable(menuRef.current)
			const itemIndex = focusable.findIndex(element => element === document.activeElement)
			const nextIndex = itemIndex + (direction === 'up' ? -1 : 1)
			const nextTarget = focusable[nextIndex] as HTMLElement

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
			onKeyDown={handleKeyPress}
			onClose={onClose}
			padding="xs"
			$minWidth={parseSize(minWidth)}
			$maxHeight={parseSize(maxHeight)}
			{...otherProps}>
			{children}
		</StyledMenu>
	)
})

Menu.displayName = 'Menu'
