import { useEffect, useLayoutEffect } from 'react'

export const useIsomorphicLayoutEffect = window ? useLayoutEffect : useEffect
