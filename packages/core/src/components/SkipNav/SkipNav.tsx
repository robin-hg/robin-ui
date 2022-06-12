import type { DefaultProps } from '@robin-ui/types'
import React from 'react'

import { StyledLink } from './SkipNav.style'

export interface Props extends DefaultProps<HTMLAnchorElement> {
	contentId: string
}

export const SkipNav = React.forwardRef<HTMLAnchorElement, Props>((props, ref) => {
	const { contentId, children = 'Skip to content', ...otherProps } = props

	return (
		<StyledLink ref={ref} href={`#${contentId}`} {...otherProps}>
			{children}
		</StyledLink>
	)
})

SkipNav.displayName = 'SkipNav'
