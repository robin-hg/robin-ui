import React from 'react'
import { parseSize } from '../../utils'

import { SpinnerContainer, AnimatedCircle, AnimatedComplete, AnimatedXRight, AnimatedXLeft } from './Spinner.style'

export interface Props extends RobinUI.StandardProps<HTMLDivElement, 'size'> {
	/**
	 * Spinner size.
	 * @default 3.2rem
	 */
	size?: string | number
	/**
	 * Spinner color.
	 * @default primary
	 */
	color?: string
	/**
	 * Spinner state.
	 * @default loading
	 */
	state?: 'loading' | 'complete' | 'error'
}

const Spinner = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { size = '3.2rem', color = 'primary', state = 'loading', ...otherProps } = props

	return (
		<SpinnerContainer ref={ref} size={parseSize(size)} color={color} spin={state === 'loading'} {...otherProps}>
			<svg viewBox="25 25 50 50">
				<AnimatedCircle
					state={state}
					cx="50"
					cy="50"
					r="20"
					fill="none"
					strokeWidth="4"
					strokeMiterlimit="10"
					strokeLinecap="round"
				/>
				<AnimatedComplete
					state={state}
					fill="none"
					fillRule="evenodd"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="4"
					points="32 52.95 43.4285714 61 64 38"
				/>
				<AnimatedXRight
					state={state}
					fill="none"
					fillRule="evenodd"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="4"
					d="M63 37L37 63"
				/>
				<AnimatedXLeft
					state={state}
					fill="none"
					fillRule="evenodd"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="4"
					d="M37 37L63 63"
				/>
			</svg>
		</SpinnerContainer>
	)
})

Spinner.displayName = 'Spinner'
export default Spinner
