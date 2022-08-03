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
          '@storybook/theming',
          'storybook-dark-mode',
          '@emotion/react',
          'framer-motion',
          '@floating-ui/react-dom',
          'react-number-format',
          'colord',
          'colord/plugins/a11y',
          'colord/plugins/lch',
          'colord/plugins/mix'
        ]
      }
    })
  }
}
