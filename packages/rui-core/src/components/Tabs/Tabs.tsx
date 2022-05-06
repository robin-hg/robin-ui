import type { DefaultProps, ColorToken } from '@rui/types'
import React, { Children, useState } from 'react'

import type { Props as TabPanelProps } from '../TabPanel'
import { TransitionSwitch } from '../TransitionSwitch'

import { Tab, TabGroup } from './Tabs.style'

export interface Props extends DefaultProps<HTMLDivElement, 'onChange'> {
	color?: ColorToken
	activeTab?: string | number
	defaultTab?: string | number
	onChange?: (tab?: string | number) => void
	children?: React.ReactElement | React.ReactElement[]
}

export const Tabs = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { color = 'primary', activeTab, defaultTab, onChange, children, ...otherProps } = props

	const [uncontrolled, setUncontrolled] = useState(defaultTab || 0)
	const isUncontrolled = activeTab === undefined
	const _activeTab = isUncontrolled ? uncontrolled : activeTab

	const tabs = Children.toArray(children) as React.ReactElement<TabPanelProps>[]
	const activePanel = tabs.find((tab, i) =>
		typeof _activeTab === 'number' ? _activeTab === i : _activeTab === tab.props?.tabKey
	)

	return (
		<div ref={ref} {...otherProps}>
			<TabGroup role="tablist" aria-orientation="horizontal">
				{tabs.map((tab, i) => {
					const key = tab.props?.tabKey || i
					const active = _activeTab === key
					return (
						<Tab
							key={key}
							$active={active}
							role="tab"
							variant="text"
							borderRadius="xs"
							color={active ? color : 'surface.onVariant'}
							onClick={() => {
								onChange?.(key)
								setUncontrolled(key)
							}}
							tabIndex={active ? 0 : -1}
							aria-selected={active}>
							{tab.props?.label}
						</Tab>
					)
				})}
			</TabGroup>
			<TransitionSwitch currentKey={_activeTab}>{activePanel}</TransitionSwitch>
		</div>
	)
})

Tabs.displayName = 'Tabs'
