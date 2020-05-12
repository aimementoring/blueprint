import React from 'react';
import Logo from './logo';

export default {
  title: 'Logo',
  parameters: {
    jest: ['logo.test.js'],
  },
};

export const logo = () => (<Logo />);
