import type { DefaultProps, SizeValue } from '@robin-ui/types'
import React from 'react'

import { FlexBoxContainer } from './FlexBox.style'

export interface Props extends DefaultProps<HTMLDivElement, 'wrap'> {
	direction?: React.CSSProperties['flexDirection']
	alignItems?: React.CSSProperties['alignItems']
	justifyContent?: React.CSSProperties['justifyContent']
	wrap?: boolean
	spacing?: SizeValue | [SizeValue, SizeValue]
}

export const FlexBox = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const {
		direction = 'row',
		justifyContent = 'flex-start',
		alignItems = 'center',
		spacing = 'md',
		wrap,
		children,
		...otherProps
	} = props

	return (
		<FlexBoxContainer
			ref={ref}
			$direction={direction}
			$justifyContent={justifyContent}
			$alignItems={alignItems}
			$spacing={spacing}
			$wrap={!!wrap}
			{...otherProps}>
			{children}
		</FlexBoxContainer>
	)
})

FlexBox.displayName = 'FlexBox'
