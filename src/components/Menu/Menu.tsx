import React, { useEffect, useRef } from 'react'
import { parseSize, getFocusable } from '@rui/utils'
import { useId, useOnKeyPress, useMutableCallback } from '@rui/hooks'

import Popup from '../Popup'
// import ScrollContainer from '../ScrollContainer'

import { StyledMenu } from './Menu.style'

export interface Props extends React.ComponentProps<typeof Popup> {
	type?: 'menu' | 'listbox'
	/**
	 * Menu width.
	 * @default 20rem
	 */
	width?: string | number
	/**
	 * Max menu height.
	 * @default 30rem
	 */
	maxHeight?: string | number
	onClose?: () => void
}

const Menu = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { type = 'menu', target, open, width = '20rem', maxHeight = 300, onClose, children, ...otherProps } = props
	const menuRef = useRef<HTMLDivElement>(null)
	const id = useId()

	useEffect(() => {
		if (target) {
			target.setAttribute('aria-controls', id)
			target.setAttribute('aria-haspopup', type)
			target.setAttribute('aria-expanded', 'false')
		}
	}, [target])

	useEffect(() => {
		if (!open) {
			target?.focus()
		}
	}, [open])

	useOnKeyPress('Escape', () => onClose?.())

	const handleArrow = useMutableCallback((direction: 'up' | 'down') => {
		if (!open) {
			return
		}
		const focusable = getFocusable(menuRef.current)
		const itemIndex = focusable.findIndex(element => element === document.activeElement)
		const nextIndex = itemIndex + (direction === 'up' ? -1 : 1)
		const nextTarget = focusable[nextIndex] as HTMLElement
		if (nextTarget) {
			nextTarget.focus()
		}
	})

	const handleTab = useMutableCallback((event: KeyboardEvent) => {
		if (open) {
			event.preventDefault()
			onClose?.()
		}
	})

	useOnKeyPress('ArrowDown', () => handleArrow('down'))
	useOnKeyPress('ArrowUp', () => handleArrow('up'))
	useOnKeyPress('Tab', handleTab)

	if (!target) {
		return null
	}

	return (
		<StyledMenu
			ref={ref}
			id={id}
			role={type}
			aria-orientation="vertical"
			target={target}
			open={open}
			$width={parseSize(width)}
			$maxHeight={parseSize(maxHeight)}
			onClick={event => event.stopPropagation()}
			onClose={onClose}
			{...otherProps}>
			<div ref={menuRef}>{children}</div>
		</StyledMenu>
	)
})

Menu.displayName = 'Menu'
export default Menu
