import ReactDOM from 'react-dom'
import { useForceUpdate } from '@rui/hooks'

export interface Props {
	/**
	 * Content is inside the specified target.
	 * @default document.body
	 */
	target?: HTMLElement | null
	children?: React.ReactNode
}

export const Portal: React.FC<Props> = props => {
	const { children, target: targetEl } = props
	const target = targetEl || document?.body
	useForceUpdate(true)

	return target ? ReactDOM.createPortal(children, target) : null
}
