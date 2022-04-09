import type { StyledComponent, Interpolation, CSSObject } from '@emotion/styled'
import type { Theme } from '@emotion/react'

type SXStyle<P extends Record<string, any>> = CSSObject | ((props: P) => CSSObject)

export type SX = SXStyle<Theme> | (SXStyle<Theme> | null | undefined | false)[]

export interface StyledOptions {
	label?: string
	shouldForwardProp?: (key: string) => boolean
}

export interface DefaultProps {
	theme: Theme
	sx?: SX
}

interface CreateStyledComponent<
	ComponentProps extends Record<string, any> = Record<string, any>,
	SpecificComponentProps extends Record<string, any> = Record<string, any>,
	JSXProps extends Record<string, any> = Record<string, any>
> {
	<AdditionalProps extends Record<string, any>>(
		...styles: Interpolation<AdditionalProps & ComponentProps & DefaultProps>[]
	): StyledComponent<ComponentProps & AdditionalProps, SpecificComponentProps, JSXProps>
}

export interface BaseCreateStyled {
	<C extends React.ComponentType>(component: C, options?: StyledOptions): CreateStyledComponent<
		React.ComponentProps<C> & { sx?: SX }
	>

	<Tag extends keyof JSX.IntrinsicElements>(component: Tag, options?: StyledOptions): CreateStyledComponent<
		{ sx?: SX; as?: React.ElementType },
		JSX.IntrinsicElements[Tag]
	>
}

export type StyledTags = {
	[Tag in keyof JSX.IntrinsicElements]: CreateStyledComponent<
		{
			sx?: SX
			as?: React.ElementType
		},
		JSX.IntrinsicElements[Tag]
	>
}

export interface CreateStyled extends BaseCreateStyled, StyledTags {}

export type SXComponents = {
	[Tag in keyof JSX.IntrinsicElements]: StyledComponent<{ sx?: SX }, JSX.IntrinsicElements[Tag]>
}
