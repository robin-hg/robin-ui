import { createContext, forwardRef, useMemo } from 'react'

import { useId } from '@robin-ui/hooks'
import type { DefaultProps } from '@robin-ui/types'

import { Stack } from '../Stack'
import { Text } from '../Typography'

import { Description, Label } from './InputWrapper.style'

export const InputWrapperContext = createContext<{
  labelId?: string
  labelFor?: string
  error?: boolean
  required?: boolean
  readOnly?: boolean
  disabled?: boolean
}>({})

export interface Props extends DefaultProps<HTMLDivElement> {
  label?: string
  labelId?: string
  labelFor?: string
  description?: React.ReactNode
  errorMessage?: React.ReactNode

  // state props
  error?: boolean
  required?: boolean
  readOnly?: boolean
  disabled?: boolean
}

export const InputWrapper = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    label,
    labelId: labelIdOverride,
    labelFor: labelForOverride,
    description,
    error,
    errorMessage,
    required,
    readOnly,
    disabled,
    children,
    ...otherProps
  } = props

  const labelId = useId(labelIdOverride)
  const labelFor = useId(labelForOverride)

  const ctxValue = useMemo(
    () => ({
      labelId,
      labelFor,
      error,
      required,
      readOnly,
      disabled
    }),
    [error, required, readOnly, disabled]
  )

  return (
    <Stack ref={ref} spacing="sm" {...otherProps}>
      {label && (
        <Label as="label" id={labelId} htmlFor={labelFor} size="lg">
          {label}
          {required && (
            <Text as="span" role="presentation" color="critical" aria-hidden>
              *
            </Text>
          )}
        </Label>
      )}
      {description && (
        <Description as="div" size="xs" color="surface.onVariant">
          {description}
        </Description>
      )}
      <InputWrapperContext.Provider value={ctxValue}>{children}</InputWrapperContext.Provider>
      {error && errorMessage && (
        <Text as="div" size="xs" color="critical" bold>
          {errorMessage}
        </Text>
      )}
    </Stack>
  )
})

InputWrapper.displayName = 'InputWrapper'
