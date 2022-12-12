import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Info } from '..';
import React from 'react';

export default {
  title: 'Components/Info',
  component: Info,
  argTypes: {
    alignment: { options: ['start', 'center', 'end'], control: { type: 'radio' } },
    breakpointAlignment: { options: ['start', 'center', 'end'], control: { type: 'radio' } }
  }
} as ComponentMeta<typeof Info>;

const Template: ComponentStory<typeof Info> = (args) => <Info {...args} />;

export const Normal = Template.bind({});
export const WithOverflow = Template.bind({});

Normal.args = {
    alignment: 'center',
    breakpointAlignment: 'start',
    description: 'Lorem ipsum dolor sit amet.',
    extra: 'Lorem, ipsum.',
    title: 'Lorem, ipsum dolor.',
};

WithOverflow.args = {
    alignment: 'center',
    breakpointAlignment: 'start',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta molestiae aut labore eius ipsa eum.',
    extra: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta molestiae aut labore eius ipsa eum.',
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta molestiae aut labore eius ipsa eum.',
};