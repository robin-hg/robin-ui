import type { Meta } from '@storybook/react'
import { type ColorToken, colors } from '@robin-ui/theme'
import styled, { sxc } from '@robin-ui/styles'

import { Divider, Grid, Stack, Text } from './'

export default {
  title: 'Colors/Colors'
} as Meta

export const Default = () => (
  <Stack spacing="md">
    {Object.entries(colors).map(([colorName, palette]) => (
      <div key={colorName}>
        <Text size="xl" sx={{ textTransform: 'capitalize' }}>
          {colorName}
        </Text>
        <Divider spacing={0} color={palette[5]} thickness="md" />
        <Grid columns={10} spacing="xs">
          {Object.entries(palette).map(([i, shade]) => (
            <sxc.div
              key={i}
              sx={theme => ({
                height: '5rem',
                width: '100%',
                background: shade,
                color: theme.fn.getOnColor(shade)
              })}>
              {i}
            </sxc.div>
          ))}
        </Grid>
      </div>
    ))}
  </Stack>
)

interface PaletteBlockProps {
  color: ColorToken
  tinted?: boolean
}
const PaletteBlock = styled.div<PaletteBlockProps>(
  ({ theme, color }) => ({
    height: '5rem',
    background: theme.fn.getColor(color),
    color: theme.fn.getOnColor(color),
    padding: theme.fn.getSpacing(['xs', 'sm']),
    fontWeight: 'bold'
  }),
  ({ theme, color, tinted }) =>
    tinted && {
      background: theme.fn.getMixedColor(color, 'primary', 'surfaceTint')
    }
)

export const Palette = () => (
  <Stack spacing="xl">
    <div>
      <Text size="xl">Base</Text>
      <Grid columns={2} spacing={['xs', 0]}>
        <PaletteBlock color="primary">Primary</PaletteBlock>
        <PaletteBlock color="primary.variant">Primary Variant</PaletteBlock>
        <PaletteBlock color="secondary">Secondary</PaletteBlock>
        <PaletteBlock color="secondary.variant">Secondary Variant</PaletteBlock>
      </Grid>
    </div>
    <div>
      <Text size="xl">Semantic</Text>
      <Grid columns={2} spacing={['xs', 0]}>
        <PaletteBlock color="critical">Critical</PaletteBlock>
        <PaletteBlock color="critical.variant">Critical Variant</PaletteBlock>
        <PaletteBlock color="warning">Warning</PaletteBlock>
        <PaletteBlock color="warning.variant">Warning Variant</PaletteBlock>
        <PaletteBlock color="success">Success</PaletteBlock>
        <PaletteBlock color="success.variant">Success Variant</PaletteBlock>
        <PaletteBlock color="info">Info</PaletteBlock>
        <PaletteBlock color="info.variant">Info Variant</PaletteBlock>
      </Grid>
    </div>
    <div>
      <Text size="xl">Neutral</Text>
      <Grid columns={2} spacing={['xs', 0]}>
        <PaletteBlock color="surface">Surface</PaletteBlock>
        <PaletteBlock color="surface.variant">Surface Variant</PaletteBlock>
        <PaletteBlock color="background">Background</PaletteBlock>
        <PaletteBlock color="outline">Outline</PaletteBlock>
      </Grid>
    </div>
    <div>
      <Text size="xl">Tinted Neutral</Text>
      <Grid columns={2} spacing={['xs', 0]}>
        <PaletteBlock tinted color="surface">
          Surface
        </PaletteBlock>
        <PaletteBlock tinted color="surface.variant">
          Surface Variant
        </PaletteBlock>
        <PaletteBlock tinted color="background">
          Background
        </PaletteBlock>
        <PaletteBlock tinted color="outline">
          Outline
        </PaletteBlock>
      </Grid>
    </div>
  </Stack>
)
