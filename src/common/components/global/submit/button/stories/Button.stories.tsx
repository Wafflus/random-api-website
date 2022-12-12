import { AiFillInfoCircle } from 'react-icons/ai';
import { Button } from '..';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const WithBoth = Template.bind({});
export const WithoutIcon = Template.bind({});
export const WithoutText = Template.bind({});
export const WithoutBoth = Template.bind({});

WithBoth.args = {
  icon: <AiFillInfoCircle />,
  iconAtLeftSide: true,
  text: 'Button',
};

WithoutIcon.args = {
  text: 'Button'
};

WithoutText.args = {
  icon: <AiFillInfoCircle />
};

WithoutBoth.args = {
};