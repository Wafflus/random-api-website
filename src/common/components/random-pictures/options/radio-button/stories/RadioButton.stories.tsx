import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RadioButton } from '..';
import React from 'react';

export default {
  title: 'Components/Radio Button',
  component: RadioButton,
  argTypes: {
    activeItem: { table: { disable: true } },
    groupName: { table: { disable: true } },
    setActiveItem: { table: { disable: true } }
  }
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => <RadioButton {...args} />;

export const Checked = Template.bind({});
export const Unchecked = Template.bind({});

Checked.args = {
  activeItem: 'radio',
  label: 'Radio Button',
  value: 'radio',
};

Unchecked.args = {
  activeItem: 'other-radio',
  label: 'Radio Button',
  value: 'radio',
};