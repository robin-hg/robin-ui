import type { Meta, StoryFn } from '@storybook/react'
import { wait } from '@robin-ui/utils'

import { AsyncButton, type Props } from './AsyncButton'

export default {
  title: 'Inputs/AsyncButton',
  component: AsyncButton,
  args: {
    spinnerPosition: 'right',
    loadingText: 'Loading',
    completeText: 'Complete',
    loadingDuration: 500,
    completeDuration: 1000,
    errorDuration: 1000,
    size: 'md',
    variant: 'filled',
    color: 'primary'
  },
  argTypes: {
    size: { control: { type: 'radio' }, options: ['xs', 'sm', 'md', 'lg', 'xl'] }
  }
} as Meta<Props>

const Template: StoryFn<Props> = args => <AsyncButton {...args}>Click Me</AsyncButton>

export const Default = Template.bind({})
Default.args = {
  onClick: async () => {
    await wait(3000)
  }
}

export const WithError = Template.bind({})
WithError.args = {
  onClick: async () => {
    await wait(3000)
    throw Error('error')
  }
}
