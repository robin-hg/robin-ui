import type { Size } from '@rui/theme'
import styled from '@rui/styles'
import { IconButton } from '../IconButton'

export const StyledButton = styled(IconButton)(({ theme }) => ({
	padding: theme.spacing.sm
}))

const lineWidth = {
	xs: '0.1rem',
	sm: '0.1rem',
	md: '0.2rem',
	lg: '0.3rem',
	xl: '0.4rem'
}

interface LinesProp {
	$open: boolean
	$size: Size
}

export const Lines = styled.div<LinesProp>(
	({ theme, $size }) => ({
		position: 'relative',
		display: 'flex',
		alignItems: 'center',
		width: theme.fn.getSize($size, theme.size),
		height: theme.fn.getSize($size, theme.size),
		'& > span': {
			display: 'block',
			width: '100%',
			height: lineWidth[$size],
			background: 'currentColor',
			borderRadius: theme.radius.xl,
			transition: theme.fn.getTransition(),
			'&::before': {
				content: '""',
				position: 'absolute',
				top: `calc(${lineWidth[$size]} * 2)`,
				left: 0,
				width: '100%',
				height: lineWidth[$size],
				background: 'currentColor',
				borderRadius: theme.radius.xl,
				transformOrigin: 'center',
				transition: 'transform 100ms ease-out, top 100ms 100ms ease-out'
			},
			'&::after': {
				content: '""',
				position: 'absolute',
				bottom: `calc(${lineWidth[$size]} * 2)`,
				left: 0,
				width: '100%',
				height: lineWidth[$size],
				background: 'currentColor',
				borderRadius: theme.radius.xl,
				transformOrigin: 'center',
				transition: 'transform 100ms ease-out, bottom 100ms 100ms ease-out'
			}
		}
	}),
	({ $open }) =>
		$open && {
			'& > span': {
				background: 'transparent',
				'&::before': {
					top: '50%',
					transform: 'rotate(45deg) translateY(-50%)',
					transition: 'top 100ms ease-out, transform 100ms 100ms ease-out'
				},
				'&::after': {
					bottom: '50%',
					transform: `rotate(-45deg) translateY(50%)`,
					transition: 'bottom 100ms ease-out, transform 100ms 100ms ease-out'
				}
			}
		}
)
