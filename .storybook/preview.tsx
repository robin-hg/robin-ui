import type { DecoratorFn } from '@storybook/react'
import React from 'react'
import { themes } from '@storybook/theming'
import { useDarkMode } from 'storybook-dark-mode'
import { colors } from '../packages/theme/src/colors'

import { RobinProvider } from '../packages/core'

import '@fontsource/noto-sans/400.css'
import '@fontsource/noto-sans/600.css'
import '@fontsource/noto-serif-display/400.css'
import '@fontsource/noto-serif-display/600.css'
import '@fontsource/noto-sans-mono/400.css'

export const parameters = {
	darkMode: {
		dark: {
			...themes.dark,
			appBg: colors.neutral[10],
			barBg: colors.neutral[10],
			appContentBg: colors.neutral[10]
		},
		light: { ...themes.light, appBg: colors.neutral[90] }
	},
	actions: { argTypesRegex: '^on[A-Z].*' },
	options: {
		panelPosition: 'right',
		storySort: {
			method: 'alphabetical',
			order: [
				'Colors',
				'Icons',
				'Typography',
				'Layout',
				'Surface',
				'Inputs',
				'Display',
				'Overlay',
				'Feedback',
				'Navigation',
				'Utils'
			]
		}
	},
	controls: {
		hideNoControlsWarning: true
	}
}

export const decorators: DecoratorFn[] = [
	Story => {
		const darkMode = useDarkMode()
		return (
			<React.StrictMode>
				<RobinProvider colorMode={darkMode ? 'dark' : 'light'}>{Story()}</RobinProvider>
			</React.StrictMode>
		)
	}
]
