import { ApiFooter } from '..';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { fishApiLinks, imageApiLinks } from '@content';
import React from 'react';

export default {
  title: 'Components/Api Footer',
  component: ApiFooter
} as ComponentMeta<typeof ApiFooter>;

const Template: ComponentStory<typeof ApiFooter> = (args) => <ApiFooter {...args} />;

export const SingleLink = Template.bind({});
export const MultipleLinks = Template.bind({});

SingleLink.args = {
  apiLinks: fishApiLinks,
};

MultipleLinks.args = {
  apiLinks: imageApiLinks,
};