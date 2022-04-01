const tsconfigPaths = require('vite-tsconfig-paths').default

module.exports = {
	core: { builder: 'storybook-builder-vite' },
	stories: ['../src/**/*.stories.@(tsx|mdx)'],
	addons: ['@storybook/addon-a11y', 'storybook-dark-mode/register'],
	framework: '@storybook/react',
	features: { emotionAlias: false },
	viteFinal: config => ({ ...config, plugins: [...config.plugins, tsconfigPaths()] })
}
