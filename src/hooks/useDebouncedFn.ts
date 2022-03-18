import { useRef } from 'react'

const useDebouncedFn = <T extends (...args: any[]) => void>(fn: T, timeout = 500, invokeImmediately?: boolean) => {
	const timer = useRef<number>()

	const reset = () => {
		window.clearTimeout(timer.current)
	}

	function debouncedFn(this: ThisParameterType<T>, ...args: Parameters<T>) {
		const invokeNow = invokeImmediately && !timer.current
		reset()
		timer.current = window.setTimeout(() => {
			timer.current = undefined
			if (!invokeNow) {
				fn.apply(this, args)
			}
		}, timeout)

		if (invokeNow) {
			fn.apply(this, args)
		}
	}

	debouncedFn.cancel = reset
	return debouncedFn
}

export default useDebouncedFn
