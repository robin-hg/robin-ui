import type { Meta, Story } from '@storybook/react'

import { type Props, SkipNav } from './SkipNav'

export default {
  title: 'Utils/SkipNav',
  component: SkipNav
} as Meta<Props>

export const Default: Story<Props> = () => (
  <>
    <SkipNav contentId="content" />
    <div id="content">Press tab to focus</div>
  </>
)
