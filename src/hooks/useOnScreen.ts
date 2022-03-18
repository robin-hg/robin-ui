import { useEffect, useState } from 'react'

const useOnScreen = (element: Element | null, rootMargin = '0px') => {
	const [isIntersecting, setIsIntersecting] = useState(false)

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => setIsIntersecting(entry.isIntersecting), { rootMargin })
		if (element) {
			observer.observe(element)
		}
		return () => {
			if (element) {
				observer.unobserve(element)
			}
		}
	}, [element, rootMargin])

	return isIntersecting
}

export default useOnScreen
