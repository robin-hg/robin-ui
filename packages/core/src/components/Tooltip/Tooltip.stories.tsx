import type { Meta, Story } from '@storybook/react'

import { type Props, Tooltip } from './Tooltip'
import { FlexBox } from '../FlexBox'
import { Button } from '../Button'

export default {
  title: 'Overlay/Tooltip',
  component: Tooltip,
  args: {
    label: 'Tooltip',
    withArrow: true
  }
} as Meta<Props>

export const Default: Story<Props> = args => {
  return (
    <FlexBox justifyContent="center" sx={{ height: '50rem' }}>
      <Tooltip {...args}>
        <Button>Hover me.</Button>
      </Tooltip>
    </FlexBox>
  )
}
