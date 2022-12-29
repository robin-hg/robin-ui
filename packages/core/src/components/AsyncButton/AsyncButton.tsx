import { forwardRef, useContext, useState } from 'react'

import { Check, X } from '@robin-ui/icons'
import { wait } from '@robin-ui/utils'

import type { Button } from '../Button'
import { ModalContext } from '../Modal'
import { Spinner } from '../Spinner'

import { StyledButton } from './AsyncButton.style'

type States = 'ready' | 'loading' | 'complete' | 'error'

export interface Props extends React.ComponentProps<typeof Button> {
  spinnerPosition?: 'left' | 'right'
  loadingText?: string
  completeText?: string
  errorText?: string
  loadingDuration?: number
  completeDuration?: number
  errorDuration?: number
  onClick?: (event: React.MouseEvent) => Promise<void> | void
  onComplete?: () => Promise<void> | void
  onError?: (error: unknown) => Promise<void> | void
}

export const AsyncButton = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const [state, setState] = useState<States>('ready')
  const {
    spinnerPosition = 'right',
    loadingText = 'Loading',
    completeText = 'Complete',
    errorText = 'Error',
    loadingDuration = 500,
    completeDuration = 1000,
    errorDuration = 1000,
    onClick,
    onComplete,
    onError = error => console.error(error),
    children,
    leftAdornment,
    rightAdornment,
    ...otherProps
  } = props
  const { setPreventClose } = useContext(ModalContext)

  const process = async (event: React.MouseEvent) => {
    if (state !== 'ready') {
      return
    }

    setState('loading')
    setPreventClose?.(true)

    let duration = 0
    try {
      const startTime = performance.now()
      await onClick?.(event)
      const endTime = performance.now()
      duration = endTime - startTime

      if (duration < loadingDuration) {
        await wait(loadingDuration - duration)
      }
      setState('complete')
      await onComplete?.()
      await wait(completeDuration)
    } catch (error) {
      if (duration < loadingDuration) {
        await wait(loadingDuration - duration)
      }
      setState('error')
      await onError?.(error)
      await wait(errorDuration)
    } finally {
      setState('ready')
      setPreventClose?.(false)
    }
  }

  const [text, icon] = (() => {
    switch (state) {
      case 'loading':
        return [loadingText, <Spinner key="loading" color="inherit" size="xs" />]
      case 'complete':
        return [completeText, <Check key="complete" />]
      case 'error':
        return [errorText, <X key="error" />]
      default:
        return [children]
    }
  })()

  return (
    <StyledButton
      ref={ref}
      onClick={process}
      leftAdornment={(spinnerPosition === 'left' && icon) || leftAdornment}
      rightAdornment={(spinnerPosition === 'right' && icon) || rightAdornment}
      $loading={state !== 'ready'}
      {...otherProps}>
      {text}
    </StyledButton>
  )
})

AsyncButton.displayName = 'AsyncButton'
