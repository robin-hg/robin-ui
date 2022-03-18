import React, { useState, useEffect, useRef, useContext } from 'react'
import { wait } from '../../utils'
import { ModalContext } from '../Modal'

import Button from '../Button'
import Spinner from '../Spinner'

type States = 'ready' | 'loading' | 'complete' | 'error'

export interface Props extends React.ComponentProps<typeof Button> {
	spinnerPosition?: 'start' | 'end'
	/**
	 * Text that shows while loading.
	 * @default Loading
	 */
	loadingText?: string
	/**
	 * Text that shows when complete.
	 * @default Complete
	 */
	completeText?: string
	/**
	 * Text that shows on error.
	 * @default Error
	 */
	errorText?: string
	/**
	 * Minimum duration for how long it stays in the loading state.
	 * @default 500
	 */
	loadingTimeout?: number
	/**
	 * Duration for how long it stays in the complete state.
	 * @default 1000
	 */
	completeTimeout?: number
	/**
	 * Duration for how long it stays in the error state.
	 * @default 1000
	 */
	errorTimeout?: number
	skipError?: boolean
	onClick?: (event: React.MouseEvent) => Promise<void> | void
	onComplete?: () => Promise<void> | void
	onError?: (error: any) => Promise<void> | void
}

const ProcessButton = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
	const [state, setState] = useState<States>('ready')
	const {
		spinnerPosition = 'end',
		loadingText = 'Loading',
		completeText = 'Complete',
		errorText = 'Error',
		loadingTimeout = 500,
		completeTimeout = 1000,
		errorTimeout = 1000,
		skipError,
		onClick,
		onComplete,
		onError = error => console.error(error),
		children,
		startAdornment,
		endAdornment,
		...otherProps
	} = props
	const { setPreventClose } = useContext(ModalContext)
	const mounted = useRef(true)

	useEffect(() => {
		return () => {
			mounted.current = false
		}
	}, [])

	const process = async (event: React.MouseEvent) => {
		if (state !== 'ready') {
			return
		}

		mounted.current && setState('loading')
		setPreventClose?.(true)

		try {
			await onClick?.(event)
			await wait(loadingTimeout)
			mounted.current && setState('complete')
			await wait(completeTimeout)
			await onComplete?.()
		} catch (error) {
			const skip = error instanceof Error && error.message.startsWith('skip:')
			await wait(loadingTimeout)
			if (!skipError && !skip) {
				mounted.current && setState('error')
				await onError?.(error)
				await wait(errorTimeout)
			}
		}

		mounted.current && setState('ready')
		setPreventClose?.(false)
	}

	const SpinnerAdornment = state !== 'ready' && <Spinner state={state} color="inherit" size="1.2em" />

	return (
		<Button
			ref={ref}
			onClick={process}
			startAdornment={(spinnerPosition === 'start' && SpinnerAdornment) || startAdornment}
			endAdornment={(spinnerPosition === 'end' && SpinnerAdornment) || endAdornment}
			{...otherProps}>
			{(() => {
				switch (state) {
					case 'loading':
						return loadingText
					case 'complete':
						return completeText
					case 'error':
						return errorText
					default:
						return children
				}
			})()}
		</Button>
	)
})

ProcessButton.displayName = 'ProcessButton'
export default ProcessButton
