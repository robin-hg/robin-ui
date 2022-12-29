import type { Meta, StoryFn } from '@storybook/react'

import { TableCaption } from '../TableCaption'
import { Td, Th } from '../TableCell'
import { Tr } from '../TableRow'
import { Tbody, Tfoot, Thead } from '../TableSection'

import { type Props, Table } from './Table'

export default {
  title: 'Display/Table',
  component: Table,
  args: {
    align: 'left'
  }
} satisfies Meta<Props>

export const Default: StoryFn<Props> = args => (
  <Table {...args}>
    <Thead>
      <Tr>
        <Th>Atomic Number</Th>
        <Th>Symbol</Th>
        <Th>Element Name</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>1</Td>
        <Td>H</Td>
        <Td>Hydrogen</Td>
      </Tr>
      <Tr>
        <Td>2</Td>
        <Td>He</Td>
        <Td>Helium</Td>
      </Tr>
      <Tr>
        <Td>3</Td>
        <Td>Li</Td>
        <Td>Lithium</Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>Atomic Number</Th>
        <Th>Symbol</Th>
        <Th>Element</Th>
      </Tr>
    </Tfoot>
    <TableCaption align="center">First three elements of the periodic table</TableCaption>
  </Table>
)
