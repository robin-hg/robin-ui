import ReactDOM from 'react-dom'
import { useForceUpdate } from '@rui/hooks'

export interface Props {
	/**
	 * Content is inside the specified target.
	 * @default document.body
	 */
	container?: HTMLElement | null
	children?: React.ReactNode
}

export const Portal: React.FC<Props> = props => {
	const { children, container: containerEl } = props
	const container = containerEl || document?.body
	useForceUpdate(true)

	return container ? ReactDOM.createPortal(children, container) : null
}
