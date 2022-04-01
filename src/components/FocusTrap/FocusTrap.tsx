import { useEffect, useRef } from 'react'
import { getFocusable } from '@rui/utils'
import { useOnKeyPress, useMutableCallback } from '@rui/hooks'

export interface Props {
	autofocus?: boolean
	disabled?: boolean
}

const FocusTrap: React.FC<Props> = props => {
	const { autofocus, disabled, children } = props
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (autofocus && !disabled) {
			const focusable = getFocusable(ref.current)
			focusable[0]?.focus()
		}
	}, [autofocus])

	const handleTab = useMutableCallback((event: KeyboardEvent) => {
		const focusable = getFocusable(ref.current)

		if (!focusable.length || disabled) {
			return
		}

		const first = focusable[0]
		const last = focusable[focusable.length - 1]

		const next = event.shiftKey ? last : first
		const leaving = event.shiftKey ? document.activeElement !== first : document.activeElement !== last

		if (leaving) {
			return
		}

		event.preventDefault()
		next.focus()
	})

	useOnKeyPress('Tab', handleTab)

	return <div ref={ref}>{children}</div>
}

FocusTrap.displayName = 'FocusTrap'
export default FocusTrap
