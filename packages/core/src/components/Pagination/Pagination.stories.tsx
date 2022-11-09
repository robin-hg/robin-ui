import type { Meta, StoryFn } from '@storybook/react'
import { useArgs } from '@storybook/client-api'

import { Pagination, type Props } from './Pagination'

export default {
  title: 'Navigation/Pagination',
  component: Pagination,
  args: {
    page: 1,
    count: 50,
    siblings: 1,
    size: 'md',
    align: 'center'
  },
  argTypes: {
    size: { control: { type: 'radio' }, options: ['xs', 'sm', 'md', 'lg', 'xl'] }
  }
} as Meta<Props>

export const Default: StoryFn<Props> = args => {
  const [, updateArgs] = useArgs()
  return (
    <Pagination
      {...args}
      onChange={newPage => {
        args.onChange?.(newPage)
        updateArgs({ page: newPage })
      }}
    />
  )
}
