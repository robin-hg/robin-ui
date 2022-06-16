import { renderHook } from '@robin-ui/test-utils'

import { useTraceUpdate } from './useTraceUpdate'

describe('useTraceUpdate', () => {
	it('should output changed props', () => {
		const { result, rerender } = renderHook(props => useTraceUpdate(props), {
			initialProps: { count1: 1, count2: 1 }
		})

		rerender({ count1: 1, count2: 1 })
		expect(result.current).toEqual({})

		rerender({ count1: 2, count2: 1 })
		expect(result.current).toEqual({ count1: { prev: 1, value: 2 } })
	})
})
