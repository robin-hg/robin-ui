const { mergeConfig } = require('vite')

module.exports = {
  core: { builder: '@storybook/builder-vite', disableTelemetry: true },
  stories: ['../packages/core/src/**/*.stories.@(tsx|mdx)'],
  addons: [
    '@storybook/addon-controls',
    '@storybook/addon-actions',
    '@storybook/addon-a11y',
    'storybook-dark-mode'
  ],
  framework: '@storybook/react',
  features: { emotionAlias: false, storyStoreV7: true },
  viteFinal: config => {
    const path = require('path')
    // workaround for hoisting issues with pnpm
    return mergeConfig(config, {
      root: path.dirname(require.resolve('@storybook/builder-vite'))
    })
  }
}
