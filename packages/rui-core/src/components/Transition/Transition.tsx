import type { DefaultProps } from '@rui/types'
import type { Easing } from 'framer-motion/types/types'
import React from 'react'
import { AnimatePresence, motion, type Variants } from 'framer-motion'

export interface Props extends DefaultProps<HTMLDivElement> {
	in?: boolean
	duration?: number
	ease?: Easing
	unmountOnExit?: boolean
}

const TransitionFactory = (animation: Variants) => {
	const Transition = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
		const { in: inProp, duration = 200, ease = 'easeOut', unmountOnExit, children, ...otherProps } = props

		const show = unmountOnExit ? inProp : true
		const animate = inProp || unmountOnExit ? 'enter' : 'exit'

		return (
			<AnimatePresence initial={false}>
				{show && (
					<motion.div
						initial={unmountOnExit ? 'exit' : false}
						animate={animate}
						exit="exit"
						variants={animation}
						transition={{ duration: duration / 1000, ease }}
						style={{ overflow: 'hidden' }}>
						<div ref={ref} {...otherProps}>
							{children}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		)
	})

	Transition.displayName = 'Collapse'

	return Transition
}

export const Fade = TransitionFactory({
	enter: { opacity: 1 },
	exit: { opacity: 0 }
})

export const Collapse = TransitionFactory({
	enter: { height: 'auto' },
	exit: { height: 0 }
})
