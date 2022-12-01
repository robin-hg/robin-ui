import { act, fireEvent, render, screen, waitFor } from '@robin-ui/test-utils'

import { Tooltip } from './Tooltip'

describe('Tooltip', () => {
  it('should display on hover', async () => {
    render(
      <Tooltip label="Tooltip">
        <div>Trigger</div>
      </Tooltip>
    )
    const trigger = screen.getByText('Trigger')

    act(() => {
      fireEvent.pointerEnter(trigger)
    })

    await waitFor(() => expect(screen.getByText('Tooltip')).toHaveTextContent('Tooltip'))
  })
})
