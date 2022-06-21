import { useStorage } from '../useStorage'

export const useLocalStorage = <T>(key: string, initialValue?: T) => {
  return useStorage('local', key, initialValue)
}
