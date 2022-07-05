import { useColorScheme } from '../useColorScheme'
import { useLocalStorage } from '../useLocalStorage'

type ColorMode = 'light' | 'dark' | 'system'

export const useColorMode = (
  initialMode: ColorMode = 'system'
): ['light' | 'dark', (mode: ColorMode) => void] => {
  const [storedMode, setMode] = useLocalStorage('robin-colorMode', initialMode)
  const preferredMode = useColorScheme()
  return [storedMode === 'system' ? preferredMode : storedMode || 'light', setMode]
}
