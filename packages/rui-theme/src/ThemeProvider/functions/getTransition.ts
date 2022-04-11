import type { BaseTheme } from '../../types'

export const getTransition =
	(theme: BaseTheme) =>
	(properties: React.CSSProperties['transitionProperty'][] = ['all']) =>
		properties.map(property => `${property} ${theme.transition.duration} ${theme.transition.timing}`).join(', ')
