import { useEffect } from 'react'

export const useLockWindowScroll = (lock: boolean) => {
  useEffect(() => {
    document.body.style.overflow = lock ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [lock])
}
