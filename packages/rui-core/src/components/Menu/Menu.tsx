import React, { useEffect, useRef } from 'react'
import { parseSize, getFocusable } from '@rui/utils'
import { useCombinedRef, useId, useKeyPress } from '@rui/hooks'

import { Popper } from '../Popper'

import { StyledMenu } from './Menu.style'

export interface Props extends React.ComponentProps<typeof Popper> {
	type?: 'menu' | 'listbox'
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
	const { type = 'menu', target, open, minWidth = '20rem', maxHeight = 300, onClose, children, ...otherProps } = props
	const menuRef = useRef<HTMLDivElement>(null)
	const combinedRef = useCombinedRef(ref, menuRef)
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
		if (target) {
			target.setAttribute('aria-expanded', 'true')
		}
	}, [open])

	useKeyPress('Escape', () => onClose?.())

	const handleArrow = (event: KeyboardEvent, direction: 'up' | 'down') => {
		event.preventDefault()
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
	}

	useKeyPress('ArrowDown', event => handleArrow(event, 'down'))
	useKeyPress('ArrowUp', event => handleArrow(event, 'up'))
	useKeyPress('Tab', (event: KeyboardEvent) => {
		if (open) {
			event.preventDefault()
			onClose?.()
		}
	})

	if (!target) {
		return null
	}

	return (
		<StyledMenu
			ref={combinedRef}
			id={id}
			role={type}
			aria-orientation="vertical"
			target={target}
			open={open}
			$minWidth={parseSize(minWidth)}
			$maxHeight={parseSize(maxHeight)}
			onClick={event => event.stopPropagation()}
			onClose={onClose}
			{...otherProps}>
			{children}
		</StyledMenu>
	)
})

Menu.displayName = 'Menu'
