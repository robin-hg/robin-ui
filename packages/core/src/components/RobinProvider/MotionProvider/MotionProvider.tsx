import { useEffect, useState } from 'react'
import { LazyMotion, MotionConfig, domMax } from 'framer-motion'
import { useTransition } from '@robin-ui/hooks'

interface Props {
  children?: React.ReactNode
}

export const MotionProvider: React.FC<Props> = props => {
  const { children } = props
  const [fontLoaded, setFontLoaded] = useState(false)
  const transition = useTransition()

  useEffect(() => {
    if (document.fonts) {
      document.fonts.onloadingdone = () => setFontLoaded(true)
    }
  }, [])

  if (!fontLoaded) {
    return <>{children}</>
  }

  return (
    <LazyMotion features={domMax}>
      <MotionConfig transition={transition} reducedMotion="user">
        {children}
      </MotionConfig>
    </LazyMotion>
  )
}
