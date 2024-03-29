import { forwardRef, useRef } from 'react'

import { useId, useIsomorphicLayoutEffect, useUncontrolled } from '@robin-ui/hooks'
import { Check, Minus } from '@robin-ui/icons'
import type { ColorToken, DefaultProps } from '@robin-ui/types'

import { ControlInput } from '../ControlInput'

import { Box } from './Checkbox.style'

export interface Props
  extends DefaultProps<HTMLInputElement, 'children' | 'label' | 'defaultValue'> {
  checked?: boolean
  defaultValue?: boolean
  color?: ColorToken
  label?: number | string
  labelPosition?: 'left' | 'right'

  // state props
  indeterminate?: boolean
  error?: boolean
  disabled?: boolean

  // fn props
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Checkbox = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    color = 'primary',
    label,
    labelPosition,
    checked,
    defaultValue,
    indeterminate,
    error,
    disabled,
    onChange,
    id,
    className,
    ...otherProps
  } = props
  const _id = useId(id)
  const boxRef = useRef<HTMLInputElement>(null)
  const [_checked, setUncontrolled] = useUncontrolled(!!defaultValue, checked)

  useIsomorphicLayoutEffect(() => {
    if (boxRef.current) {
      boxRef.current.indeterminate = !!indeterminate
    }
  }, [indeterminate])

  return (
    <ControlInput
      ref={ref}
      color={color}
      disabled={disabled}
      label={label}
      labelFor={_id}
      labelPosition={labelPosition}
      className={className}>
      <Box
        ref={boxRef}
        id={_id}
        type="checkbox"
        checked={_checked || !!indeterminate}
        onChange={event => {
          setUncontrolled(event.target.checked)
          onChange?.(event)
        }}
        $color={color}
        $error={!!error}
        disabled={disabled}
        {...otherProps}
      />
      {indeterminate ? <Minus /> : <Check />}
    </ControlInput>
  )
})

Checkbox.displayName = 'Checkbox'
