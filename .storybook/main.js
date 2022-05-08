module.exports = {
	core: { builder: '@storybook/builder-vite', disableTelemetry: true },
	stories: ['../packages/**/*.stories.@(tsx|mdx)'],
	addons: ['@storybook/addon-controls', '@storybook/addon-actions', '@storybook/addon-a11y', 'storybook-dark-mode'],
	framework: '@storybook/react',
	features: { emotionAlias: false, storyStoreV7: true }
}
