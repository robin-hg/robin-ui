import type { Meta, StoryFn } from '@storybook/react'
import { useArgs } from '@storybook/client-api'

import { ModalHeader } from '../ModalHeader'
import { ModalContent } from '../ModalContent'
import { ModalFooter } from '../ModalFooter'
import { Button } from '../Button'

import { Modal, type Props } from './Modal'

export default {
  title: 'Overlay/Modal',
  component: Modal,
  args: {
    size: 'md'
  },
  argTypes: {
    size: { control: { type: 'radio' }, options: ['xs', 'sm', 'md', 'lg', 'xl'] }
  }
} satisfies Meta<Props>

export const Default: StoryFn<Props> = args => {
  const [, updateArgs] = useArgs()
  return (
    <>
      <Button onClick={() => updateArgs({ open: true })}>Open Modal</Button>
      <Modal
        {...args}
        onClose={() => {
          args.onClose?.()
          updateArgs({ open: false })
        }}>
        <ModalHeader>Title</ModalHeader>
        <ModalContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum suscipit rutrum.
          Vivamus tristique quis risus nec sodales. Mauris vel nulla ut ex dictum posuere. Cras ut
          ligula sit amet tortor consequat scelerisque. Duis id neque ut sem finibus placerat mattis
          vel quam. Integer neque leo, porta in sem ac, laoreet rhoncus nunc. Donec at velit semper,
          aliquam quam sed, lobortis massa. Suspendisse quis tempus neque, ut finibus lacus. Duis
          semper imperdiet ex non ultricies. Integer iaculis metus risus, non molestie est imperdiet
          et. Pellentesque hendrerit nec metus non varius. Nullam rutrum viverra velit, ut feugiat
          urna convallis ut. Mauris blandit justo mi, ac lobortis eros tempor sed. Curabitur eget
          dui nibh. Mauris faucibus porta mauris a tempor. Ut eu orci molestie, egestas urna eget,
          aliquet ante. Nunc id lacus non neque pharetra ultricies. Nullam lobortis est quam, eu
          vehicula velit finibus vitae. Sed suscipit enim mauris, nec scelerisque neque dictum vel.
        </ModalContent>
        <ModalFooter>
          <Button>Submit</Button>
        </ModalFooter>
      </Modal>
    </>
  )
}
