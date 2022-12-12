import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Footer } from '..';
import React from 'react';

export default {
  title: 'Components/Footer',
  component: Footer
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

const children = [
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto sit voluptate nemo magni non dolorum earum iste doloribus possimus, aut ullam neque dolore quasi nulla veniam placeat nobis. Numquam saepe temporibus culpa sed doloribus architecto consequatur placeat a quidem porro, debitis sint totam eius consectetur qui dolorem dolores quisquam ipsa!</p>,
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil perferendis tenetur porro minima adipisci perspiciatis est repellendus magnam tempora. Sed, exercitationem et! Labore ipsam, sunt neque asperiores modi consequatur quam.</p>
];

export const Normal = Template.bind({});

Normal.args = {
  children,
};