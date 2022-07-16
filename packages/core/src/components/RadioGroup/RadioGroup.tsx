import type { DefaultProps } from '@robin-ui/types'
import React, { useContext, useMemo } from 'react'
import { useUncontrolled } from '@robin-ui/hooks'

import { InputWrapperContext } from '../InputWrapper'

import { RadioContainer } from './RadioGroup.style'

export const RadioGroupContext = React.createContext<{
  name?: string
  value?: string | number
  error?: boolean
  required?: boolean
  readOnly?: boolean
  disabled?: boolean
  onChange?: (value?: string | number) => void
}>({})

export interface Props extends DefaultProps<HTMLDivElement, 'onChange' | 'wrap'> {
  direction?: React.CSSProperties['flexDirection']
  value?: string | number
  defaultValue?: string | number

  // state props
  error?: boolean
  required?: boolean
  readOnly?: boolean
  disabled?: boolean

  // fn props
  onChange?: (value?: string | number) => void
}

export const RadioGroup = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    direction = 'row',
    value,
    defaultValue,
    error: inputError,
    required: inputRequired,
    readOnly: inputReadOnly,
    disabled: inputDisabled,
    onChange,
    name,
    children,
    ...otherProps
  } = props
  const {
    labelId,
    error: wrapperError,
    required: wrapperRequired,
    readOnly: wrapperReadOnly,
    disabled: wrapperDisabled
  } = useContext(InputWrapperContext)
  const [_value, setUncontrolled] = useUncontrolled(defaultValue, value)

  const error = wrapperError || inputError
  const required = wrapperRequired || inputRequired
  const readOnly = wrapperReadOnly || inputReadOnly
  const disabled = wrapperDisabled || inputDisabled

  const ctxValue = useMemo(
    () => ({
      name,
      value: _value,
      error,
      required,
      readOnly,
      disabled,
      onChange: (newValue?: string | number) => {
        setUncontrolled(newValue)
        onChange?.(newValue)
      }
    }),
    [name, _value, error, required, readOnly, disabled, onChange]
  )

  return (
    <RadioContainer
      ref={ref}
      direction={direction}
      role="radiogroup"
      aria-labelledby={labelId}
      {...otherProps}>
      <RadioGroupContext.Provider value={ctxValue}>{children}</RadioGroupContext.Provider>
    </RadioContainer>
  )
})

RadioGroup.displayName = 'RadioGroup'
