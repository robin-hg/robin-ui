import { themes } from '@storybook/theming'
import { useDarkMode } from 'storybook-dark-mode'
// import { dark, gray } from '../src/style/colors'
import { dark, gray } from '../packages/rui-theme/src/defaultTheme/colors'

import { BaseContainer, RUIProvider } from '../packages/rui-core'

export const parameters = {
	darkMode: {
		dark: { ...themes.dark, appBg: dark[900], barBg: dark[900], appContentBg: dark[900] },
		light: { ...themes.light, appBg: gray[50] }
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
				'Navigation',
				'Shotrtcuts',
				'Utils',
				'Hooks'
			]
		}
	},
	controls: {
		hideNoControlsWarning: true,
		matchers: {
			text: /^(label)$/i
		}
	}
}

export const decorators = [
	Story => {
		const darkMode = useDarkMode()
		return (
			<RUIProvider colorMode={darkMode ? 'dark' : 'light'} forcedColorMode>
				<BaseContainer>{Story()}</BaseContainer>
			</RUIProvider>
		)
	}
]
