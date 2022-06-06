import { useStorage } from '../useStorage'

export const useSessionStorage = <T>(key: string, initialValue?: T) => {
	return useStorage('session', key, initialValue)
}
