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
	const { role = 'menu', target, open, minWidth = '20rem', maxHeight = 300, onClose, children, ...otherProps } = props
	const menuRef = useRef<HTMLDivElement>(null)
	const combinedRef = useCombinedRef(ref, menuRef)
	const id = useId()

	useEffect(() => {
		if (target) {
			target.setAttribute('aria-controls', id)
			target.setAttribute('aria-haspopup', role)
			target.setAttribute('aria-expanded', 'false')
		}
	}, [target])

	useEffect(() => {
		if (open) {
			menuRef.current?.focus()
		} else {
			target?.focus()
		}
		if (target) {
			target.setAttribute('aria-expanded', 'true')
		}
	}, [open])

	const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
		const handleArrow = (direction: 'up' | 'down') => {
			const focusable = getFocusable(menuRef.current)
			const itemIndex = focusable.findIndex(element => element === document.activeElement)
			const nextIndex = itemIndex + (direction === 'up' ? -1 : 1)
			const nextTarget = focusable[nextIndex] as HTMLElement
			if (nextTarget) {
				nextTarget.focus()
			}
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

	if (!target) {
		return null
	}

	return (
		<StyledMenu
			ref={combinedRef}
			id={id}
			role={role}
			aria-orientation="vertical"
			target={target}
			open={open}
			onKeyDown={handleKeyPress}
			$minWidth={parseSize(minWidth)}
			$maxHeight={parseSize(maxHeight)}
			onClick={event => event.stopPropagation()}
			onClose={onClose}
			tabIndex={-1}
			{...otherProps}>
			{children}
		</StyledMenu>
	)
})

Menu.displayName = 'Menu'
