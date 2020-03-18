import React from 'react';
import { select } from '@storybook/addon-knobs';
import Loading from './loading';

const themeOptions = {
  storm: 'storm',
  base: 'base',
  rainbow: 'rainbow',
  plain: 'plain',
};

const loadingOptions = {
  true: true,
  false: false,
};

export default {
  title: 'Loading',
  parameters: {
    jest: ['loading.test.js'],
  },
};

export const loading = () => (
  <Loading
    loading={select('loading', loadingOptions, 'true')}
    theme={select('theme', themeOptions, 'plain')}
  />
);
