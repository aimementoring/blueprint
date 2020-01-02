import React from 'react';
import AnimatedCircleText from './animatedCircleText';

export default {
  title: 'Animated Circle Text',
  parameters: {
    jest: ['animatedCircleText.test.js'],
  },
};

export const circleWithCustomOptions = () => (
  <AnimatedCircleText
    text="Testing my circle"
    size={200}
    duration={8}
    fontSize={20}
    reverse
  />
);

export const defaultCircle = () => (
  <AnimatedCircleText text="Loading Loading Loading..." />
);
