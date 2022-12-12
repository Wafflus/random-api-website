import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RandomPictures } from '..';
import React from 'react';

export default {
  title: 'Modules/Random Pictures',
  component: RandomPictures,
} as ComponentMeta<typeof RandomPictures>;

const Template: ComponentStory<typeof RandomPictures> = (args) => <RandomPictures {...args} />;

export const Normal = Template.bind({});

Normal.args = {
};