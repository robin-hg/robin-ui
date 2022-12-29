import { forwardRef } from 'react'

import type { DefaultProps } from '@robin-ui/types'

import { TabPanelContainer } from './TabPanel.style'

export interface Props extends DefaultProps<HTMLDivElement, 'label'> {
  label?: React.ReactNode
  tabKey?: string | number
  disabled?: boolean
}

export const TabPanel = forwardRef<HTMLDivElement, Props>((props, ref) => {
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  const { label, tabKey, children, ...otherProps } = props

  return (
    <TabPanelContainer ref={ref} role="tabpanel" {...otherProps}>
      {children}
    </TabPanelContainer>
  )
})

TabPanel.displayName = 'TabPanel'
