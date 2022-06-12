export interface Props {
	wrap?: boolean
	wrapper: (children: React.ReactNode) => React.ReactNode
	children?: React.ReactNode
}

export const ConditionalWrapper: React.FC<Props> = props => {
	const { wrap, wrapper, children } = props

	return <>{wrap ? wrapper(children) : children}</>
}

ConditionalWrapper.displayName = 'ConditionalWrapper'
