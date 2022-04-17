import type { DefaultProps } from '@rui/types'
import type { Easing } from 'framer-motion/types/types'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export interface Props extends DefaultProps<HTMLDivElement> {
	open?: boolean
	duration?: number
	ease?: Easing
	unmountOnExit?: boolean
}

export const Collapse = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { open, duration = 200, ease = 'easeOut', unmountOnExit, children, ...otherProps } = props

	const show = unmountOnExit ? open : true
	const animate = open || unmountOnExit ? 'enter' : 'exit'

	return (
		<AnimatePresence initial={false}>
			{show && (
				<motion.div
					initial={unmountOnExit ? 'exit' : false}
					animate={animate}
					exit="exit"
					variants={{
						enter: { height: 'auto' },
						exit: { height: 0 }
					}}
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

Collapse.displayName = 'Collapse'
