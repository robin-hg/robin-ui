import React from 'react'
import { StyledLink } from './Link.style'

export interface Props extends RobinUI.StandardProps<HTMLAnchorElement> {
	/**
	 * Link color.
	 * @default primary
	 */
	color?: string
	/**
	 * Underline behavior.
	 * @default hover
	 */
	underline?: 'always' | 'hover' | 'none'
	component?: keyof JSX.IntrinsicElements | React.ComponentType<any>
}

const Link = React.forwardRef<HTMLAnchorElement, Props>((props, ref) => {
	const {
		component,
		color = 'primary',
		underline = 'hover',
		href,
		disabled,
		onClick,
		children,
		...otherProps
	} = props

	return (
		<StyledLink
			ref={ref}
			as={component}
			$color={color}
			$underline={underline}
			href={disabled ? undefined : href}
			onClick={event => {
				if (disabled) {
					event.preventDefault()
					return
				}
				onClick?.(event)
			}}
			disabled={disabled}
			tabIndex={disabled ? -1 : 0}
			{...otherProps}>
			{children}
		</StyledLink>
	)
})

Link.displayName = 'Link'
export default Link
