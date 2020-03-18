import React, { useState } from 'react';
import { select } from '@storybook/addon-knobs';
import StarsFeedback from './starsFeedback';

const themeOptions = {
  storm: 'storm',
  base: 'base',
  rainbow: 'rainbow',
  plain: 'plain',
};

export default {
  title: 'StarsFeedback',
  parameters: {
    jest: ['starsFeedback.test.js'],
  },
};

export const Feedback = () => {
  const [stars, setStars] = useState(0);
  return (
    <StarsFeedback
      starSelected={stars}
      handleStarSelected={setStars}
      theme={select('theme', themeOptions, 'plain')}
    />
  );
};
