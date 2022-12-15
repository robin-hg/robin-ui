import type { Meta, StoryFn } from '@storybook/react'

import { Container } from '../Container'

import { ContainerBreak, type Props } from './ContainerBreak'

export default {
  title: 'Layout/ContainerBreak',
  component: ContainerBreak
} satisfies Meta<Props>

export const Default: StoryFn<Props> = args => (
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
