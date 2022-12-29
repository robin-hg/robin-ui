import { useEffect, useLayoutEffect } from 'react'

import { isBrowser } from '@robin-ui/utils'

export const useIsomorphicLayoutEffect = isBrowser() ? useLayoutEffect : useEffect
