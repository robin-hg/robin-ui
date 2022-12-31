import type { StorybookConfig } from '@storybook/react-vite'

const storybokConfig: StorybookConfig = {
  stories: ['../packages/core/src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-controls',
    '@storybook/addon-a11y',
    '@storybook/addon-storysource',
    'storybook-dark-mode'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: { fastRefresh: true }
  }
}

export default storybokConfig
