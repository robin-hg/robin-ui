import type { StorybookConfig } from '@storybook/react-vite'
import { mergeConfig } from 'vite'
import path from 'path'

const storybokConfig: StorybookConfig = {
  stories: ['../packages/core/src/**/*.stories.tsx'],
  addons: ['@storybook/addon-controls', '@storybook/addon-a11y', 'storybook-dark-mode'],
  framework: {
    name: '@storybook/react-vite',
    options: { fastRefresh: true }
  },
  // workaround for hoisting issues with pnpm
  viteFinal: config =>
    mergeConfig(config, {
      root: path.dirname(require.resolve('@storybook/builder-vite'))
    })
}

export default storybokConfig
