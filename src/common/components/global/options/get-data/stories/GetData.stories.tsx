import { ComponentStory, ComponentMeta } from '@storybook/react';
import { GetData } from '..';
import React from 'react';

export default {
  title: 'Components/Get Fact',
  component: GetData
} as ComponentMeta<typeof GetData>;

const Template: ComponentStory<typeof GetData> = (args) => <GetData {...args} />;

export const WithData = Template.bind({});
export const NoData = Template.bind({});
export const WithRange = Template.bind({});
export const DisabledButton = Template.bind({});

WithData.args = {
  data: ['', '', '', '', ''],
  title: 'Button'
};

NoData.args = {
  data: [],
  title: 'Button'
};

WithRange.args = {
  data: [],
  maximumApiCalls: 10,
  title: 'Button',
};

DisabledButton.args = {
  data: [],
  disableApiButton: true,
  title: 'Button',
};