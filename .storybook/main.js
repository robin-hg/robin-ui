module.exports = {
	core: { builder: '@storybook/builder-vite' },
	stories: ['../packages/**/*.stories.@(tsx|mdx)'],
	addons: [
		{ name: '@storybook/addon-essentials', options: { backgrounds: false, actions: false } },
		'@storybook/addon-a11y',
		'storybook-dark-mode'
	],
	framework: '@storybook/react',
	features: { emotionAlias: false },
	typescript: { reactDocgen: false }
}
