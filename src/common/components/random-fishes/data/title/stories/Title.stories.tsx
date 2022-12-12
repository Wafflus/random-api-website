import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Title } from '..';
import React from 'react';

export default {
  title: 'Components/Title',
  component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Normal = Template.bind({});
export const Overflow = Template.bind({});

Normal.args = {
    children: <>Lorem, ipsum.</>
};

Overflow.args = {
    children: <>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta molestiae aut labore eius ipsa eum.</>
};