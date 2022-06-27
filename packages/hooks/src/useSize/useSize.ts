import { startTransition, useEffect, useState } from 'react'
import { useForceUpdate } from '../useForceUpdate'
import { useIsomorphicLayoutEffect } from '../useIsomorphicLayoutEffect'

export const useSize = (element: HTMLElement | null) => {
  const [size, setSize] = useState<DOMRect>()
  useForceUpdate(true)

  const getSize = () =>
    startTransition(() => {
      const rect = element?.getBoundingClientRect()
      setSize(rect)
    })

  useIsomorphicLayoutEffect(getSize, [element])

  useEffect(() => {
    const observer = new ResizeObserver(getSize)
    if (element) {
      observer.observe(element)
      return () => {
        observer.unobserve(element)
      }
    }
  }, [element])

  return size
}
