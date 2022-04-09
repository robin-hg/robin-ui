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
