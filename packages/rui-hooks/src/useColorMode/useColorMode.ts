import type { ColorMode, DerrivedColorMode } from '@rui/theme'
import { useColorScheme } from '../useColorScheme'
import { useLocalStorage } from '../useLocalStorage'

export const useColorMode = (initialMode: ColorMode = 'light'): [DerrivedColorMode, (mode: ColorMode) => void] => {
	const [sessionMode, setMode] = useLocalStorage('rui-colorMode', initialMode)
	const preferredMode = useColorScheme()
	return [sessionMode === 'system' ? preferredMode : sessionMode || 'light', setMode]
}
