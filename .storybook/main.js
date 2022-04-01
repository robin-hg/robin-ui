const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
// const tsconfigPaths = require('vite-tsconfig-paths').default

module.exports = {
	core: { builder: 'webpack5' },
	// core: { builder: '@storybook/builder-vite' },
	stories: ['../src/**/*.stories.@(tsx|mdx)'],
	addons: [
		{ name: '@storybook/addon-essentials', options: { backgrounds: false } },
		'@storybook/addon-a11y',
		'storybook-dark-mode/register'
	],
	framework: '@storybook/react',
	features: { emotionAlias: false },
	webpackFinal: config => {
		config.resolve.plugins = [
			...(config.resolve.plugins ?? []),
			new TsconfigPathsPlugin({ extensions: config.resolve.extensions })
		]
		return config
	}
	// viteFinal: config => {
	// 	config.plugins.push(tsconfigPaths())
	// 	config.optimizeDeps.include = [
	// 		...(config.optimizeDeps.include ?? []),
	// 		'@storybook/theming',
	// 		'storybook-dark-mode'
	// 	]
	// 	return config
	// }
}
