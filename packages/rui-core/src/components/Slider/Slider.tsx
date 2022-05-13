import type { DefaultProps, ColorToken, SizeValue } from '@rui/types'
import React, { useEffect, useRef, useState } from 'react'
import { clampNumber, omit, pick } from '@rui/utils'
import { useId, useSize, useUncontrolled } from '@rui/hooks'

import { InputWrapper, inputWrapperProps, type InputWrapperProps } from '../InputWrapper'
import { Progress } from '../Progress'

import { SliderContainer, SliderThumb } from './Slider.style'
import { Tooltip } from '../Tooltip'

export interface Props extends DefaultProps<HTMLDivElement, 'children' | 'onChange' | 'size'>, InputWrapperProps {
	color?: ColorToken
	size?: SizeValue
	value?: number
	defaultValue?: number
	min?: number
	max?: number
	step?: number
	precision?: number
	onChange?: (value: number) => void
}

export const Slider = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const {
		color = 'primary',
		size = 'xs',
		value,
		defaultValue = 0,
		min = 0,
		max = 100,
		step = 1,
		precision = 0,
		error,
		disabled,
		onChange,
		id,
		className,
		name,
		...otherProps
	} = props
	const [active, setActive] = useState(false)
	const sliderRef = useRef<HTMLDivElement>(null)
	const thumbRef = useRef<HTMLDivElement>(null)
	const sliderSize = useSize(sliderRef.current)
	const _id = useId(id)
	const [_value, setUncontrolled] = useUncontrolled(defaultValue, value)
	const frame = useRef(0)

	useEffect(() => {
		const handleChange = (x: number) => {
			if (disabled) {
				return
			}
			cancelAnimationFrame(frame.current)
			frame.current = requestAnimationFrame(() => {
				if (!sliderSize) {
					return
				}
				const { width, left } = sliderSize
				const percentage = (x - left) / width
				const roundedValue = Math.round(((percentage * (max - min)) / step) * step + min)
				const newValue = clampNumber(+roundedValue.toFixed(precision), min, max)

				setUncontrolled(newValue)
				onChange?.(newValue)
			})
		}

		const handleMove = (event: PointerEvent) => handleChange(event.clientX)

		const start = (event: PointerEvent) => {
			event.preventDefault()
			setActive(true)
			handleChange(event.clientX)
			bind()
		}

		const end = () => {
			setActive(false)
			unbind()
		}

		const bind = () => {
			addEventListener('pointermove', handleMove)
			addEventListener('pointerup', end)
		}

		const unbind = () => {
			removeEventListener('pointermove', handleMove)
			removeEventListener('pointerup', end)
		}

		sliderRef.current?.addEventListener('pointerdown', start)
		return () => {
			sliderRef.current?.removeEventListener('pointerdown', start)
		}
	}, [disabled, sliderSize])

	const extractedInputWrapperProps = pick(props, inputWrapperProps.concat())
	const rest = omit(otherProps, [...inputWrapperProps])

	const percentValue = (_value / (max - min)) * 100
	const sliderColor = error ? 'critical' : color

	const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
		const handleArrow = (direction: 'up' | 'down') => {
			const newValue = clampNumber(_value + (direction === 'up' ? 1 : -1), min, max)
			setUncontrolled(newValue)
			onChange?.(newValue)
		}

		switch (event.key) {
			case 'ArrowUp':
			case 'ArrowRight':
				event.preventDefault()
				handleArrow('up')
				break
			case 'ArrowDown':
			case 'ArrowLeft':
				event.preventDefault()
				handleArrow('down')
				break
		}
	}

	return (
		<InputWrapper ref={ref} labelId={_id} className={className} {...extractedInputWrapperProps}>
			<SliderContainer ref={sliderRef} disabled={disabled} $active={active} {...rest}>
				<Progress value={percentValue} color={sliderColor} noAria />
				<Tooltip label={_value} placement="top" open={active} continuousUpdate>
					<SliderThumb
						ref={thumbRef}
						role="slider"
						aria-labelledby={_id}
						aria-valuenow={_value}
						aria-valuemin={min}
						aria-valuemax={max}
						tabIndex={0}
						onKeyDown={handleKeyPress}
						$active={active}
						$size={size}
						$color={sliderColor}
						$disabled={!!disabled}
						style={{ left: `${percentValue}%` }}
					/>
				</Tooltip>
				<input type="hidden" name={name} value={_value} />
			</SliderContainer>
		</InputWrapper>
	)
})

Slider.displayName = 'Slider'
