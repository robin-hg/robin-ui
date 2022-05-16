export const clampNumber = (value: number, min?: number, max?: number) => {
	let number = value
	if (min && min > number) {
		number = min
	}
	if (max && max < number) {
		number = max
	}
	return number
}
