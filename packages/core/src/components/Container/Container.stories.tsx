import type { Meta, Story } from '@storybook/react'
import { sxc } from '@robin-ui/styles'

import { Container, type Props } from './Container'

export default {
  title: 'Layout/Container',
  component: Container,
  args: {
    maxWidth: '60ch'
  },
  argTypes: {
    maxWidth: { control: 'number' }
  }
} as Meta<Props>

export const Default: Story<Props> = args => (
  <Container {...args}>
    <sxc.div
      sx={{
        height: '30rem',
        background: 'surface.variant'
      }}
    />
  </Container>
)
