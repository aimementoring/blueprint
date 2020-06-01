import React, { useState } from 'react';
import { select } from '@storybook/addon-knobs';
import StarsFeedback from './starsFeedback';
import themeOptions from '../../styles/themeOptions';

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
