import { useEffect, useRef } from 'react'
import { useEventListener } from '../../hooks'

export interface Props {
	disableAutoFocusOnMount?: boolean
	disabled?: boolean
}

const FocusTrap: React.FC<Props> = props => {
	const { disableAutoFocusOnMount, disabled, children } = props
	const start = useRef<HTMLDivElement>(null)
	const end = useRef<HTMLDivElement>(null)

	useEventListener(
		'focus',
		event => {
			event.preventDefault()
			if (!disabled && event.target === end.current) {
				start.current?.focus()
			}
		},
		[disabled]
	)

	useEffect(() => {
		if (!disabled && !disableAutoFocusOnMount) {
			start.current?.focus({ preventScroll: true })
		}
	}, [disabled, disableAutoFocusOnMount])

	return (
		<>
			<div ref={start} tabIndex={0} />
			{children}
			<div ref={end} tabIndex={0} />
		</>
	)
}

FocusTrap.displayName = 'FocusTrap'
export default FocusTrap
