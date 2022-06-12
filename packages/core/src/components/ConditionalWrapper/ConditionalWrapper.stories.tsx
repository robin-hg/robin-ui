import type { Story, Meta } from '@storybook/react'
import { useArgs } from '@storybook/client-api'

import { ConditionalWrapper, type Props } from './ConditionalWrapper'
import { Switch } from '../Switch'
import { Paper } from '../Paper'

export default {
	title: 'Utils/ConditionalWrapper',
	component: ConditionalWrapper,
	args: {
		wrap: true
	}
} as Meta<Props>

export const Default: Story<Props> = args => {
	const [, updateArgs] = useArgs()
	return (
		<>
			<Switch
				label="Toggle"
				checked={args.wrap}
				onChange={event => updateArgs({ wrap: event.target.checked })}
			/>
			<div>
				<ConditionalWrapper
					wrap={args.wrap}
					wrapper={children => <Paper>{children}</Paper>}>
					Content
				</ConditionalWrapper>
			</div>
		</>
	)
}
