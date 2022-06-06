import type { DefaultProps } from '@robin-ui/types'
import React from 'react'
import { HiddenContainer } from './VisuallyHidden.style'

export interface Props extends DefaultProps<HTMLDivElement> {}

export const VisuallyHidden = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { children, ...otherProps } = props

	return (
		<HiddenContainer ref={ref} {...otherProps}>
			{children}
		</HiddenContainer>
	)
})

VisuallyHidden.displayName = 'VisuallyHidden'
