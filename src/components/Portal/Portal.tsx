import ReactDOM from 'react-dom'

export interface Props {
	/**
	 * Content is inside the specified target.
	 * @default document.body
	 */
	target?: HTMLElement
}

const Portal: React.FC<Props> = props => {
	const { children, target } = props

	if (!document) {
		return null
	}

	return ReactDOM.createPortal(children, target || document.body)
}

export default Portal
