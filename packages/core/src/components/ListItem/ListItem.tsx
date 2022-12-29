import type { DefaultProps } from '@robin-ui/types'
import { forwardRef, useContext } from 'react'

import { ListContext } from '../List'

import { Content, Marker } from './ListItem.style'

export interface Props extends DefaultProps<HTMLLIElement> {
  marker?: React.ReactElement
}

export const ListItem = forwardRef<HTMLLIElement, Props>((props, ref) => {
  const { marker, children, ...otherProps } = props
  const { marker: listMarker } = useContext(ListContext)

  const itemMarker = marker ?? listMarker

  return (
    <li ref={ref} {...otherProps}>
      <Content>
        {itemMarker && <Marker>{itemMarker}</Marker>}
        {children}
      </Content>
    </li>
  )
})

ListItem.displayName = 'ListItem'
