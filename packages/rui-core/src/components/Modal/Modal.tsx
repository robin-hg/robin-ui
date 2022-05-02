import type { DefaultProps, Size } from '@rui/types'
import React, { useMemo, useRef, useState } from 'react'
import { useCombinedRef, useId } from '@rui/hooks'

import { Fade } from '../Transition'
import { FocusTrap } from '../FocusTrap'
import { Portal } from '../Portal'

import { Backdrop, ModalContainer, ModalPaper } from './Modal.style'

export const ModalContext = React.createContext<{
	id?: string
	contentId?: string
	modalEl?: HTMLDivElement | null
	onClose?: () => void
	setPreventClose?: (state: boolean) => void
}>({})

export interface Props extends DefaultProps<HTMLDivElement, 'size'> {
	size?: Size | 'full'
	open?: boolean
	onClose?: () => void
}

export const Modal = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { size = 'md', open, onClose, onClick, children, ...otherProps } = props
	const [preventClose, setPreventClose] = useState(false)
	const modalRef = useRef<HTMLDivElement>(null)
	const combinedRef = useCombinedRef(ref, modalRef)
	const id = useId()

	const close = !preventClose ? onClose : undefined
	const ctxValue = useMemo(
		() => ({
			id,
			contentId: `${id}-content`,
			modalEl: modalRef.current,
			setPreventClose,
			onClose: close
		}),
		[id, modalRef, preventClose, onClose]
	)

	return (
		<Portal>
			<ModalContext.Provider value={ctxValue}>
				<Fade in={open} unmountOnExit>
					<Backdrop />
					<ModalContainer
						tabIndex={-1}
						onClick={close}
						onKeyDown={event => {
							if (event.key === 'Escape') {
								event.stopPropagation()
								close?.()
							}
						}}>
						<FocusTrap autofocus restoreFocus>
							<ModalPaper
								ref={combinedRef}
								role="dialog"
								aria-modal="true"
								aria-labelledby={id}
								aria-describedby={`${id}-content`}
								$size={size}
								onClick={event => {
									event.stopPropagation()
									onClick?.(event)
								}}
								{...otherProps}>
								{children}
							</ModalPaper>
						</FocusTrap>
					</ModalContainer>
				</Fade>
			</ModalContext.Provider>
		</Portal>
	)
})

Modal.displayName = 'Modal'
