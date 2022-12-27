import { get } from '@robin-ui/utils'

import type { Size, SizeValue } from '../../types'

export const getSize = (
  size: SizeValue,
  object: Partial<Record<Size, string | number>>,
  fallback?: string | number
) => {
  const value = get<string | undefined>(object, [size])
  return value ?? fallback ?? size
}
