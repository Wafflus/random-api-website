import { Checkbox } from '..';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    options: { table: { disable: true } },
    setOptions: { table: { disable: true } }
  }
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Normal = Template.bind({});

Normal.args = {
  optionData: {
    apiUrl: 'https://www.example.com',
    id: 'exampleId',
    title: 'Example Checkbox',
  }
};