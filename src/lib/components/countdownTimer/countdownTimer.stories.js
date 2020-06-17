import React from 'react';
import CountdownTimer from './countdownTimer';

export default {
  title: 'CountdownTimer',
  component: CountdownTimer,
  parameters: {
    jest: ['countdownTimer.test.js'],
  },
};

export const oneDateTimer = () => <CountdownTimer date="2019-10-08T09:00:00" />;

export const otherDateTimer = () => <CountdownTimer date="2023-11-09T21:30:14" />;
