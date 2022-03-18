import React from 'react'
import { parseSize } from '../../utils'
import { useKeyPress } from '../../hooks'

import Popup from '../Popup'
import FocusTrap from '../FocusTrap'
// import ScrollContainer from '../ScrollContainer'

import { StyledMenu } from './Menu.style'

export interface Props extends React.ComponentProps<typeof Popup> {
	/**
	 * Menu width.
	 * @default auto
	 */
	width?: string | number
	/**
	 * Max menu height.
	 * @default 30rem
	 */
	maxHeight?: string | number
	onClose?: () => void
}

const Menu = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { open, width = 'auto', maxHeight = 300, onClose, children, ...otherProps } = props

	useKeyPress('Escape', () => onClose?.())

	return (
		<StyledMenu
			ref={ref}
			open={open}
			$width={parseSize(width)}
			$maxHeight={parseSize(maxHeight)}
			onClick={e => e.stopPropagation()}
			onClose={onClose}
			{...otherProps}>
			<FocusTrap>
				<div>{children}</div>
			</FocusTrap>
		</StyledMenu>
	)
})

Menu.displayName = 'Menu'
export default Menu
