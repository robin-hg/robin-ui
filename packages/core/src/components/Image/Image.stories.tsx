import type { Meta, StoryFn } from '@storybook/react'

import { Image, type Props } from './Image'

export default {
  title: 'Display/Image',
  component: Image,
  args: {
    src: 'https://images.ctfassets.net/hrltx12pl8hq/5qusjAtcAaetdPsing4jR6/2db2f75abd2840caa09d21312b4fc6c8/animals-wildlife-shutterstock_1066200380.jpg?fit=fill&w=1024&h=683&fm=webp',
    alt: 'Tiger',
    radius: 'md'
  }
} satisfies Meta<Props>

export const Default: StoryFn<Props> = args => <Image {...args} />
