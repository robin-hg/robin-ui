import type { Meta } from '@storybook/react'
import { colors } from '@robin-ui/theme'
import { sxc } from '@robin-ui/styles'

import { Grid, Stack } from './'

export default {
	title: 'Colors/Colors'
} as Meta

const Colors = () => (
	<Stack spacing="md">
		{Object.entries(colors).map(([colorName, palette]) => (
			<div key={colorName}>
				<sxc.h3 sx={{ textTransform: 'capitalize' }}>{colorName}</sxc.h3>
				<sxc.div sx={{ height: '0.4rem', background: palette[50] }} />
				<Grid columns={10} spacing="xs">
					{Object.entries(palette).map(([i, shade]) => (
						<sxc.div
							key={i}
							sx={{
								height: '5rem',
								width: '100%',
								background: shade
							}}
						/>
					))}
				</Grid>
			</div>
		))}
	</Stack>
)

export const Default = () => <Colors />
