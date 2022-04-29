import { themes } from '@storybook/theming'
import { useDarkMode } from 'storybook-dark-mode'
import { dark, gray } from '../packages/rui-theme/src/defaultTheme/colors'

import { BaseContainer, RUIProvider } from '../packages/rui-core'

export const parameters = {
	previewTabs: {
		'storybook/docs/panel': {
			hidden: true
		}
	},
	darkMode: {
		dark: { ...themes.dark, appBg: dark[800], barBg: dark[800], appContentBg: dark[800] },
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
				'Feedback',
				'Navigation',
				'Utils'
			]
		}
	},
	controls: {
		hideNoControlsWarning: true,
		matchers: {
			text: /^(label|description|errorMessage)$/
		}
	}
}

export const argTypes = {
	as: { table: { disable: true } },
	sx: { table: { disable: true } }
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
