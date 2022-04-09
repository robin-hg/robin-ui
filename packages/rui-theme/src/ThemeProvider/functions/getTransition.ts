import type { RUITheme } from '../../types'

export const getTransition =
	(theme: RUITheme) =>
	(properties: React.CSSProperties['transitionProperty'][] = ['all']) =>
		properties.map(property => `${property} ${theme.transition.duration} ${theme.transition.timing}`).join(', ')
