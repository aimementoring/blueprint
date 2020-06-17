import React from 'react';
import { text } from "@storybook/addon-knobs";
import Avatar from './avatar';

export default {
  title: 'Avatar',
  parameters: {
    jest: ['avatar.test.js'],
  },
};

export const initialsAvatar = () => <Avatar text={text('Name', 'Kevin Bardi')} />;

export const imageAvatar = () => (
  <Avatar
    text="AIME Global"
    photo={[
      {
        url: text('url', 'https://d1muvgoqe3g8vw.cloudfront.net/website/assets/images/illustrations/pinky-earth.png'),
      },
    ]}
  />
);
