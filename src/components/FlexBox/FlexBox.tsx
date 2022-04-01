import React from 'react'
import { parseSize } from '@rui/utils'

import { FlexBoxContainer } from './FlexBox.style'

export interface Props extends RobinUI.StandardProps<HTMLDivElement, 'wrap'> {
	direction?: React.CSSProperties['flexDirection']
	alignItems?: React.CSSProperties['alignItems']
	justifyContent?: React.CSSProperties['justifyContent']
	wrap?: boolean
	spacing?: number | string
}

const FlexBox = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const {
		direction = 'row',
		justifyContent = 'flex-start',
		alignItems = 'center',
		spacing = 15,
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
			$spacing={parseSize(spacing)}
			$wrap={!!wrap}
			{...otherProps}>
			{children}
		</FlexBoxContainer>
	)
})

FlexBox.displayName = 'FlexBox'
export default FlexBox
