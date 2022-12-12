import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Image } from '..';
import React from 'react';

export default {
  title: 'Components/Image',
  component: Image,
  argTypes: {
    objectFill: { options: ['object-none', 'object-contain', 'object-cover', 'object-fill', 'object-scale-down'], control: { type: 'radio' } }
  }
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const WithImage = Template.bind({});
export const WithVideo = Template.bind({});
export const AltText = Template.bind({});
export const WithoutSource = Template.bind({});

WithImage.args = {
  alt: 'A walrus holding his precious waffle, hiding its belly.',
  objectFill: 'object-none',
  shouldFill: true,
  src: '/static/images/Wafflus.png',
};

WithVideo.args = {
  alt: 'A ferret dancing in a noodly way.',
  src: '/static/videos/ferret-dance.mp4',
};

AltText.args = {
  alt: 'A walrus holding his precious waffle, hiding its belly.',
  height: 335,
  src: '/static/images/WrongImage.png',
  width: 335,
};

WithoutSource.args = {
  divHeightClass: 'w-[150px]',
  divWidthClass: 'w-[150px]',
  src: '',
};