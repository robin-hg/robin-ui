import ReactDOM from 'react-dom'
import { useForceUpdate, useIsomorphicLayoutEffect } from '@rui/hooks'

export interface Props {
	/**
	 * Content is inside the specified target.
	 * @default document.body
	 */
	targetRef?: React.RefObject<HTMLElement>
}

export const Portal: React.FC<Props> = props => {
	const { children, targetRef } = props
	const target = targetRef?.current || document?.body
	const forceUpdate = useForceUpdate()

	useIsomorphicLayoutEffect(() => {
		forceUpdate()
	}, [])

	return target ? ReactDOM.createPortal(children, target) : null
}
