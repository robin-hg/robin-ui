import { useState } from 'react'

export const useUncontrolled = <P>(
	defaultValue: P,
	controlledValue?: P
): [P, (value: P) => void] => {
	const [uncontrolled, setUncontrolled] = useState(defaultValue)
	const isUncontrolled = controlledValue === undefined
	const _value = isUncontrolled ? uncontrolled : controlledValue

	const updateUncontrolled = (value: P) => {
		if (isUncontrolled) {
			setUncontrolled(value)
		}
	}

	return [_value, updateUncontrolled]
}
