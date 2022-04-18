import { useColorScheme } from '../useColorScheme'
import { useLocalStorage } from '../useLocalStorage'

type ColorMode = 'light' | 'dark' | 'system'

export const useColorMode = (initialMode: ColorMode = 'light'): ['light' | 'dark', (mode: ColorMode) => void] => {
	const [sessionMode, setMode] = useLocalStorage('rui-colorMode', initialMode)
	const preferredMode = useColorScheme()
	return [sessionMode === 'system' ? preferredMode : sessionMode || 'light', setMode]
}
