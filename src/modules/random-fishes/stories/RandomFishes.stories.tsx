import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RandomFishes } from '..';
import React from 'react';

export default {
  title: 'Modules/Random Fishes',
  component: RandomFishes,
} as ComponentMeta<typeof RandomFishes>;

const Template: ComponentStory<typeof RandomFishes> = (args) => <RandomFishes {...args} />;

export const Normal = Template.bind({});

Normal.args = {
};