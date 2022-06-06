export const range = (start: number, end: number) => {
	return Array.from({ length: end - start + 1 }, (_, n) => n + start)
}
