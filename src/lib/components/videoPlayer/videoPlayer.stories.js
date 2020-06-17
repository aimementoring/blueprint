import React from 'react';
import { select } from '@storybook/addon-knobs';
import VideoPlayer from './videoPlayer';
import themeOptions from '../../styles/themeOptions';

export default {
  title: 'VideoPlayer',
  component: VideoPlayer,
  parameters: {
    jest: ['videoPlayer.test.js'],
  },
};

export const videoWithCustomSettings = () => (
  <VideoPlayer
    url="https://player.vimeo.com/video/300970506"
    controls
    playing={false}
    loop
    progressInterval={2000}
    playsinline
  />
);

export const defaultVideo = () => (
  <VideoPlayer url="https://www.youtube.com/watch?v=FHCd_XdFLjE" />
);

export const videoWithTheme = () => (
  <VideoPlayer
    url="https://www.youtube.com/watch?v=FHCd_XdFLjE"
    theme={select('theme', themeOptions, 'plain')}
  />
);
