import React, { useContext, useEffect, useRef, useState } from 'react'
import { useCombinedRef, useSize, useUncontrolled } from '@robin-ui/hooks'
import { InputWrapperContext } from '../InputWrapper'

import type { InputBox } from '../InputBox'
import { Menu } from '../Menu'
import { MenuItem } from '../MenuItem'

import { SelectBox } from './Select.style'
import { ChevronDown } from '@robin-ui/icons'

interface Item {
  value: string | number
  label?: string
  disabled?: boolean
}

export interface Props
  extends Omit<React.ComponentProps<typeof InputBox>, 'children' | 'onChange'> {
  placeholder?: string
  value?: Item['value']
  defaultValue?: Item['value']
  options?: Item[]
  native?: boolean

  // state props
  error?: boolean
  required?: boolean
  disabled?: boolean

  // fn props
  onChange?: (value: Item['value']) => void
}

export const Select = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    options = [],
    value,
    defaultValue,
    placeholder,
    native,
    error: inputError,
    required: inputRequired,
    readOnly: inputReadOnly,
    disabled: inputDisabled,
    onChange,
    onClick,
    onKeyDown,
    id,
    name,
    ...otherProps
  } = props
  const boxRef = useRef<HTMLDivElement>(null)
  const combinedRef = useCombinedRef(boxRef, ref)
  const [open, setOpen] = useState(false)
  const size = useSize(boxRef.current)
  const {
    labelId,
    labelFor,
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

  useEffect(() => {
    setOpen(false)
  }, [disabled, native])

  const item = options.find(option => option.value === _value)

  return (
    <>
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
        readOnly={readOnly}
        disabled={disabled}
        error={wrapperError || error}
        active={open}
        tabIndex={native ? -1 : 0}
        {...otherProps}>
        {native ? (
          <select
            id={labelFor ?? id}
            value={item?.value}
            onChange={event => {
              onChange?.(event.target.value)
              setUncontrolled(event.target.value)
            }}
            required={required}
            disabled={disabled}>
            {options.map(option => (
              <option key={option.value} value={option.value} disabled={option.disabled}>
                {option.label ?? option.value}
              </option>
            ))}
          </select>
        ) : (
          <>
            <input type="hidden" name={name} value={item?.value ?? ''} required={required} />
            <input
              id={labelFor ?? id}
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
      {!native && !disabled && !readOnly && (
        <Menu
          role="listbox"
          aria-labelledby={labelId ?? id}
          trigger={boxRef.current}
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
    </>
  )
})

Select.displayName = 'Select'
