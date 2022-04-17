module.exports = {
	core: { builder: 'webpack5' },
	// core: { builder: '@storybook/builder-vite' },
	stories: ['../packages/**/*.stories.@(tsx|mdx)'],
	addons: [
		{ name: '@storybook/addon-essentials', options: { backgrounds: false } },
		'@storybook/addon-a11y',
		'storybook-dark-mode/register'
	],
	framework: '@storybook/react',
	features: { emotionAlias: false }
	// webpackFinal: config => {
	// 	config.resolve.alias = {
	// 		...config.resolve.alias,
	// 		'@emotion/react': require.resolve('@emotion/react'),
	// 		'@emotion/styled': require.resolve('@emotion/styled')
	// 	}
	// 	return config
	// }
	// viteFinal: config => {
	// 	config.resolve.alias = {
	// 		...config.resolve.alias,
	// 		'@emotion/react': require.resolve('@emotion/react'),
	// 		'@emotion/styled': require.resolve('@emotion/styled')
	// 	}
	// 	return config
	// }
}
