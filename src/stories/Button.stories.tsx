import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from '../components/Button'

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {}

export const Outline = Template.bind({})
Outline.args = {
  variant: 'outline',
}

export const Text = Template.bind({})
Text.args = {
  variant: 'text',
}

export const Small = Template.bind({})
Small.args = {
  size: 'sm',
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'md',
}

export const Large = Template.bind({})
Large.args = {
  size: 'lg',
}

export const StartIcon = Template.bind({})
StartIcon.args = {
  startIcon: 'local_grocery_store',
}

export const EndIcon = Template.bind({})
EndIcon.args = {
  endIcon: 'local_grocery_store',
}

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary',
}

export const Danger = Template.bind({})
Danger.args = {
  color: 'danger',
}
