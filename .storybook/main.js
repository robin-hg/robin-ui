const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
	stories: ['../src/**/*.stories.@(tsx|mdx)'],
	addons: [{ name: '@storybook/addon-essentials', options: { backgrounds: false } }, 'storybook-dark-mode/register'],
	framework: '@storybook/react',
	features: { emotionAlias: false },
	webpackFinal: config => {
		config.resolve.plugins = [
			...(config.resolve.plugins || []),
			new TsconfigPathsPlugin({ extensions: config.resolve.extensions })
		]
		return config
	}
}
