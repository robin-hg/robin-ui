import { isBrowser } from '@robin-ui/utils'
import { useEffect, useLayoutEffect } from 'react'

export const useIsomorphicLayoutEffect = isBrowser() ? useLayoutEffect : useEffect
