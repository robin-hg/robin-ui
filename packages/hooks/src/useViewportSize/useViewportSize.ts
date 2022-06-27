import { startTransition, useState } from 'react'
import { useEventListener } from '../useEventListener'

export const useViewportSize = () => {
  const [size, setSize] = useState({
    width: innerWidth ?? 0,
    height: innerHeight ?? 0
  })

  const updateSize = () =>
    startTransition(() =>
      setSize({
        width: innerWidth ?? 0,
        height: innerHeight ?? 0
      })
    )

  useEventListener('resize', updateSize)
  useEventListener('orientationchange', updateSize)

  return size
}
