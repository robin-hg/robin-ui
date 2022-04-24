import type { Story, Meta } from '@storybook/react'
import { useArgs } from '@storybook/client-api'

import { Modal, type Props } from './Modal'
import { ModalHeader } from '../ModalHeader'
import { ModalContent } from '../ModalContent'
import { ModalFooter } from '../ModalFooter'
import { Button } from '../Button'

export default {
	title: 'Display/Modal',
	component: Modal,
	subcomponents: { ModalHeader, ModalContent, ModalFooter }
} as Meta<Props>

const Template: Story<Props> = args => {
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
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum suscipit rutrum. Vivamus
					tristique quis risus nec sodales. Mauris vel nulla ut ex dictum posuere. Cras ut ligula sit amet
					tortor consequat scelerisque. Duis id neque ut sem finibus placerat mattis vel quam. Integer neque
					leo, porta in sem ac, laoreet rhoncus nunc. Donec at velit semper, aliquam quam sed, lobortis massa.
					Suspendisse quis tempus neque, ut finibus lacus. Duis semper imperdiet ex non ultricies. Integer
					iaculis metus risus, non molestie est imperdiet et. Pellentesque hendrerit nec metus non varius.
					Nullam rutrum viverra velit, ut feugiat urna convallis ut. Mauris blandit justo mi, ac lobortis eros
					tempor sed. Curabitur eget dui nibh. Mauris faucibus porta mauris a tempor. Ut eu orci molestie,
					egestas urna eget, aliquet ante. Nunc id lacus non neque pharetra ultricies. Nullam lobortis est
					quam, eu vehicula velit finibus vitae. Sed suscipit enim mauris, nec scelerisque neque dictum vel.
					Donec nec sagittis mi, eu sodales quam. In rhoncus nisl nec tellus semper, eget dignissim justo
					cursus. In non magna odio. Mauris blandit ante nec porta dapibus. Phasellus lacinia risus velit,
					quis convallis erat hendrerit sit amet. Duis vel elit elit. Sed a turpis et nisl blandit iaculis a
					ac justo. Morbi hendrerit augue augue, ac fringilla mauris ultrices non. Lorem ipsum dolor sit amet,
					consectetur adipiscing elit. Praesent placerat felis arcu, id porta massa tempor et. Donec suscipit
					elementum risus sed pharetra. Cras fringilla, massa eu cursus porttitor, justo est imperdiet ipsum,
					nec convallis diam justo vitae nisl. Integer posuere euismod dolor non faucibus. Class aptent taciti
					sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec congue, nisl ut
					pellentesque volutpat, nisi enim vehicula elit, accumsan sodales orci erat euismod eros. Orci varius
					natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ac lectus vitae
					tellus feugiat efficitur. Aliquam mollis, quam ultricies malesuada mollis, est tellus tincidunt
					metus, nec suscipit neque arcu ut augue. Praesent tempus metus quis lorem convallis, nec egestas
					eros egestas. Etiam ultricies eleifend ornare. Phasellus egestas magna odio. Vivamus malesuada
					consequat est tristique maximus. Vivamus suscipit vehicula ipsum, at auctor nulla tempus sed. Cras
					iaculis neque nec vestibulum commodo. Duis ac consectetur nulla. Praesent auctor ultrices erat quis
					sodales. Quisque quis ex odio. Nam sed nisi nibh. In dictum sapien ullamcorper convallis rutrum.
					Donec quis eleifend urna. Sed molestie lacus vel velit porta, sed molestie lacus dignissim. Mauris
					justo velit, euismod ut sapien id, vehicula scelerisque felis.
				</ModalContent>
				<ModalFooter>
					<Button>Submit</Button>
				</ModalFooter>
			</Modal>
		</>
	)
}
export const Default = Template.bind({})
