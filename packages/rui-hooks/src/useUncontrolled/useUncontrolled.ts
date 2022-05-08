import { useState } from 'react'

export const useUncontrolled = <P>(defaultValue: P, controlledValue?: P): [P, (newValue: P) => void] => {
	const [uncontrolled, setUncontrolled] = useState(defaultValue)
	const isUncontrolled = controlledValue === undefined
	const value = isUncontrolled ? uncontrolled : controlledValue

	const updateUncontrolled = (newValue: P) => {
		if (isUncontrolled) {
			setUncontrolled(newValue)
		}
	}

	return [value, updateUncontrolled]
}
