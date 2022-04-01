import { themes } from '@storybook/theming'
import { useDarkMode } from 'storybook-dark-mode'
import { RUIThemeProvider } from '../src/style'
import { dark, gray } from '../src/style/colors'

import { BaseContainer } from '../src'

export const parameters = {
	darkMode: {
		dark: { ...themes.dark, appBg: dark[7], barBg: dark[8], appContentBg: dark[8] },
		light: { ...themes.light, appBg: gray[0] }
	},
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
