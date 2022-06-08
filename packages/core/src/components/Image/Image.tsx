import type { DefaultProps, SizeValue } from '@robin-ui/types'
import React, { useState } from 'react'

import { Spinner } from '../Spinner'
import { Image as ImageIcon } from '@robin-ui/icons'

import { ImageContainer, Placeholder } from './Image.style'

export interface Props extends DefaultProps<HTMLDivElement> {
	src?: string
	alt?: string
	lazy?: boolean
	loadingFallback?: React.ReactNode
	errorFallback?: React.ReactNode
	height?: number | string
	width?: number | string
	fit?: React.CSSProperties['objectFit']
	radius?: SizeValue
}

export const Image = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const {
		src,
		alt = 'Image',
		fit = 'cover',
		lazy,
		loadingFallback,
		errorFallback,
		height = 'auto',
		width = '100%',
		radius = 'md',
		...otherProps
	} = props
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)

	return (
		<ImageContainer
			ref={ref}
			$radius={radius}
			$fit={fit}
			$height={height}
			$width={width}
			{...otherProps}>
			<Placeholder in={loading || error} unmountOnExit>
				{error
					? errorFallback ?? <ImageIcon color="surface.onVariant" size="lg" />
					: loadingFallback ?? <Spinner color="surface.onVariant" size="lg" />}
			</Placeholder>
			<img
				src={src}
				alt={alt}
				loading={lazy ? 'lazy' : 'eager'}
				onLoad={() => setLoading(false)}
				onError={() => setError(true)}
			/>
		</ImageContainer>
	)
})

Image.displayName = 'Image'
