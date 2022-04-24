import { useEffect, useRef } from 'react'
import { getFocusable } from '@rui/utils'
import { useKeyPress } from '@rui/hooks'

export interface Props {
	autofocus?: boolean
	disabled?: boolean
	children?: React.ReactNode
}

export const FocusTrap: React.FC<Props> = props => {
	const { autofocus, disabled, children } = props
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (autofocus && !disabled) {
			const focusable = getFocusable(ref.current)
			focusable[0]?.focus()
		}
	}, [autofocus])

	useKeyPress('Tab', event => {
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

	return <div ref={ref}>{children}</div>
}

FocusTrap.displayName = 'FocusTrap'
