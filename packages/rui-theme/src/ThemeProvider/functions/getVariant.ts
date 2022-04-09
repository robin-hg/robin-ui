import type { CSSObject } from '@emotion/react'

export const getVariant = <V extends string>(obj: Record<V, CSSObject>, variant: V) => {
	return obj[variant]
}
