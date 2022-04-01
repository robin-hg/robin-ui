import type { Theme, PropsOf, CSSObject } from '@emotion/react'
import type { CreateStyledComponent, StyledOptions, StyledComponent } from '@emotion/styled'
import type { FilteringStyledOptions } from '@emotion/styled/types/base'
import React from 'react'

export interface ExtendedBaseCreateStyled {
	<
		C extends React.ComponentClass<React.ComponentProps<C>>,
		ForwardedProps extends keyof React.ComponentProps<C> = keyof React.ComponentProps<C>
	>(
		component: C,
		options: FilteringStyledOptions<React.ComponentProps<C>, ForwardedProps>
	): CreateStyledComponent<
		Pick<PropsOf<C>, ForwardedProps> & {
			theme?: Theme
			sx?: SX
		},
		Record<string, never>,
		{
			ref?: React.Ref<InstanceType<C>>
		}
	>

	<C extends React.ComponentClass<React.ComponentProps<C>>>(
		component: C,
		options?: StyledOptions<React.ComponentProps<C>>
	): CreateStyledComponent<
		PropsOf<C> & {
			theme?: Theme
			sx?: SX
		},
		Record<string, never>,
		{
			ref?: React.Ref<InstanceType<C>>
		}
	>

	<
		C extends React.ComponentType<React.ComponentProps<C>>,
		ForwardedProps extends keyof React.ComponentProps<C> = keyof React.ComponentProps<C>
	>(
		component: C,
		options: FilteringStyledOptions<React.ComponentProps<C>, ForwardedProps>
	): CreateStyledComponent<
		Pick<PropsOf<C>, ForwardedProps> & {
			theme?: Theme
			sx?: SX
		}
	>

	<C extends React.ComponentType<React.ComponentProps<C>>>(
		component: C,
		options?: StyledOptions<React.ComponentProps<C>>
	): CreateStyledComponent<
		PropsOf<C> & {
			theme?: Theme
			sx?: SX
		}
	>

	<
		Tag extends keyof JSX.IntrinsicElements,
		ForwardedProps extends keyof JSX.IntrinsicElements[Tag] = keyof JSX.IntrinsicElements[Tag]
	>(
		tag: Tag,
		options: FilteringStyledOptions<JSX.IntrinsicElements[Tag], ForwardedProps>
	): CreateStyledComponent<
		{ theme?: Theme; sx?: SX; as?: React.ElementType },
		Pick<JSX.IntrinsicElements[Tag], ForwardedProps>
	>

	<Tag extends keyof JSX.IntrinsicElements>(
		tag: Tag,
		options?: StyledOptions<JSX.IntrinsicElements[Tag]>
	): CreateStyledComponent<{ theme?: Theme; sx?: SX; as?: React.ElementType }, JSX.IntrinsicElements[Tag]>
}

type ExtendedStyledTags = {
	[Tag in keyof JSX.IntrinsicElements]: CreateStyledComponent<
		{ theme?: Theme; sx?: SX; as?: React.ElementType },
		JSX.IntrinsicElements[Tag]
	>
}
export interface ExtendedCreateStyled extends ExtendedBaseCreateStyled, ExtendedStyledTags {}

export type StyledBaseComponents = {
	[Tag in keyof JSX.IntrinsicElements]: StyledComponent<{ theme?: Theme; sx?: SX }, JSX.IntrinsicElements[Tag]>
}

export type SX = CSSObject | (CSSObject | null | undefined | boolean)[] | ((theme: Theme) => CSSObject)
