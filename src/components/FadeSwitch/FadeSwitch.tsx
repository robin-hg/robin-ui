import React from 'react'
import { SwitchTransition } from 'react-transition-group'

import Fade from '@rui/components/Fade'

export interface Props extends RobinUI.StandardProps<HTMLDivElement> {
	currentKey: string | number
	timeout?: number
}

const FadeGroup: React.FC<Props> = props => {
	const { currentKey, timeout = 200, children, ...otherProps } = props

	return (
		<SwitchTransition key={currentKey} {...otherProps}>
			<Fade key={currentKey} in timeout={timeout}>
				{children}
			</Fade>
		</SwitchTransition>
	)
}

FadeGroup.displayName = 'FadeGroup'
export default FadeGroup
