import React from 'react';
import { select } from '@storybook/addon-knobs';
import ProgressBar from './progressBar';
import themeOptions from '../../styles/themeOptions';

export default {
  title: 'ProgressBar',
  parameters: {
    jest: ['progressBar.test.js'],
  },
};

export const progressBar = () => (
  <ProgressBar progress={90} theme={select('theme', themeOptions, 'plain')} />
);

export const progressBarWithNumber = () => (
  <ProgressBar progress={70} theme={select('theme', themeOptions, 'plain')} displayNumber />
);

export const customisedProgressBar = () => (
  <ProgressBar
    progress={45}
    displayNumber
    backgroundColor="green"
    barColor="red"
    color="yellow"
    height={40}
    fontSize={30}
    theme={select('theme', themeOptions, 'plain')}
  />
);
