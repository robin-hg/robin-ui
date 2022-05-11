import React, { useEffect, useRef } from 'react'
import { parseSize, getFocusable } from '@rui/utils'
import { useCombinedRef, useId } from '@rui/hooks'

import { Floating } from '../Floating'

import { StyledMenu } from './Menu.style'

export interface Props extends React.ComponentProps<typeof Floating> {
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
		trigger,
		open,
		minWidth = '20rem',
		maxHeight = 300,
		onClose,
		onKeyDown,
		children,
		...otherProps
	} = props
	const menuRef = useRef<HTMLDivElement>(null)
	const combinedRef = useCombinedRef(ref, menuRef)
	const _id = useId(trigger?.id)

	useEffect(() => {
		trigger?.setAttribute('aria-controls', _id)
		trigger?.setAttribute('aria-haspopup', role)
	}, [trigger])

	useEffect(() => {
		trigger?.setAttribute('aria-expanded', open ? 'true' : 'false')
	}, [open])

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
			id={_id}
			role={role}
			aria-orientation="vertical"
			trigger={trigger}
			open={open}
			onKeyDown={handleKeyPress}
			$minWidth={parseSize(minWidth)}
			$maxHeight={parseSize(maxHeight)}
			onClose={onClose}
			trapFocus
			{...otherProps}>
			{children}
		</StyledMenu>
	)
})

Menu.displayName = 'Menu'
