import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RadioButton } from '@components/random-pictures';
import { RadioGroup } from '..';
import React, { ReactElement } from 'react';

export default {
  title: 'Components/Radio Group',
  component: RadioGroup,
  argTypes: {
    activeItem: { options: ['One', 'Two', 'Three'], control: { type: 'radio' } },
    children: { table: { disable: true } }
  }
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = (args) => <RadioGroup {...args} />;

const children: ReactElement[] = [
    <RadioButton label='One' value='One' />,
    <RadioButton label='Two' value='Two' />,
    <RadioButton label='Three' value='Three' />
];

export const Checked = Template.bind({});
export const Unchecked = Template.bind({});

Checked.args = {
  children,
  activeItem: 'One',
  groupName: 'radioGroupChecked',
};

Unchecked.args = {
    children,
    groupName: 'radioGroupUnchecked',
};