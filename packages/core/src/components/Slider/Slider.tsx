import { forwardRef, useContext, useEffect, useRef, useState } from 'react'

import { useCombinedRef, useSize, useUncontrolled } from '@robin-ui/hooks'
import type { ColorToken, DefaultProps, Size } from '@robin-ui/types'
import { clampNumber } from '@robin-ui/utils'

import { InputWrapperContext } from '../InputWrapper'
import { Progress } from '../Progress'
import { Tooltip } from '../Tooltip'

import { SliderContainer, SliderThumb } from './Slider.style'

export interface Props extends DefaultProps<HTMLDivElement, 'children' | 'onChange' | 'size'> {
  color?: ColorToken
  size?: Size
  value?: number
  defaultValue?: number
  min?: number
  max?: number
  step?: number
  precision?: number

  // state props
  error?: boolean
  required?: boolean
  disabled?: boolean

  // fn props
  onChange?: (value: number) => void
}

export const Slider = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    color = 'primary',
    size = 'md',
    value,
    defaultValue = 0,
    min = 0,
    max = 100,
    step = 1,
    precision = 0,
    error: inputError,
    required: inputRequired,
    readOnly: inputReadOnly,
    disabled: inputDisabled,
    onChange,
    name,
    ...otherProps
  } = props
  const [active, setActive] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)
  const combinedRef = useCombinedRef(ref, sliderRef)
  const thumbRef = useRef<HTMLDivElement>(null)
  const sliderSize = useSize(sliderRef.current)
  const [_value, setUncontrolled] = useUncontrolled(defaultValue, value)
  const frame = useRef(0)

  const {
    labelId,
    error: wrapperError,
    required: wrapperRequired,
    readOnly: wrapperReadOnly,
    disabled: wrapperDisabled
  } = useContext(InputWrapperContext)

  const error = wrapperError ?? inputError
  const required = wrapperRequired ?? inputRequired
  const readOnly = wrapperReadOnly ?? inputReadOnly
  const disabled = wrapperDisabled ?? inputDisabled

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
      if (disabled || readOnly) {
        return
      }
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

  const percentValue = (_value / (max - min)) * 100
  const sliderColor = error ? 'critical' : color

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
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
    <SliderContainer
      ref={combinedRef}
      disabled={disabled}
      $active={active}
      $size={size}
      {...otherProps}>
      <Progress value={percentValue} color={sliderColor} thickness={size} noAria />
      <Tooltip label={_value} placement="top" open={!disabled && active} continuousUpdate>
        <SliderThumb
          ref={thumbRef}
          role="slider"
          aria-labelledby={labelId}
          aria-valuenow={_value}
          aria-valuemin={min}
          aria-valuemax={max}
          tabIndex={!!disabled || !!readOnly ? -1 : 0}
          onKeyDown={handleKeyDown}
          $size={size}
          $color={sliderColor}
          disabled={!!disabled || !!readOnly}
          style={{ left: `${percentValue}%` }}
        />
      </Tooltip>
      <input type="hidden" name={name} value={_value} required={required} disabled={disabled} />
    </SliderContainer>
  )
})

Slider.displayName = 'Slider'
