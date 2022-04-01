import React, { useState, useRef, useEffect } from 'react'
import { useCombinedRef, useForceUpdate, useId, useMedia, useSize } from '@rui/hooks'
import { handleEnter } from '@rui/utils'

import Menu from '@rui/components/Menu'
import MenuItem from '@rui/components/MenuItem'
import InputBox from '@rui/components/InputBox'

import { StyledInputBox, ValueContainer, NativeSelect } from './Select.style'
import { ChevronDown } from '@rui/icons'

interface Item {
	value: string | number
	label?: string
	disabled?: boolean
}

export interface Props extends Omit<React.ComponentProps<typeof InputBox>, 'onChange' | 'value' | 'labelId'> {
	value?: Item['value']
	objectKey?: string
	placeholder?: string
	options?: Item[]
	menuProps?: React.ComponentProps<typeof Menu>
	menuItemProps?: React.ComponentProps<typeof MenuItem>
	native?: boolean
	onChange?: (value: Item['value']) => void
}

const Select = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const {
		value,
		placeholder,
		options = [],
		menuProps,
		menuItemProps,
		native,
		onChange,
		required,
		disabled,
		boxProps,
		...otherProps
	} = props
	const [open, setOpen] = useState(false)
	const selectRef = useRef<HTMLDivElement>(null)
	const combinedRef = useCombinedRef(selectRef, ref)
	const size = useSize(selectRef.current, [value])
	const forceUpdate = useForceUpdate()
	const id = useId()
	const isMobile = useMedia('sm')

	const useNative = native ?? isMobile

	useEffect(() => {
		forceUpdate()
	}, [])

	const inputBox = selectRef.current?.querySelector('div[data-rui-element="input-box"]') as
		| HTMLDivElement
		| null
		| undefined

	const openMenu = () => {
		if (!useNative && !disabled) {
			setOpen(true)
		}
	}

	return (
		<>
			<StyledInputBox
				ref={combinedRef}
				$open={open}
				labelId={id}
				disabled={disabled}
				required={required}
				endAdornment={<ChevronDown />}
				boxProps={
					useNative
						? boxProps
						: {
								...boxProps,
								role: 'combobox',
								tabIndex: -1,
								'aria-disabled': disabled ? 'true' : 'false',
								onClick: openMenu,
								onKeyDown: handleEnter(openMenu)
						  }
				}
				{...otherProps}>
				{useNative ? (
					<NativeSelect
						id={id}
						value={value ?? ''}
						onChange={event => onChange?.(event.target.value)}
						required={required}>
						<option value="" disabled hidden>
							{placeholder ?? ''}
						</option>
						{options.map(option => (
							<option key={option.value} value={option.value}>
								{option.label ?? option.value}
							</option>
						))}
					</NativeSelect>
				) : (
					<ValueContainer
						id={id}
						value={value ?? ''}
						placeholder={placeholder}
						required={required}
						readOnly
						size={12}
					/>
				)}
			</StyledInputBox>
			{!useNative && (
				<Menu
					type="listbox"
					width={size?.width}
					open={!disabled && open}
					target={inputBox}
					onClose={() => setOpen(false)}
					{...menuProps}>
					{options.map(option => (
						<MenuItem
							key={option.value}
							disabled={!!option.disabled}
							onClick={() => {
								onChange?.(option.value)
								setOpen(false)
							}}
							tabIndex={option.disabled ? -1 : 0}
							active={value === option.value}
							{...menuItemProps}>
							{option.label ?? option.value}
						</MenuItem>
					))}
				</Menu>
			)}
		</>
	)
})

Select.displayName = 'Select'
export default Select
