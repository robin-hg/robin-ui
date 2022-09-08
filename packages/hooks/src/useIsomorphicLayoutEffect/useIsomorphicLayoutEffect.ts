import { isServer } from '@robin-ui/utils'
import { useEffect, useLayoutEffect } from 'react'

export const useIsomorphicLayoutEffect = !isServer ? useLayoutEffect : useEffect
