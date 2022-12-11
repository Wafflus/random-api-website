import { BsFillPatchQuestionFill } from 'react-icons/bs';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MenuArea } from '..';
import { MenuItem } from '../../menu-item';
import React from 'react';

export default {
  title: 'Components/Menu Area',
  component: MenuArea,
  argTypes: {
    activeItem: { options: ['one', 'two', 'three'], control: { type: 'radio' } },
  }
} as ComponentMeta<typeof MenuArea>;

const Template: ComponentStory<typeof MenuArea> = (args) => <MenuArea {...args} />;

const menuItemChildren = <><BsFillPatchQuestionFill /> <span>Menu Item</span></>;

const children = [
    <MenuItem id='one'>{menuItemChildren}</MenuItem>,
    <MenuItem id='two'>{menuItemChildren}</MenuItem>,
    <MenuItem id='three'>{menuItemChildren}</MenuItem>
];

export const Active = Template.bind({});
export const NotActive = Template.bind({});

Active.args = {
    active: true,
    activeItem: 'one',
    children,
    title: 'Menu Area',
};

NotActive.args = {
    active: true,
    activeItem: 'wrong-id',
    children,
    title: 'Menu Area',
};