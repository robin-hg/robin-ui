import React from 'react'
import { Transition } from 'react-transition-group'
import type { TimeoutProps } from 'react-transition-group/Transition'

import { FadeContainer } from './Fade.style'

export interface Props extends TimeoutProps<HTMLDivElement> {
	timeout: number
	children?: React.ReactNode
}

export const Fade = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { in: inProp, timeout = 200, unmountOnExit = true, children, ...otherProps } = props

	return (
		<Transition appear in={inProp} timeout={timeout} unmountOnExit={unmountOnExit} {...otherProps}>
			{state => (
				<FadeContainer ref={ref} $state={state} $timeout={timeout}>
					{children}
				</FadeContainer>
			)}
		</Transition>
	)
})

Fade.displayName = 'Fade'
