import useBreakpoint from './useBreakpoint'

type DeviceType = 'mobile' | 'tablet' | 'laptop' | 'desktop'

const useMediaDevice = (type: DeviceType | DeviceType[]) => {
	const breakpoint = useBreakpoint()

	const currentDevice = (() => {
		switch (breakpoint) {
			case 'sm':
				return 'mobile'
			case 'md':
				return 'tablet'
			case 'lg':
				return 'laptop'
			case 'xl':
				return 'desktop'
		}
	})()

	return typeof type === 'string' ? currentDevice === type : type.includes(currentDevice)
}

export default useMediaDevice
