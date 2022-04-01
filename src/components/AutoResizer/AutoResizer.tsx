import React, { useRef } from 'react'
import { parseSize } from '@rui/utils'
import { useSize } from '@rui/hooks'

import { AutoResizerContainer, HiddenContent } from './AutoResizer.style'

export interface Props extends RobinUI.StandardProps<HTMLSpanElement> {
	/**
	 * Animation duration.
	 * @default 200
	 */
	timeout?: number
	disableResizeHeight?: boolean
	disableResizeWidth?: boolean
}

const AutoResizer = React.forwardRef<HTMLSpanElement, Props>((props, ref) => {
	const { timeout = 200, disableResizeHeight, disableResizeWidth, children, ...otherProps } = props
	const hiddenRef = useRef<HTMLDivElement>(null)
	const size = useSize(hiddenRef.current, [children])

	const contentWidth = !disableResizeWidth && size ? size.width : 'auto'
	const contentHeight = !disableResizeHeight && size ? size.height : 'auto'

	return (
		<AutoResizerContainer
			ref={ref}
			$width={parseSize(contentWidth)}
			$height={parseSize(contentHeight)}
			$timeout={timeout}
			{...otherProps}>
			{children}
			<HiddenContent ref={hiddenRef}>{children}</HiddenContent>
		</AutoResizerContainer>
	)
})

AutoResizer.displayName = 'AutoResizer'
export default AutoResizer
