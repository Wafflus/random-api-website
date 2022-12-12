import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Description } from '..';
import React from 'react';

export default {
  title: 'Components/Description',
  component: Description,
} as ComponentMeta<typeof Description>;

const Template: ComponentStory<typeof Description> = (args) => <Description {...args} />;

export const Normal = Template.bind({});

Normal.args = {
    children: <>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia rem exercitationem aliquam voluptate quibusdam. Earum sequi deleniti, eaque rem expedita necessitatibus repudiandae sunt suscipit, reprehenderit eveniet aut omnis eligendi pariatur?</>
};