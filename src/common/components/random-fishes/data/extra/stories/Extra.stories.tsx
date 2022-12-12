import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Extra } from '..';
import React from 'react';

export default {
  title: 'Components/Extra',
  component: Extra,
} as ComponentMeta<typeof Extra>;

const Template: ComponentStory<typeof Extra> = (args) => <Extra {...args} />;

export const Normal = Template.bind({});
export const Overflow = Template.bind({});

Normal.args = {
    children: <>Lorem ipsum dolor sit amet.</>
};

Overflow.args = {
    children: <>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta molestiae aut labore eius ipsa eum.</>
};