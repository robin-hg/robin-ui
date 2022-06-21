import type { DefaultProps } from '@robin-ui/types'
import React from 'react'

import { TabPanelContainer } from './TabPanel.style'

export interface Props extends DefaultProps<HTMLDivElement, 'label'> {
  label?: React.ReactNode
  tabKey?: string | number
}

export const TabPanel = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { label, tabKey, children, ...otherProps } = props

  return (
    <TabPanelContainer ref={ref} role="tabpanel" {...otherProps}>
      {children}
    </TabPanelContainer>
  )
})

TabPanel.displayName = 'TabPanel'
