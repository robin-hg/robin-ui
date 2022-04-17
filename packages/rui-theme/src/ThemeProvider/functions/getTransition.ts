import type { BaseTheme } from '../../types'

export interface TransitionOptions {
	properties?: React.CSSProperties['transitionProperty'][]
	duration?: string | number
}

const parseDuration = (value?: number | string) => (typeof value === 'number' ? `${value}ms` : value)

export const getTransition = (theme: BaseTheme) => (options?: TransitionOptions) => {
	const { properties = ['all'], duration } = options || {}
	return properties
		.map(property => `${property} ${parseDuration(duration || theme.transition.duration)} ${theme.transition.ease}`)
		.join(', ')
}
