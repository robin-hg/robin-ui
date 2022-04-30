import type { DefaultProps } from '@rui/types'
import React, { useEffect, useRef, useState } from 'react'
import { omit, pick } from '@rui/utils'
import { useCombinedRef, useForceUpdate, useId, useSize } from '@rui/hooks'

import { InputWrapper, inputWrapperProps, type InputWrapperProps } from '../InputWrapper'
import { type InputBoxProps } from '../InputBox'
import { Menu } from '../Menu'
import { MenuItem } from '../MenuItem'

import { SelectBox } from './Select.style'
import { ChevronDown } from '@rui/icons'

interface Item {
	value: string | number
	label?: string
	disabled?: boolean
}

export interface Props extends DefaultProps<HTMLDivElement, 'children' | 'onChange'>, InputWrapperProps, InputBoxProps {
	placeholder?: string
	value?: Item['value']
	options?: Item[]
	disabled?: boolean
	onChange?: (value: Item['value']) => void
}

export const Select = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const {
		options = [],
		value,
		placeholder,
		disabled,
		required,
		onChange,
		onClick,
		onKeyDown,
		id,
		className,
		...otherProps
	} = props
	const boxRef = useRef<HTMLDivElement>(null)
	const combinedRef = useCombinedRef(boxRef, ref)
	const [open, setOpen] = useState(false)
	const _id = useId(id)
	const size = useSize(boxRef.current, [value])
	useForceUpdate(true)

	useEffect(() => {
		setOpen(false)
	}, [disabled])

	const extractedInputWrapperProps = pick(props, inputWrapperProps.concat())
	const rest = omit(otherProps, [...inputWrapperProps])

	const item = options.find(option => option.value === value)

	return (
		<InputWrapper labelFor={_id} className={className} {...extractedInputWrapperProps}>
			<SelectBox
				ref={combinedRef}
				role="combobox"
				onClick={event => {
					setOpen(!open)
					onClick?.(event)
				}}
				onKeyDown={event => {
					if (event.key === 'Enter') {
						setOpen(!open)
					} else if (event.key === 'ArrowDown' || event.key === ' ') {
						setOpen(true)
					}
					onKeyDown?.(event)
				}}
				rightAdornment={<ChevronDown />}
				disabled={disabled}
				active={open}
				tabIndex={0}
				{...rest}>
				<input type="hidden" value={item?.value} />
				<input
					id={_id}
					type="text"
					placeholder={placeholder}
					value={item?.label ?? item?.value}
					required={required}
					disabled={disabled}
					readOnly
					tabIndex={-1}
				/>
			</SelectBox>
			{!disabled && (
				<Menu
					type="listbox"
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
