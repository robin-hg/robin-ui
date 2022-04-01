import React, { useState } from 'react'

export const ModalManagerContext = React.createContext<{
	topModal?: string
	addModal?: (id: string) => void
	removeModal?: (id: string) => void
}>({})

interface ModalManagerProps {}

const ModalManager: React.FC<ModalManagerProps> = props => {
	const { children } = props
	const [modalList, setModalList] = useState<string[]>([])

	const addModal = (id: string) => {
		setModalList([...modalList, id])
	}

	const removeModal = (id: string) => {
		setModalList(modalList.filter(i => i !== id))
	}

	const topModal = modalList.slice(-1)[0]

	return (
		<ModalManagerContext.Provider value={{ topModal, addModal, removeModal }}>
			{children}
		</ModalManagerContext.Provider>
	)
}

export default ModalManager
