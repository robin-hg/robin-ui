import type { DefaultProps, SizeValue } from '@rui/types'
import React from 'react'

import { AlertContainer, AlertTitle } from './Alert.style'
import { AlertCircle, AlertTriangle, CheckCircle, Info } from '@rui/icons'
import { Label } from '../Typography'

const statusIcon = {
	none: null,
	success: <CheckCircle />,
	info: <Info />,
	warning: <AlertTriangle />,
	critical: <AlertCircle />
}

export interface Props extends DefaultProps<HTMLDivElement, 'title'> {
	status?: 'none' | 'success' | 'info' | 'warning' | 'critical'
	variant?: 'flat' | 'outlined'
	icon?: React.ReactNode
	title?: React.ReactNode
	padding?: SizeValue | SizeValue[]
	radius?: SizeValue
}

export const Alert = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { status = 'critical', variant = 'flat', radius = 'md', title, children, ...otherProps } = props

	const icon = statusIcon[status]

	return (
		<AlertContainer
			ref={ref}
			role="alert"
			variant="flat"
			radius={radius}
			$color={status}
			$variant={variant}
			{...otherProps}>
			<AlertTitle>
				{icon}
				{title && <Label size="xl">{title}</Label>}
			</AlertTitle>
			{children}
		</AlertContainer>
	)
})

Alert.displayName = 'Alert'
