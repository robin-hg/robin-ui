import { useEffect, useState } from 'react'

export const useOnScreen = (element: HTMLElement | null, options: IntersectionObserverInit) => {
  const { root, rootMargin = '0px', threshold = 0 } = options
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      {
        root,
        rootMargin,
        threshold
      }
    )
    if (element) {
      observer.observe(element)
      return () => {
        observer.unobserve(element)
      }
    }
  }, [element, rootMargin])

  return isIntersecting
}
