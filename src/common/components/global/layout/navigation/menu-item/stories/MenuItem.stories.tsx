import { BsFillPatchQuestionFill } from 'react-icons/bs';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MenuItem } from '..';
import React from 'react';

export default {
  title: 'Components/Menu Item',
  component: MenuItem,
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = (args) => <MenuItem {...args} />;

const children = <><BsFillPatchQuestionFill /> <span>Menu Item</span></>;

export const Chosen = Template.bind({});
export const NotChosen = Template.bind({});

Chosen.args = {
    active: true,
    activeItem: 'id',
    children,
    href: '/id',
    id: 'id',
};

NotChosen.args = {
    active: true,
    activeItem: 'wrong-id',
    children,
    href: '/id',
    id: 'id',
};