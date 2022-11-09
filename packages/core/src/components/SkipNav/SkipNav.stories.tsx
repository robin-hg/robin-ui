import type { Meta, StoryFn } from '@storybook/react'

import { type Props, SkipNav } from './SkipNav'

export default {
  title: 'Utils/SkipNav',
  component: SkipNav
} as Meta<Props>

export const Default: StoryFn<Props> = () => (
  <>
    <SkipNav contentId="content" />
    <div id="content">Press tab to focus</div>
  </>
)
