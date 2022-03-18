import { useState, useEffect } from 'react'
import { addons } from '@storybook/addons'
import { useDarkMode } from 'storybook-dark-mode'
import { RUIThemeProvider } from '../src/style/theme'

import { BaseContainer } from '../src'

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	options: {
		panelPosition: 'right',
		storySort: {
			method: 'alphabetical',
			order: [
				'Colors',
				'Icons',
				'Surface',
				'Layout',
				'Display',
				'Navigation',
				'Inputs',
				'Shotrtcuts',
				'Utils',
				'Hooks'
			]
		}
	},
	controls: {
		hideNoControlsWarning: true,
		matchers: {
			color: /^(color|highlight)$/i,
			text: /^(label)$/i
		}
	}
}

export const decorators = [
	Story => {
		const darkMode = useDarkMode()
		return (
			<RUIThemeProvider mode={darkMode ? 'dark' : 'light'}>
				<BaseContainer>{Story()}</BaseContainer>
			</RUIThemeProvider>
		)
	}
]
