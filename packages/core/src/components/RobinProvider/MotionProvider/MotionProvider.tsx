import { useEffect, useState } from 'react'
import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion'
import { useReducedMotion, useTheme } from '@robin-ui/hooks'
import { camelCase } from '@robin-ui/utils'

interface Props {
  disabled?: boolean
  children?: React.ReactNode
}

// TODO: currently reducedMotion in MotionConfig is bugged, use hook for now
export const MotionProvider: React.FC<Props> = props => {
  const { disabled, children } = props
  const [fontLoaded, setFontLoaded] = useState(false)
  const { transition } = useTheme()
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (document.fonts) {
      document.fonts.onloadingdone = () => setFontLoaded(true)
    }
  }, [])

  if (disabled || !fontLoaded || reduceMotion) {
    return <>{children}</>
  }

  const { duration, ease = '' } = transition

  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig
        transition={{ duration: duration / 1000, ease: camelCase(ease) }}
        reducedMotion="user">
        {children}
      </MotionConfig>
    </LazyMotion>
  )
}
