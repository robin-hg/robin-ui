import type { Meta, Story } from '@storybook/react'

import { Container } from '../Container'

import { ContainerBreak, type Props } from './ContainerBreak'

export default {
  title: 'Layout/ContainerBreak',
  component: ContainerBreak
} as Meta<Props>

export const Default: Story<Props> = args => (
  <Container>
    <ContainerBreak
      {...args}
      sx={{
        height: '30rem',
        background: 'surface.variant'
      }}
    />
  </Container>
)
