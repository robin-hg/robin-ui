export const wait = (ms: number) => new Promise(resolve => window.setTimeout(resolve, ms))

export const parseSize = (value: number | string) => (typeof value === 'number' ? `${value}px` : value)

export const get = <T>(obj: any, path: string | (number | string)[], defaultValue?: T) => {
	const keys = typeof path === 'string' ? path.split('.') : path
	const value: T = keys.reduce((acc, key) => acc?.[key], obj)
	return value || defaultValue
}

export const handleEnter =
	<T extends HTMLElement>(onEnter: () => void) =>
	(event: React.KeyboardEvent<T>) => {
		if (event.key === 'Enter') {
			event.stopPropagation()
			event.preventDefault()
			onEnter()
		}
	}

export const getFocusable = (node?: HTMLElement | null) => {
	if (!node) {
		return []
	}
	const elements = [
		...node.querySelectorAll('a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])')
	] as HTMLElement[]
	return elements.filter(
		element =>
			!element.hasAttribute('disabled') &&
			!element.getAttribute('aria-hidden') &&
			!parseInt(element.getAttribute('tabindex') || '', 10) &&
			element.style.display !== 'none'
	)
}
