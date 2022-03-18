export const wait = (ms: number) => new Promise(resolve => window.setTimeout(resolve, ms))

export const parseSize = (value: number | string) => (typeof value === 'number' ? `${value}px` : value)

export const roundFloat = (value: number, fractionDigits: number) => parseFloat(value.toFixed(fractionDigits))

export const get = <T>(obj: any, path: string | (number | string)[], defaultValue?: T) => {
	const keys = typeof path === 'string' ? path.split('.') : path
	const value: T = keys.reduce((acc, key) => acc?.[key], obj)
	return value || defaultValue
}

export const handleEnter =
	<T extends Element>(onEnter: () => void) =>
	(event: React.KeyboardEvent<T>) => {
		event.stopPropagation()
		event.preventDefault()
		if (event.key === 'Enter') {
			onEnter()
		}
	}
