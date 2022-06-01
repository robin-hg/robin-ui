import type { DefaultProps } from '@rui/types'
import type { Easing } from 'framer-motion/types/types'
import React from 'react'
import { AnimatePresence, m, type Variants } from 'framer-motion'
import { sxc } from '@rui/styles'
import { useTheme, useReducedMotion } from '@rui/hooks'
import { camelCase } from '@rui/utils'

export interface Props extends DefaultProps<HTMLDivElement> {
	in?: boolean
	duration?: number
	ease?: Easing
	unmountOnExit?: boolean
	motionOnly?: boolean
}

const TransitionFactory = (animation: Variants) => {
	const Transition = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
		const {
			in: inProp,
			duration = 200,
			ease: easeOverride,
			unmountOnExit,
			motionOnly,
			children,
			...otherProps
		} = props
		const { transition } = useTheme()
		const ease = easeOverride || camelCase(transition.ease || '')
		const reducedMotion = useReducedMotion()

		const show = unmountOnExit ? inProp : true
		const animate = inProp ? 'enter' : 'exit'

		const transitionComponent = (
			<m.div
				initial={unmountOnExit ? 'exit' : false}
				animate={animate}
				exit="exit"
				variants={animation}
				transition={{ duration: reducedMotion ? 0 : duration / 1000, ease }}>
				<sxc.div ref={ref} {...otherProps}>
					{children}
				</sxc.div>
			</m.div>
		)

		if (motionOnly) {
			return transitionComponent
		}

		return <AnimatePresence initial={false}>{show && transitionComponent}</AnimatePresence>
	})

	Transition.displayName = 'Collapse'

	return Transition
}

export const Fade = TransitionFactory({
	enter: { opacity: 1 },
	exit: { opacity: 0 }
})

export const Collapse = TransitionFactory({
	enter: { opacity: 1, height: 'auto' },
	exit: { opacity: 0, height: 0, overflow: 'hidden' }
})

export const Grow = TransitionFactory({
	enter: { opacity: 1, transform: 'scale(1)' },
	exit: { opacity: 0, transform: 'scale(0.75)' }
})
