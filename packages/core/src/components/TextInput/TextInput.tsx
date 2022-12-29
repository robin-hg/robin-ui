import { forwardRef, useContext } from 'react'

import { InputWrapperContext } from '../InputWrapper'
import { InputBox } from '../InputBox'

export interface Props extends Omit<React.ComponentProps<typeof InputBox>, 'children'> {
  placeholder?: string
  value?: string
  defaultValue?: string

  // state props
  error?: boolean
  required?: boolean
  disabled?: boolean

  // fn props
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void

  // sub element props
  inputProps?: React.HTMLProps<HTMLInputElement>
}

export const TextInput = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    value,
    defaultValue,
    placeholder,
    error: inputError,
    required: inputRequired,
    readOnly: inputReadOnly,
    disabled: inputDisabled,
    onChange,
    id,
    name,
    type = 'text',
    inputMode,
    inputProps,
    ...otherProps
  } = props
  const {
    labelFor,
    error: wrapperError,
    required: wrapperRequired,
    readOnly: wrapperReadOnly,
    disabled: wrapperDisabled
  } = useContext(InputWrapperContext)

  const error = wrapperError ?? inputError
  const required = wrapperRequired ?? inputRequired
  const readOnly = wrapperReadOnly ?? inputReadOnly
  const disabled = wrapperDisabled ?? inputDisabled

  return (
    <InputBox ref={ref} disabled={disabled} error={error} {...otherProps}>
      <input
        id={labelFor ?? id}
        type={type}
        inputMode={inputMode}
        name={name}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required={required}
        readOnly={readOnly}
        disabled={disabled}
        onChange={onChange}
        {...inputProps}
      />
    </InputBox>
  )
})

TextInput.displayName = 'TextInput'
