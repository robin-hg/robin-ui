import { useArgs } from '@storybook/client-api'
import type { Meta, StoryFn } from '@storybook/react'

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
  }
} satisfies Meta<Props>

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
