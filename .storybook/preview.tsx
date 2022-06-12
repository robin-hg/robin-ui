import type { DecoratorFn } from '@storybook/react'
import { themes } from '@storybook/theming'
import { useDarkMode } from 'storybook-dark-mode'
import { dark, gray } from '../packages/theme/src/defaultTheme/colors'

import { RobinProvider } from '../packages/core'

import '@fontsource/noto-sans/400.css'
import '@fontsource/noto-sans/600.css'
import '@fontsource/noto-serif-display/400.css'
import '@fontsource/noto-serif-display/600.css'
import '@fontsource/noto-sans-mono/400.css'

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
		return <RobinProvider colorMode={darkMode ? 'dark' : 'light'}>{Story()}</RobinProvider>
	}
]
