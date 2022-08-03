const { mergeConfig } = require('vite')

module.exports = {
  core: { builder: '@storybook/builder-vite', disableTelemetry: true },
  stories: ['../packages/core/src/**/*.stories.tsx'],
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
      root: path.dirname(require.resolve('@storybook/builder-vite')),
      optimizeDeps: {
        include: [
          ...(config.optimizeDeps?.include ?? []),
          '@emotion/react',
          '@floating-ui/react-dom',
          '@storybook/theming',
          'colord',
          'colord/plugins/a11y',
          'colord/plugins/lch',
          'colord/plugins/mix',
          'framer-motion',
          'react-number-format',
          'storybook-dark-mode'
        ]
      }
    })
  }
}
