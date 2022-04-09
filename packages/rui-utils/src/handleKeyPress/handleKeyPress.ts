export const handleKeyPress =
	<T extends HTMLElement>(key: string, handler: (event: React.KeyboardEvent<T>) => void) =>
	(event: React.KeyboardEvent<T>) => {
		if (event.key === key) {
			event.stopPropagation()
			event.preventDefault()
			handler(event)
		}
	}
