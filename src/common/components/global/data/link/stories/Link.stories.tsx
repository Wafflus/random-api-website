import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Link } from '..';
import React from 'react';

export default {
  title: 'Components/Link',
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Normal = Template.bind({});

Normal.args = {
  children: <>Link Text</>,
  href: '#',
};