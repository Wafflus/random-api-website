import { BsFillPatchQuestionFill } from 'react-icons/bs';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Menu } from '..';
import { MenuArea } from '../../menu-area';
import { MenuItem } from '../../menu-item';
import React from 'react';

export default {
  title: 'Components/Menu',
  component: Menu
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

const menuItemChildren = <><BsFillPatchQuestionFill /> <span>Menu Item</span></>;

const menuAreaChildren = [
  <MenuItem id='one' href='/one'>{menuItemChildren}</MenuItem>,
  <MenuItem id='two' href='/two'>{menuItemChildren}</MenuItem>,
  <MenuItem id='three' href='/three'>{menuItemChildren}</MenuItem>
];

const separateChildren = [
    <a className='text-white'>Link 1</a>,
    <a className='text-white'>Link 2</a>
]

const children = [
  <MenuArea title='Menu Area'>{menuAreaChildren}</MenuArea>
];

export const Normal = Template.bind({});
export const SeparateItems = Template.bind({});

Normal.args = {
  children,
  defaultActiveItem: 'one',
  title: 'Menu Title',
};

SeparateItems.args = {
  children,
  defaultActiveItem: 'one',
  title: 'Menu Title',
  separateItemsChildren: separateChildren
};