import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Range } from '..';
import React from 'react';

export default {
  title: 'Components/Range',
  component: Range,
} as ComponentMeta<typeof Range>;

const Template: ComponentStory<typeof Range> = (args) => <Range {...args} />;

export const Normal = Template.bind({});

Normal.args = {
  maximumValue: 10,
  minimumValue: 1,
  value: 1,
};