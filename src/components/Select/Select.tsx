import React, { useState, useRef, useEffect, useMemo } from 'react'
import { v4 as uuid } from 'uuid'
import { useCombinedRef, useKeyPress, useMutableCallback, useSize } from '../../hooks'

import { Menu, MenuItem, Typography, InputBox } from 'index'

import { StyledInputBox, ValueContainer } from './Select.style'
import { handleEnter } from 'utils'
import { ChevronDown } from 'icons'

interface Item {
	value: string | number | Record<string, any>
	label?: string
	disabled?: boolean
}

export interface Props extends Omit<React.ComponentProps<typeof InputBox>, 'onChange' | 'value'> {
	value?: Item['value']
	objectKey?: string
	placeholder?: string
	options: Item[]
	menuProps?: React.ComponentProps<typeof Menu>
	menuItemProps?: React.ComponentProps<typeof MenuItem>
	onChange?: (value: Item['value']) => void
}

const Select = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { value, objectKey, placeholder, options, disabled, onChange, menuProps, menuItemProps, ...otherProps } =
		props
	const [open, setOpen] = useState(false)
	const [focusedItem, setFocusedItem] = useState(-1)
	const selectRef = useRef<HTMLDivElement>(null)
	const combinedRef = useCombinedRef(selectRef, ref)
	const menuRef = useRef<HTMLDivElement>(null)
	const size = useSize(selectRef.current, [placeholder, value, options])
	const id = useMemo(() => uuid(), [])

	const currentValue = options.find(option => {
		if (typeof value === 'object' && typeof option.value === 'object' && objectKey) {
			return option.value[objectKey] === value?.[objectKey]
		} else {
			return option.value === value
		}
	})

	useEffect(() => {
		setFocusedItem(-1)
	}, [open])

	const handleArrow = useMutableCallback((direction: 'up' | 'down') => {
		if (open) {
			const nextIndex = focusedItem + (direction === 'up' ? -1 : 1)
			const target = menuRef.current?.children[nextIndex] as HTMLAnchorElement
			if (target) {
				target.focus()
				setFocusedItem(nextIndex)
			}
		}
	})

	useKeyPress('ArrowDown', () => handleArrow('down'))
	useKeyPress('ArrowUp', () => handleArrow('up'))

	const inputBox = selectRef.current?.querySelector('div[data-rui-element="input-box"]')

	const openMenu = () => {
		if (!disabled) {
			setOpen(true)
		}
	}

	return (
		<>
			<StyledInputBox ref={combinedRef} $open={open} labelId={id} disabled={disabled} {...otherProps}>
				<ValueContainer
					onClick={openMenu}
					onKeyDown={handleEnter(openMenu)}
					tabIndex={disabled ? -1 : 0}
					$open={open}>
					<Typography color={otherProps.error ? 'error' : currentValue ? 'text' : 'text.secondary'}>
						{currentValue ? currentValue.label ?? currentValue.value : placeholder}
					</Typography>
					<ChevronDown />
				</ValueContainer>
			</StyledInputBox>
			{inputBox && (
				<Menu
					width={size?.width}
					open={!disabled && open}
					target={inputBox}
					onClose={() => setOpen(false)}
					{...menuProps}>
					<div ref={menuRef}>
						{options.map((option, i) => (
							<MenuItem
								key={i}
								disabled={!!option.disabled}
								onClick={() => {
									onChange?.(option.value)
									setOpen(false)
								}}
								onFocus={() => setFocusedItem(i)}
								tabIndex={option.disabled ? -1 : 0}
								active={value === option.value}
								{...menuItemProps}>
								{option.label ?? option.value}
							</MenuItem>
						))}
					</div>
				</Menu>
			)}
		</>
	)
})

Select.displayName = 'Select'
export default Select
