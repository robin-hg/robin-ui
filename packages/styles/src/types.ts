/* eslint-disable @typescript-eslint/no-explicit-any */
import type { StyledComponent } from '@emotion/styled'
import type { Theme, Interpolation, CSSObject } from '@emotion/react'

type SXStyle = CSSObject & {
	_sx?: CSSObject
	_sm?: CSSObject
	_md?: CSSObject
	_lg?: CSSObject
	_xl?: CSSObject
}

type SXItem = SXStyle | ((theme: Theme) => SXStyle)
export type SX = SXItem | SXItem[]

export interface StyledOptions {
	label?: string
	shouldForwardProp?: (key: string) => boolean
}

export { Theme }
export interface StyleProps {
	theme: Theme
	sx?: SX
}

interface CreateStyledComponent<
	ComponentProps extends Record<string, any> = Record<string, unknown>,
	SpecificComponentProps extends Record<string, any> = Record<string, unknown>,
	JSXProps extends Record<string, any> = Record<string, unknown>
> {
	<AdditionalProps extends Record<string, any>>(
		...styles: Interpolation<AdditionalProps & ComponentProps & StyleProps>[]
	): StyledComponent<ComponentProps & AdditionalProps, SpecificComponentProps, JSXProps>
}

export interface BaseCreateStyled {
	<C extends React.ComponentType>(component: C, options?: StyledOptions): CreateStyledComponent<
		React.ComponentProps<C> & { sx?: SX }
	>

	<Tag extends keyof JSX.IntrinsicElements>(
		component: Tag,
		options?: StyledOptions
	): CreateStyledComponent<{ sx?: SX; as?: React.ElementType }, JSX.IntrinsicElements[Tag]>
}

export type StyledTags = {
	[Tag in keyof JSX.IntrinsicElements]: CreateStyledComponent<
		{ sx?: SX; as?: React.ElementType },
		JSX.IntrinsicElements[Tag]
	>
}

export interface CreateStyled extends BaseCreateStyled, StyledTags {}

export type SXComponents = {
	[Tag in keyof JSX.IntrinsicElements]: StyledComponent<
		{ sx?: SX; as?: React.ElementType },
		JSX.IntrinsicElements[Tag]
	>
}
