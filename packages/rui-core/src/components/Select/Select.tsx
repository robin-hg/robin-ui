import React, { useEffect, useRef, useState } from 'react'
import { omit, pick } from '@rui/utils'
import { useCombinedRef, useId, useSize, useUncontrolled } from '@rui/hooks'

import { InputWrapper, inputWrapperProps, type InputWrapperProps } from '../InputWrapper'
import { InputBox } from '../InputBox'
import { Menu } from '../Menu'
import { MenuItem } from '../MenuItem'

import { SelectBox } from './Select.style'
import { ChevronDown } from '@rui/icons'

interface Item {
	value: string | number
	label?: string
	disabled?: boolean
}

export interface Props extends Omit<React.ComponentProps<typeof InputBox>, 'children' | 'onChange'>, InputWrapperProps {
	placeholder?: string
	value?: Item['value']
	defaultValue?: Item['value']
	options?: Item[]
	disabled?: boolean
	native?: boolean
	onChange?: (value: Item['value']) => void
}

export const Select = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const {
		options = [],
		value,
		defaultValue,
		placeholder,
		disabled,
		error,
		required,
		native,
		onChange,
		onClick,
		onKeyDown,
		id,
		className,
		name,
		...otherProps
	} = props
	const boxRef = useRef<HTMLDivElement>(null)
	const combinedRef = useCombinedRef(boxRef, ref)
	const [open, setOpen] = useState(false)
	const _id = useId(id)
	const size = useSize(boxRef.current, [value])
	const [_value, setUncontrolled] = useUncontrolled(defaultValue, value)

	useEffect(() => {
		setOpen(false)
	}, [disabled, native])

	const extractedInputWrapperProps = pick(props, inputWrapperProps.concat())
	const rest = omit(otherProps, [...inputWrapperProps])

	const item = options.find(option => option.value === _value)

	return (
		<InputWrapper labelFor={_id} className={className} {...extractedInputWrapperProps}>
			<SelectBox
				ref={combinedRef}
				role={!native ? 'combobox' : undefined}
				onClick={event => {
					onClick?.(event)
					if (!native) {
						setOpen(!open)
					}
				}}
				onKeyDown={event => {
					onKeyDown?.(event)
					if (!native) {
						switch (event.key) {
							case 'Enter':
								setOpen(!open)
								break
							case 'ArrowDown':
							case ' ':
								setOpen(true)
						}
					}
				}}
				rightAdornment={<ChevronDown />}
				disabled={disabled}
				error={error}
				active={open}
				tabIndex={native ? -1 : 0}
				{...rest}>
				{native ? (
					<select
						id={_id}
						value={item?.value}
						onChange={event => {
							onChange?.(event.target.value)
							setUncontrolled(event.target.value)
						}}>
						{options.map(option => (
							<option key={option.value} value={option.value}>
								{option.label ?? option.value}
							</option>
						))}
					</select>
				) : (
					<>
						<input type="hidden" name={name} value={item?.value ?? ''} />
						<input
							id={_id}
							type="text"
							placeholder={placeholder}
							value={item?.label ?? item?.value ?? ''}
							required={required}
							disabled={disabled}
							readOnly
							tabIndex={-1}
						/>
					</>
				)}
			</SelectBox>
			{!native && !disabled && (
				<Menu
					role="listbox"
					aria-labelledby={_id}
					target={boxRef.current}
					minWidth={size?.width}
					open={open}
					onClose={() => setOpen(false)}>
					{options.map(option => (
						<MenuItem
							key={option.value}
							disabled={option.disabled}
							onClick={() => {
								onChange?.(option.value)
								setOpen(false)
								setUncontrolled(option.value)
							}}
							active={value === option.value}>
							{option.label ?? option.value}
						</MenuItem>
					))}
				</Menu>
			)}
		</InputWrapper>
	)
})

Select.displayName = 'Select'
