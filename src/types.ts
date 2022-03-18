declare global {
	namespace RobinUI {
		type StandardProps<C, Removals extends keyof React.HTMLProps<C> = never> = Omit<
			React.HTMLProps<C>,
			'as' | 'ref' | Removals
		>
	}
}

export {}
