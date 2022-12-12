import { Checkbox } from '@components/random-pictures';
import { CheckboxGroup } from '..';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

export default {
  title: 'Components/Checkbox Group',
  component: CheckboxGroup,
} as ComponentMeta<typeof CheckboxGroup>;

const Template: ComponentStory<typeof CheckboxGroup> = (args) => <CheckboxGroup {...args} />;

const children = [
  <Checkbox optionData={{ id: 'one', title: 'One', apiUrl: 'https://www.example.com' }} />,
  <Checkbox optionData={{ id: 'two', title: 'Two', apiUrl: 'https://www.example.com' }} />,
  <Checkbox optionData={{ id: 'three', title: 'Three', apiUrl: 'https://www.example.com' }} />
];

export const Normal = Template.bind({});

Normal.args = {
  children,
};