import { forwardRef, useContext, useEffect, useRef, useState } from 'react'

import NumberFormat, { type NumberFormatProps } from 'react-number-format'

import { ChevronDown, ChevronUp, Minus, Plus } from '@robin-ui/icons'
import { clampNumber } from '@robin-ui/utils'

import { IconButton } from '../IconButton'
import { InputBox } from '../InputBox'
import { InputWrapperContext } from '../InputWrapper'

import { BigStepButton, StepButtons } from './NumberInput.style'

export interface Props
  extends Omit<React.ComponentProps<typeof InputBox>, 'children' | 'onChange'> {
  placeholder?: string
  value?: string | number
  defaultValue?: string | number
  min?: number
  max?: number
  step?: number
  precision?: number
  showControl?: boolean | 'big'

  // state props
  error?: boolean
  required?: boolean
  disabled?: boolean
  readOnly?: boolean

  // fn props
  onChange?: (values: { value: string; formattedValue: string }) => void

  // sub element props
  numberFormatProps?: NumberFormatProps
}

export const NumberInput = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    value,
    defaultValue,
    placeholder,
    min,
    max,
    step = 1,
    precision,
    showControl,
    leftAdornment,
    rightAdornment,
    error: inputError,
    required: inputRequired,
    readOnly: inputReadOnly,
    disabled: inputDisabled,
    onChange,
    id,
    name,
    inputMode = 'decimal',
    numberFormatProps,
    ...otherProps
  } = props
  const {
    labelFor,
    error: wrapperError,
    required: wrapperRequired,
    readOnly: wrapperReadOnly,
    disabled: wrapperDisabled
  } = useContext(InputWrapperContext)
  const [internalValue, setInternalValue] = useState(
    value?.toString() ?? defaultValue?.toString() ?? ''
  )
  const inputRef = useRef<HTMLInputElement>(null)
  const timeout = useRef<ReturnType<typeof setTimeout>>()
  const interval = useRef<ReturnType<typeof setInterval>>()

  const showBigControl = showControl === 'big'

  const error = wrapperError ?? inputError
  const required = wrapperRequired ?? inputRequired
  const readOnly = wrapperReadOnly ?? inputReadOnly
  const disabled = wrapperDisabled ?? inputDisabled

  const handleStep = (direction: 'up' | 'down') => {
    requestAnimationFrame(() => {
      setInternalValue(state => {
        const parsedNumber = parseFloat(state ?? '0')
        const numberValue = isNaN(parsedNumber) ? 0 : parsedNumber
        const diff = direction === 'up' ? step : -step
        return clampNumber(numberValue + diff, min, max).toString()
      })
      inputRef.current?.focus()
    })
  }

  const handleStepHold = (direction: 'up' | 'down') => {
    handleStep(direction)
    timeout.current = setTimeout(() => {
      interval.current = setInterval(() => {
        handleStep(direction)
      }, 50)
    }, 300)
  }

  const handleStepRelease = () => {
    clearTimeout(timeout.current)
    clearInterval(interval.current)
  }

  useEffect(() => {
    return handleStepRelease
  }, [])

  return (
    <InputBox
      ref={ref}
      disabled={disabled}
      error={error}
      leftAdornment={
        <>
          {showBigControl && (
            <BigStepButton position="left">
              <IconButton
                variant="text"
                color="inherit"
                onPointerDown={() => handleStepHold('down')}
                onPointerUp={() => handleStepRelease()}
                onPointerOut={() => handleStepRelease()}
                tabIndex={-1}>
                <Minus />
              </IconButton>
            </BigStepButton>
          )}
          {leftAdornment}
        </>
      }
      rightAdornment={
        <>
          {rightAdornment}
          {showBigControl && (
            <BigStepButton position="right">
              <IconButton
                variant="text"
                color="inherit"
                onPointerDown={() => handleStepHold('up')}
                onPointerUp={() => handleStepRelease()}
                onPointerOut={() => handleStepRelease()}
                tabIndex={-1}>
                <Plus />
              </IconButton>
            </BigStepButton>
          )}
          {showControl && !showBigControl && (
            <StepButtons>
              <IconButton
                variant="text"
                size="sm"
                color="inherit"
                onPointerDown={() => handleStepHold('up')}
                onPointerUp={() => handleStepRelease()}
                onPointerOut={() => handleStepRelease()}
                tabIndex={-1}>
                <ChevronUp />
              </IconButton>
              <IconButton
                variant="text"
                size="sm"
                color="inherit"
                onPointerDown={() => handleStepHold('down')}
                onPointerUp={() => handleStepRelease()}
                onPointerOut={() => handleStepRelease()}
                tabIndex={-1}>
                <ChevronDown />
              </IconButton>
            </StepButtons>
          )}
        </>
      }
      {...otherProps}>
      <NumberFormat
        getInputRef={inputRef}
        id={labelFor ?? id}
        inputMode={inputMode}
        name={name}
        value={internalValue}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        isNumericString
        onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
          switch (event.key) {
            case 'ArrowUp': {
              event.preventDefault()
              handleStep('up')
              break
            }
            case 'ArrowDown': {
              event.preventDefault()
              handleStep('down')
              break
            }
          }
        }}
        onValueChange={values => {
          onChange?.({ value: values.value, formattedValue: values.formattedValue })
          setInternalValue(values.value)
        }}
        onBlur={() => {
          const parsedNumber = parseFloat(internalValue ?? '0')
          const numberValue = isNaN(parsedNumber) ? 0 : parsedNumber
          setInternalValue(clampNumber(numberValue, min, max).toString())
        }}
        decimalScale={precision}
        {...numberFormatProps}
      />
    </InputBox>
  )
})

NumberInput.displayName = 'NumberInput'
