import React, { useContext, useEffect, useRef, useState } from 'react'
import { useSize } from '@rui/hooks'
import { parseSize } from '@rui/utils'

import { ExpandContainer } from './Expand.style'

const ExpandContext = React.createContext<{ updateParent?: (updatingChild: boolean) => void }>({})

export interface Props extends RobinUI.StandardProps<HTMLDivElement> {
	open?: boolean
	timeout?: number
}

const Expand = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { open, timeout = 200, children, ...otherProps } = props
	const [childUpdating, setChildUpdating] = useState(false)
	const { updateParent } = useContext(ExpandContext)
	const contentRef = useRef<HTMLDivElement>(null)
	const size = useSize(contentRef.current)

	useEffect(() => {
		if (updateParent) {
			updateParent(true)
			const t = window.setTimeout(() => updateParent(false), timeout + 50)
			return () => {
				window.clearTimeout(t)
			}
		}
	}, [open])

	return (
		<ExpandContext.Provider value={{ updateParent: setChildUpdating }}>
			<ExpandContainer
				ref={ref}
				$open={!!open}
				$height={childUpdating ? 'auto' : parseSize(size?.height || 0)}
				$timeout={timeout}
				{...otherProps}>
				<div ref={contentRef}>{children}</div>
			</ExpandContainer>
		</ExpandContext.Provider>
	)
})

Expand.displayName = 'Expand'
export default Expand
